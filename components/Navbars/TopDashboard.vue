<script setup>
const client = useSupabaseClient();
const router = useRouter();

const logOut = () => {
  client.auth.signOut();
  router.push("/login");
};
</script>
<template>
  <div class="bg-white shadow-md my-5">
    <button @click="logOut">Log Out</button>
  </div>
</template>
