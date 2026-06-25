import clsx from 'clsx'
import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function Section ({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        'relative flex w-full justify-center py-20 md:py-24 lg:py-32',
        className
      )}
    >
      {children}
    </section>
  )
}
