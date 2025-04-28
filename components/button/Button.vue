<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>

<script>
import { button } from '@/components/button/button.js'

export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'md',
    },
  },
  computed: {
    buttonClass() {
      return button({ variant: this.variant, size: this.size });
    }
  }
}
</script>

