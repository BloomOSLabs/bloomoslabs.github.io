import clsx from 'clsx'
import { type VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { filterChipVariants } from './filterChipVariants'

interface FilterChipProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof filterChipVariants> {
  children: ReactNode
}

export default function FilterChip ({
  children,
  className,
  selected,
  size,
  ...props
}: FilterChipProps) {
  return (
    <button
      type='button'
      className={clsx(
        filterChipVariants({
          selected,
          size
        }),
        'filter-chip',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
