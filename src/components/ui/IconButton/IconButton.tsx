import clsx from 'clsx'
import { type VariantProps } from 'class-variance-authority'
import {
  type ButtonHTMLAttributes,
  type MouseEvent,
  type ReactNode,
  useState
} from 'react'

import { buttonVariants } from '../Button/buttonVariants'
import { iconButtonVariants } from './iconButtonVariants'

interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>,
    VariantProps<typeof iconButtonVariants> {
  children: ReactNode
}

interface Ripple {
  id: number
  x: number
  y: number
  size: number
}

export default function IconButton ({
  children,
  className,
  variant,
  size,
  onClick,
  ...props
}: IconButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])

  function createRipple (event: MouseEvent<HTMLButtonElement>) {
    const rect = event.currentTarget.getBoundingClientRect()

    const ripple: Ripple = {
      id: Date.now(),
      size: Math.max(rect.width, rect.height),
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    }

    setRipples(prev => [...prev, ripple])

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== ripple.id))
    }, 600)
  }

  return (
    <button
      {...props}
      className={clsx(
        buttonVariants({
          variant
        }),
        iconButtonVariants({
          size
        }),
        className
      )}
      onClick={event => {
        createRipple(event)
        onClick?.(event)
      }}
    >
      {children}

      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className='pointer-events-none absolute rounded-full animate-ripple'
          style={{
            width: ripple.size,
            height: ripple.size,
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            backgroundColor: 'var(--ripple-color)'
          }}
        />
      ))}
    </button>
  )
}
