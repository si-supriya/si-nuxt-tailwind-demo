<template>
  <div class="p-10">
    <Showcase01V1 
      title="Widget Example"
      content="Using Tailwind Variants"
      color="primary"
      size="md"
    />

    <Showcase01V1 
      title="Secondary Example"
      content="Different Style"
      color="secondary"
      size="lg"
    />
  </div>
</template>

<script>
import Showcase01V1 from '@/widgets/si-showcase/vueHtml/Showcase01V1.vue';

export default {
  components: {
    Showcase01V1,
  },
};
</script>
