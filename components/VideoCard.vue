<template>
  <div class="m-2 rounded overflow-hidden shadow-md">
    <a :href="videoUrl" target="_blank">
      <div class="relative">
        <img class="w-full" :src="video.snippet.thumbnails.medium.url">
        <span class="absolute pin-b pin-r inline-block bg-grey-lighter px-2 py-1 m-2 text-sm font-semibold text-grey-darker">{{ video.contentDetails.duration | duration }}</span>
      </div>
    </a>
    <div class="px-6 py-4">
      <a :href="videoUrl" target="_blank">
        <div class="font-bold text-xl mb-2">{{ video.snippet.title }}</div>
      </a>
      <a :href="channelUrl" target="_blank">
        <p class="text-grey-darker text-base">
          {{ video.snippet.channelTitle }}
        </p>
      </a>
      <p class="text-grey-darker text-base">
        {{ video.statistics.viewCount | vues }} • {{ video.snippet.publishedAt | fromNow }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: Object
  },
  computed: {
    videoUrl () {
      return 'https://www.youtube.com/watch?v=' + this.video.id
    },
    channelUrl () {
      return 'https://www.youtube.com/channel/' + this.video.snippet.channelId
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>
