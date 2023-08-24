<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});
const client = useSupabaseClient();
const router = useRouter();

const logOut = () => {
  client.auth.signOut();
  router.push('/login');
};
</script>

<template>
  <div>
    hello dashboard
    <button @click="logOut">Log Out</button>
  </div>
</template>
