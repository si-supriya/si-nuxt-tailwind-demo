<template>
  <waf-row> 
    <Listing01 />
  </waf-row>
</template>

<script>
import WafRow from "@/components/wafRow.vue";
import Listing01 from "@/widgets/si-listing/vueHtml/Listing01.vue";
export default {
  name: 'HomePage',
  components: {
    WafRow,
    Listing01
  },
  head() {
    return {
      title: 'Home - My Nuxt App'
    }
  }
}
</script> 