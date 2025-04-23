<template>
  <div :class="variants.base()">
    <div class="layout-wrapper">
      <div class="waf-head">
        <div :class="variants.headWrap()">
          <h3 class="title">Latest Listing page</h3>
          <span>View More</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Listing01V1 } from '../variant/Listing01V1.js'

export default {
  data () {
    return {
      variants: Listing01V1({
        size: 'sm',
        layout: 'block'
      })
    }
  },
  mounted() {
    console.log(this.variants)
  }
}
</script>
