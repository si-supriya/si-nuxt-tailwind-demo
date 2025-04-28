// Variant file for Showcase01V1
import { tv } from 'tailwind-variants';

const Showcase01V1 = tv({
  slots: {
    base: 'bg-white px-8 rounded-lg text-left',
    title: 'text-lg font-bold text-gray-800',
    content: 'text-gray-600 mt-2',
  },
  variants: {
    color: {
      primary: {  
        base: 'text-blue-200',
      },
      secondary: {
        base: 'bg-gray-200 text-black',
      },
    },
    size: {
      sm: {
        base: 'p-2',
      },
      md: {
        base: 'p-8',
      },
      lg: {
        base: 'p-6',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});

export default Showcase01V1;
