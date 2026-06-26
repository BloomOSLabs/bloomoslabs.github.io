import { cva } from 'class-variance-authority'

export const filterChipVariants = cva(
    [
        'inline-flex',
        'items-center',
        'justify-center',
        'rounded-full',
        'border',
        'font-medium',
        'transition-all',
        'duration-200',
        'cursor-pointer',
        'select-none',
        'outline-none',
        'disabled:pointer-events-none',
        'disabled:opacity-50'
    ],
    {
        variants: {
            selected: {
                true: [
                    'border-transparent',
                    'bg-(--md-primary-container)',
                    'text-(--md-on-primary-container)'
                ],
                false: [
                    'border-(--md-outline-variant)',
                    'bg-(--md-surface-container-low)',
                    'text-(--md-on-surface-variant)',
                    'hover:bg-(--md-surface-container)'
                ]
            },

            size: {
                small: 'h-8 px-3 text-sm',
                medium: 'h-10 px-4 text-sm',
                large: 'h-12 px-5'
            }
        },

        defaultVariants: {
            selected: false,
            size: 'medium'
        }
    }
)