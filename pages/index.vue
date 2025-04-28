<template>
  <div class="p-10">
    <Showcase01V1 
      title="Welcome to the Showcase"
      content="This card is powered by tailwind-variants."
      color="primary"
      size="md"
    />

    <Showcase01V1 
      title="Another Showcase"
      content="This one has secondary color and large size."
      color="secondary"
      size="lg"
    />
  </div>
</template>

<script>
import Showcase01V1 from '@/widgets/si-showcase/vueHtml/Showcase01V1.vue'; // ✅ Import your component

export default {
  components: {
    Showcase01V1,
  },
};
</script>
