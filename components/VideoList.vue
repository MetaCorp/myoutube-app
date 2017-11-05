<template>
  <div class="flex flex-wrap">
    <div v-for="video in videos" :key="video.id" class="w-full md:w-1/2 lg:w-1/3">
      <video-card :video="video"></video-card>
    </div>
  </div>
</template>

<script>
import VideoCard from '@/components/VideoCard'

export default {
  props: {
    videos: Array
  },
  components: {
    VideoCard
  }
}
</script>
