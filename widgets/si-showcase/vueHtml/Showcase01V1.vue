<template>
  <div :class="baseClasses">
    <h2 :class="titleClasses">{{ title }}</h2>
    <p :class="contentClasses">{{ content }}</p>
  </div>
</template>

<script>
import Showcase01V1 from '@/widgets/si-showcase/variant/Showcase01V1.js';

export default {
  name: 'Showcase01V1',

  props: {
    title: { type: String, required: true },
    content: { type: String, required: true },
    color: { type: String, default: 'primary' },
    size: { type: String, default: 'md' },
  },

  computed: {
    baseClasses() {
      const classes = Showcase01V1({ color: this.color, size: this.size }).base();

      return classes;
    },
    titleClasses() {
      const classes = Showcase01V1({ color: this.color, size: this.size }).title();
      return classes;
    },
    contentClasses() {
      const classes = Showcase01V1({ color: this.color, size: this.size }).content();
      return classes;
    },
  },
};
</script>
