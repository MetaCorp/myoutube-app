<template>
  <div class="container mx-auto my-4">
    <nuxt-link to="/test">To Test</nuxt-link>
    <video-filter :filters="filters" v-model="currentFilter"></video-filter>
    <video-list :videos="videos"></video-list>
  </div>
</template>

<script>
import VideoList from '@/components/VideoList'
import VideoFilter from '@/components/VideoFilter'

export default {
  data () {
    return {
      currentFilter: 'Development',
      filters: ['Music', 'Physic', 'Development']
    }
  },
  async fetch ({ store }) {
    console.log('fetch2')
    await store.dispatch('getVideos')
  },
  computed: {
    videos () {
      return this.$store.state.videos
    }
  },
  components: {
    VideoFilter,
    VideoList
  }
}
</script>
