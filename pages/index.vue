<template>
  <div class="container mx-auto my-4">
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
      filters: ['Music', 'Physic', 'Development'],
      videos: [{
        id: 0,
        title: 'Test',
        owner: 'Owner',
        vues: 1400,
        length: '12:03',
        posted: '3h'
      }, {
        id: 1,
        title: 'Test',
        owner: 'Owner',
        vues: 1400,
        length: '12:03',
        posted: '3h'
      }, {
        id: 2,
        title: 'Test',
        owner: 'Owner',
        vues: 1400,
        length: '12:03',
        posted: '3h'
      }, {
        id: 0,
        title: 'Test',
        owner: 'Owner',
        vues: 1400,
        length: '12:03',
        posted: '3h'
      }, {
        id: 1,
        title: 'Test',
        owner: 'Owner',
        vues: 1400,
        length: '12:03',
        posted: '3h'
      }, {
        id: 2,
        title: 'Test',
        owner: 'Owner',
        vues: 1400,
        length: '12:03',
        posted: '3h'
      }]
    }
  },
  components: {
    VideoFilter,
    VideoList
  }
}
</script>
