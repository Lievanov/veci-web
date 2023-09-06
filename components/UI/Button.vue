<script setup>
const props = defineProps({
  label: String,
});
</script>

<template>
  <button
    v-bind="$attrs"
    class="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-105 active:opacity-80 hover:shadow-xs"
    @click="$emit('onClick')"
  >
    {{ label }}
  </button>
</template>
