<template>
  <div
    class="flex items-center space-x-3 hover:bg-gray-hover rounded-lg py-2 pl-2 pr-1 cursor-pointer -mx-1 group"
  >
    <div class="relative min-w-16">
      <img :src="item.image" alt="avatar" class="h-16 w-16 rounded-full" />
      <div
        v-if="item.isConnected"
        class="group-hover:border-gray-hover absolute border-2 border-card bg-success h-4 w-4 rounded-full bottom-0 right-0"
      ></div>
    </div>
    <div class="flex flex-col truncate">
      <span>{{ item.name }}</span>
      <div class="flex items-center text-sm text-gray-text truncate">
        <span class="truncate">{{ item.lastMessage.content }}</span>
        <strong class="mx-1">·</strong>
        <span>{{ item.lastMessage.sendAt | date }} </span>
      </div>
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
