import { useRef, useEffect, useState } from 'react'
import styles from './ScrollReveal.module.css'

export default function ScrollReveal({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  rootMargin = '0px 0px -8% 0px',
  threshold = 0.08,
  once = true, // It still defaults to true, but now we handle when it's false!
  style,
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 1. It entered the screen: show it!
          setVisible(true)
          // 2. If 'once' is true, stop watching it forever
          if (once) observer.unobserve(el)
        } else if (!once) {
          // 3. THE FIX: If 'once' is false and it leaves the screen, hide it again!
          setVisible(false)
        }
      },
      { rootMargin, threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, rootMargin, threshold])

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.visible : ''} ${className}`.trim()}
      style={{ ...style, '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}