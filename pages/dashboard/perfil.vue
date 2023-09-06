<script setup>
definePageMeta({
  middleware: "auth",
  layout: "dashboard",
});

// const user = useSupabaseUser();
// const client = useSupabaseClient();

const name = ref("");
</script>
<template>
  <div>
    Bienvenido al perfil
    <UIInput v-model="name" placeholder="Nombre" />
    {{ name }}
  </div>
</template>
