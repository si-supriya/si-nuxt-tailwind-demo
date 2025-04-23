<template>
  <div
    class="waf-component waf-showcase widget-layout-01 lg:w-full"
    :class="variants.componentClass"
  >
    <div class="layout-wrapper">
      <div class="waf-head">
        <div class="head-wrap" :class="variants.headWrap">
          <h3 class="title" :class="variants.title">
            Latest Showcase
          </h3>
          <span>View More</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Showcase01V1 } from '../variant/Showcase01V1.js'

export default {
  data () {
    return {
      variants: Showcase01V1
    }
  }
}
</script>
