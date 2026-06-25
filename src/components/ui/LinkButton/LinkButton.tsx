import clsx from 'clsx'
import { type VariantProps } from 'class-variance-authority'
import { type MouseEvent, type ReactNode, useState } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

import { buttonVariants } from '../Button/buttonVariants'

interface LinkButtonProps
  extends Omit<LinkProps, 'className' | 'children'>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
  className?: string
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

export default function LinkButton ({
  children,
  className,
  variant,
  size,
  fullWidth,
  startIcon,
  endIcon,
  onClick,
  ...props
}: LinkButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])

  function createRipple (event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect()

    const size = Math.max(rect.width, rect.height)

    const ripple: Ripple = {
      id: Date.now(),
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
    <Link
      {...props}
      className={clsx(
        buttonVariants({
          variant,
          size,
          fullWidth
        }),
        'relative overflow-hidden',
        className
      )}
      onClick={event => {
        createRipple(event)
        onClick?.(event)
      }}
    >
      {startIcon}

      <span>{children}</span>

      {endIcon}

      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className='pointer-events-none absolute rounded-full animate-ripple'
          style={{
            width: ripple.size,
            height: ripple.size,
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            backgroundColor: "var(--ripple-color)"
          }}
        />
      ))}
    </Link>
  )
}
