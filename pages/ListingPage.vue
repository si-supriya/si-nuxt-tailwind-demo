<template>

<WafRow>
    <Listing01V1 />
   

</WafRow>

</template>

<script>

import Listing01V1 from '../widgets/si-listing/vueHtml/Listing01V1.vue';
import WafRow from '../components/wafRow.vue';
export default {
    name: 'ListingPage',
    components: {
        Listing01V1,
        WafRow
    }
}
</script>

