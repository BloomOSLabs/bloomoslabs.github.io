import clsx from 'clsx'
import type { ReactNode } from 'react'

interface TonalIconProps {
  children: ReactNode
  className?: string
  size?: 'small' | 'medium' | 'large'
}

const sizes = {
  small: {
    container: 'h-12 w-12 rounded-[18px]',
    icon: '[&>svg]:h-6 [&>svg]:w-6'
  },
  medium: {
    container: 'h-16 w-16 rounded-[22px]',
    icon: '[&>svg]:h-8 [&>svg]:w-8'
  },
  large: {
    container: 'h-20 w-20 rounded-[28px]',
    icon: '[&>svg]:h-10 [&>svg]:w-10'
  }
}

export default function TonalIcon ({
  children,
  className,
  size = 'medium'
}: TonalIconProps) {
  return (
    <div
      className={clsx(
        `
        mx-2
        my-2

        flex
        items-center
        justify-center

        bg-(--md-primary-container)
        text-(--md-primary)

        transition-all
        duration-300

        group-hover:scale-105
        `,
        sizes[size].container,
        sizes[size].icon,
        className
      )}
    >
      {children}
    </div>
  )
}
