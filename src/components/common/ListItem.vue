<template>
  <div
    class="flex items-center space-x-3 hover:bg-gray-hover rounded-lg py-2 pl-2 pr-1 cursor-pointer -mx-1"
  >
    <div
      class="bg-button rounded-full flex items-center justify-center h-10 min-w-10"
    >
      <font-awesome-icon :icon="item.icon" size="lg" />
    </div>

    <div class="flex flex-col">
      <span>{{ item.title }}</span>
      <span class="text-sm text-gray-text">{{ item.description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
