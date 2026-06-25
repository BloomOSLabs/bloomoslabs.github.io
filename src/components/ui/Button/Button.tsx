import clsx from 'clsx'
import { type VariantProps } from 'class-variance-authority'
import {
  type ButtonHTMLAttributes,
  type MouseEvent,
  type ReactNode,
  useState
} from 'react'

import { buttonVariants } from './buttonVariants'

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
  startIcon?: ReactNode
  endIcon?: ReactNode
  fullWidth?: boolean
}

interface Ripple {
  id: number
  x: number
  y: number
  size: number
}

export default function Button({
  children,
  className,
  variant,
  size,
  fullWidth,
  startIcon,
  endIcon,
  onClick,
  ...props
}: ButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])

  function createRipple(event: MouseEvent<HTMLButtonElement>) {
    const rect = event.currentTarget.getBoundingClientRect()

    const size = Math.max(rect.width, rect.height)

    const ripple: Ripple = {
      id: performance.now(),
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      size
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
          variant,
          size,
          fullWidth
        }),
        'relative isolate overflow-hidden',
        className
      )}
      onClick={event => {
        createRipple(event)
        onClick?.(event)
      }}
    >
      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {startIcon}

        <span>{children}</span>

        {endIcon}
      </span>

      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="pointer-events-none absolute z-0 rounded-full animate-ripple"
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