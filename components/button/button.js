// variants/button.js
import { tv } from 'tailwind-variants'

export const button = tv({
  base: 'inline-flex items-center ',
  variants: {
    variant: {
      default: 'bg-blue-600 text-white ',
      outline: 'border border-blue-600 text-blue-600',
    },
    size: {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-base',
      lg: 'h-12 px-6 text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})