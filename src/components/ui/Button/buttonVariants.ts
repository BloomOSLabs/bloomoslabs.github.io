import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'rounded-full',
    'font-medium',
    'transition-all',
    'duration-200',
    'outline-none',
    'select-none',
    'disabled:pointer-events-none',
    'disabled:opacity-50',
    'focus-visible:ring-2',
    'focus-visible:ring-(--md-primary)'
  ],
  {
    variants: {
      variant: {
        filled: [
  'bg-(--md-primary)',
  'text-on-primary',
  'hover:brightness-105',
  '[--ripple-color:var(--ripple-light)]'
],

tonal: [
  'bg-(--md-primary-container)',
  'text-on-primary-container',
  'hover:bg-(--md-surface-container-high)',
  '[--ripple-color:var(--ripple-dark)]'
],

outlined: [
  'border',
  'border-(--md-outline)',
  'bg-transparent',
  'text-on-surface',
  'hover:bg-(--md-surface-container-low)',
  '[--ripple-color:var(--ripple-dark)]'
],

elevated: [
  'bg-(--md-surface-container)',
  'text-on-surface',
  'shadow-md',
  'hover:shadow-lg',
  '[--ripple-color:var(--ripple-dark)]'
],

        text: [
          'bg-transparent',
          'text-(--md-primary)',
          'hover:bg-(--md-surface-container-low)',
          '[--ripple-color:var(--ripple-dark)]'
        ]
      },

      size: {
        small: 'h-10 px-4 text-sm',
        medium: 'h-12 px-6',
        large: 'h-14 px-8 text-base'
      },

      fullWidth: {
        true: 'w-full',
        false: ''
      }
    },

    defaultVariants: {
      variant: 'filled',
      size: 'medium',
      fullWidth: false
    }
  }
)