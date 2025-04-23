<template>
  <section class="waf-row" :class="sectionClass">
    <div class="waf-view">
      <div :class="containerClass">
        <div class="row">
          <div :class="columnClass">
            <section class="site-content">
              <slot />
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WafRow',
  props: {
    containerClass: {
      type: String,
      default: 'container-fluid'
    },
    columnClass: {
      type: String,
      default: 'col-lg-12'
    },
    sectionClass: {
      type: String,
      default: ''
    }
  }
}
</script>
