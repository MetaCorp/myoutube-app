<template>
  <div class="flex justify-end mx-2">
    <div class="relative">
      <select v-model="currentFilter" class="block appearance-none bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded">
        <option v-for="(filter, i) in filters" :key="i">{{ filter }}</option>
      </select>
      <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    filters: Array
  },
  computed: {
    currentFilter: {
      get: function () {
        return this.value
      },
      set: function (newValue) {
        this.$emit('input', newValue)
      }
    }
  }
}
</script>
