<template>
  <div>
    <nuxt-link to="/test">To Test</nuxt-link>
    <video-filter :filters="filters" v-model="currentFilter"></video-filter>
    <video-list :videos="videos.items"></video-list>
    <video-load-more :fetchData="loadMore"></video-load-more>
  </div>
</template>

<script>
import allVideos from '@/apollo/queries/videos'
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
  apollo: {
    videos: {
      prefetch: true,
      query: allVideos
    }
  },
  methods: {
    loadMore () {

    }
  },
  components: {
    VideoFilter,
    VideoList,
    VideoLoadMore
  }
}
</script>
