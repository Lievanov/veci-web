<script setup>
const { value } = defineProps(["value"]);
const emit = defineEmits();

const inputValue = ref(value);

const emitValue = () => {
  emit("update:value", inputValue.value);
};
</script>
<template>
  <input
    v-bind="$attrs"
    v-model="inputValue"
    @input="emitValue"
    class="focus:shadow-sm text-sm leading-5 block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
  />
</template>
