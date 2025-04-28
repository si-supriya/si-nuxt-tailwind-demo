

// Listing01V1.js
import { tv } from 'tailwind-variants';

export const Listing01V1 = tv({
  slots: {
    base: 'waf-component waf-listing widget-layout-01 bg-gray-50', // base class
  },
  variants: {
    // If you plan to add variants, define them here
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
