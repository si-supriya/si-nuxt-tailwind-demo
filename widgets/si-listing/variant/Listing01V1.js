// Listing01V1.js
import { tv } from 'tailwind-variants'

export const Listing01V1 = tv({
  slots: {
    base: 'waf-component waf-listing widget-layout-01',
    headWrap: 'head-wrap'
  },
  variants: {
    size: {
      sm: {
        base: 'size-72'
      },
      md: {
        base: 'size-96'
      },
      lg: {
        base: 'size-full'
      }
    },
    layout: {
      block: {
        base: 'block',
        headWrap: 'flex flex-row'
      },
      inline: {
        base: 'inline-block',
        headWrap: 'flex flex-col'
      }
    }
  },
  defaultVariants: {
    size: 'sm',
    layout: 'block'
  }
})
