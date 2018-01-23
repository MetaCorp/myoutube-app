<template>
  <mugen-scroll v-if="hasMore" :handler="fetchData" :should-handle="!loading" class="flex justify-center my-4">
    loading...
  </mugen-scroll>
</template>

<script>
import MugenScroll from 'vue-mugen-scroll'

export default {
  props: {
    fetchData: Function,
    hasMore: Boolean,
    loading: Boolean
  },
  components: { MugenScroll }
}
</script>
