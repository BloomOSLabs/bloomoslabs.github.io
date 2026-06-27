import clsx from 'clsx'
import { type VariantProps } from 'class-variance-authority'
import { type MouseEvent, type ReactNode, useState } from 'react'
import { Link, type LinkProps, type To } from 'react-router-dom'

import { buttonVariants } from '../Button/buttonVariants'

interface LinkButtonProps extends VariantProps<typeof buttonVariants> {
  children: ReactNode
  className?: string
  startIcon?: ReactNode
  endIcon?: ReactNode
  fullWidth?: boolean

  to?: To
  replace?: boolean
  state?: LinkProps['state']
  relative?: LinkProps['relative']

  onClick?: (
    event: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLButtonElement>
  ) => void

  onConfirm?: () => void
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
  to,
  replace,
  state,
  relative,
  onClick,
  onConfirm
}: LinkButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])

  function createRipple (
    event: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLButtonElement>
  ) {
    const rect = event.currentTarget.getBoundingClientRect()

    const ripple: Ripple = {
      id: Date.now(),
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      size: Math.max(rect.width, rect.height)
    }

    setRipples(previous => [...previous, ripple])

    setTimeout(() => {
      setRipples(previous => previous.filter(item => item.id !== ripple.id))
    }, 600)
  }

  function renderRipples () {
    return ripples.map(ripple => (
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
    ))
  }

  const classes = clsx(
    buttonVariants({
      variant,
      size,
      fullWidth
    }),
    'relative overflow-hidden',
    className
  )

  const content = (
    <>
      {startIcon}

      <span>{children}</span>

      {endIcon}

      {renderRipples()}
    </>
  )

  if (!to) {
    return (
      <button
        type='button'
        className={classes}
        onClick={event => {
          createRipple(event)
          onClick?.(event)
          onConfirm?.()
        }}
      >
        {content}
      </button>
    )
  }

  const isExternal =
    typeof to === 'string' &&
    (to.startsWith('http://') || to.startsWith('https://'))

  if (isExternal) {
    return (
      <a
        href={to}
        target='_blank'
        rel='noopener noreferrer'
        className={classes}
        onClick={event => {
          createRipple(event)
          onClick?.(event)
          onConfirm?.()
        }}
      >
        {content}
      </a>
    )
  }

  return (
    <Link
      to={to}
      replace={replace}
      state={state}
      relative={relative}
      className={classes}
      onClick={event => {
        createRipple(event)
        onClick?.(event)
        onConfirm?.()
      }}
    >
      {content}
    </Link>
  )
}
