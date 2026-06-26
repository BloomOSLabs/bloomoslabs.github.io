import clsx from 'clsx'
import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container ({ children, className }: ContainerProps) {
  return (
    <div className={clsx('mx-auto w-full max-w-6xl px-6 md:px-8 lg:px-10', className)}>
      {children}
    </div>
  )
}
