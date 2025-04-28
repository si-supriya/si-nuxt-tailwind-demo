<template>
  <div :class="containerClasses({ size: 'lg' })">
    <h1>Listing01V1</h1>
  </div>
</template>

<script>
import { Listing01V1 } from '../variant/Listing01V1.js';

export default {
  name: 'Listing01V1',
  
  computed: {
    containerClasses() {
      // Call the function with variants
      return Listing01V1({ size: 'lg' });
    },
  },
};
</script>