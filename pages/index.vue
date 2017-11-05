<template>
  <div>
    <nuxt-link to="/test">To Test</nuxt-link>
    <video-filter :filters="filters" v-model="currentFilter"></video-filter>
    <video-list :videos="videos"></video-list>
    <video-load-more :fetchData="loadMore"></video-load-more>
  </div>
</template>

<script>
import VideoList from '@/components/VideoList'
import VideoFilter from '@/components/VideoFilter'
import VideoLoadMore from '@/components/VideoLoadMore'

export default {
  data () {
    return {
      currentFilter: 'Development',
      filters: ['Music', 'Physic', 'Development']
    }
  },
  async fetch ({ store }) {
    await store.dispatch('loadVideos')
  },
  computed: {
    videos () {
      return this.$store.state.videos
    }
  },
  methods: {
    loadMore () {
      this.$store.dispatch('loadMoreVideos')
    }
  },
  components: {
    VideoFilter,
    VideoList,
    VideoLoadMore
  }
}
</script>
