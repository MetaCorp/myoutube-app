<template>
  <div class="m-2 rounded overflow-hidden shadow-md">
    <div class="relative">
      <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg">
      <span class="absolute pin-b pin-r inline-block bg-grey-lighter px-2 py-1 m-2 text-sm font-semibold text-grey-darker">{{ video.length }}</span>
    </div>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ video.title }}</div>
      <p class="text-grey-darker text-base">
          {{ video.owner }}
      </p>
      <p class="text-grey-darker text-base">
          {{ video.vues }} vues • il y a {{ video.posted }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: Object
  }
}
</script>
