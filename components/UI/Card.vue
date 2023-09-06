<script setup>
const props = defineProps({});
</script>
<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white shadow-2xl rounded-2xl bg-clip-border"
  >
    <div class="p-3">
      <slot></slot>
    </div>
  </div>
</template>
