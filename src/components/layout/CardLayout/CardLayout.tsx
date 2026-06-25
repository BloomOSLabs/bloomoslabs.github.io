import clsx from 'clsx'
import type { ReactNode } from 'react'

type CardAlignment = 'start' | 'center'

interface CardLayoutProps {
  children: ReactNode
  className?: string
  align?: CardAlignment
}

export default function CardLayout ({
  children,
  className,
  align = 'start'
}: CardLayoutProps) {
  return (
    <article
      className={clsx(
        'group card',
        align === 'center' ? 'card--center' : 'card--start',
        className
      )}
    >
      <div className='card-content'>{children}</div>
    </article>
  )
}
