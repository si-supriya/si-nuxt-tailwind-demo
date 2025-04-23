<template>
  <div class="">
    <NuxtLink to="/" class="btn-primary "> Home </NuxtLink>
    <NuxtLink to="/about" class="btn-primary  ">
      About Page
    </NuxtLink>

    <NuxtLink to="/contact" class="btn-primary">
      Contact Us
    </NuxtLink>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script> 