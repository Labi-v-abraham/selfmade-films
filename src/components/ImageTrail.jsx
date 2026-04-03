import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import styles from './ImageTrail.module.css'

function lerp(a, b, n) {
  return (1 - n) * a + n * b
}

function getLocalPointerPos(e, rect) {
  let clientX = 0
  let clientY = 0
  if (e.touches && e.touches.length > 0) {
    clientX = e.touches[0].clientX
    clientY = e.touches[0].clientY
  } else {
    clientX = e.clientX
    clientY = e.clientY
  }
  return {
    x: clientX - rect.left,
    y: clientY - rect.top,
  }
}

function getMouseDistance(p1, p2) {
  const dx = p1.x - p2.x
  const dy = p1.y - p2.y
  return Math.hypot(dx, dy)
}

function getNewPosition(position, offset, arr) {
  const realOffset = Math.abs(offset) % arr.length
  if (position - realOffset >= 0) {
    return position - realOffset
  }
  return arr.length - (realOffset - position)
}

class ImageItem {
  DOM = { el: null, inner: null }
  defaultStyle = { scale: 1, x: 0, y: 0, opacity: 0 }
  rect = null

  constructor(DOM_el) {
    this.DOM.el = DOM_el
    this.DOM.inner = this.DOM.el.querySelector('.content__img-inner')
    this.getRect()
    this.initEvents()
  }

  initEvents() {
    this.resize = () => {
      gsap.set(this.DOM.el, this.defaultStyle)
      this.getRect()
    }
    window.addEventListener('resize', this.resize)
  }

  getRect() {
    this.rect = this.DOM.el.getBoundingClientRect()
  }
}

class ImageTrailVariant7 {
  constructor(container) {
    this.container = container
    this.DOM = { el: container }
    this._destroyed = false
    this._rafId = null
    this.images = [...container.querySelectorAll('.content__img')].map((img) => new ImageItem(img))
    this.imagesTotal = this.images.length
    this.imgPosition = 0
    this.zIndexVal = 1
    this.activeImagesCount = 0
    this.isIdle = true
    this.threshold = 80

    this.mousePos = { x: 0, y: 0 }
    this.lastMousePos = { x: 0, y: 0 }
    this.cacheMousePos = { x: 0, y: 0 }

    this.visibleImagesCount = 0
    this.visibleImagesTotal = 9
    this.visibleImagesTotal = Math.min(this.visibleImagesTotal, this.imagesTotal - 1)

    this.handlePointerMove = (ev) => {
      const rect = container.getBoundingClientRect()
      this.mousePos = getLocalPointerPos(ev, rect)
    }
    container.addEventListener('mousemove', this.handlePointerMove)
    container.addEventListener('touchmove', this.handlePointerMove, { passive: true })

    this.initRender = (ev) => {
      const rect = container.getBoundingClientRect()
      this.mousePos = getLocalPointerPos(ev, rect)
      this.cacheMousePos = { ...this.mousePos }
      this._rafId = requestAnimationFrame(() => this.render())
      container.removeEventListener('mousemove', this.initRender)
      container.removeEventListener('touchmove', this.initRender)
    }
    container.addEventListener('mousemove', this.initRender)
    container.addEventListener('touchmove', this.initRender, { passive: true })
  }

  destroy() {
    this._destroyed = true
    if (this._rafId) cancelAnimationFrame(this._rafId)
    this.container.removeEventListener('mousemove', this.handlePointerMove)
    this.container.removeEventListener('touchmove', this.handlePointerMove)
    this.container.removeEventListener('mousemove', this.initRender)
    this.container.removeEventListener('touchmove', this.initRender)
    this.images.forEach((img) => {
      window.removeEventListener('resize', img.resize)
      gsap.killTweensOf(img.DOM.el)
    })
  }

  render() {
    if (this._destroyed) return
    const distance = getMouseDistance(this.mousePos, this.lastMousePos)
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.3)
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.3)

    if (distance > this.threshold) {
      this.showNextImage()
      this.lastMousePos = { ...this.mousePos }
    }
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1

    this._rafId = requestAnimationFrame(() => this.render())
  }

  showNextImage() {
    ++this.zIndexVal
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0
    const img = this.images[this.imgPosition]
    ++this.visibleImagesCount

    gsap.killTweensOf(img.DOM.el)
    const scaleValue = gsap.utils.random(0.5, 1.6)

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          scale: scaleValue - Math.max(gsap.utils.random(0.2, 0.6), 0),
          rotationZ: 0,
          opacity: 1,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2,
        },
        {
          duration: 0.4,
          ease: 'power3',
          scale: scaleValue,
          rotationZ: gsap.utils.random(-3, 3),
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2,
        },
        0
      )

    if (this.visibleImagesCount >= this.visibleImagesTotal) {
      const lastInQueue = getNewPosition(this.imgPosition, this.visibleImagesTotal, this.images)
      const oldImg = this.images[lastInQueue]
      gsap.to(oldImg.DOM.el, {
        duration: 0.4,
        ease: 'power4',
        opacity: 0,
        scale: 1.3,
        onComplete: () => {
          if (this.activeImagesCount === 0) {
            this.isIdle = true
          }
        },
      })
    }
  }

  onImageActivated() {
    this.activeImagesCount++
    this.isIdle = false
  }

  onImageDeactivated() {
    this.activeImagesCount--
  }
}

const variantMap = {
  7: ImageTrailVariant7,
}

export default function ImageTrail({ items = [], variant = 7 }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || items.length === 0) return

    const v = Number(variant) || 7
    const Cls = variantMap[v] || variantMap[7]
    const instance = new Cls(containerRef.current)

    return () => {
      if (typeof instance.destroy === 'function') instance.destroy()
      else gsap.killTweensOf(containerRef.current?.querySelectorAll('.content__img') ?? [])
    }
  }, [variant, items])

  return (
    <div className={styles.container} ref={containerRef}>
      {items.map((url, i) => (
        <div className={`content__img ${styles.contentImg}`} key={`${url}-${i}`}>
          <div
            className={`content__img-inner ${styles.contentImgInner}`}
            style={{ backgroundImage: `url(${url})` }}
          />
        </div>
      ))}
    </div>
  )
}
