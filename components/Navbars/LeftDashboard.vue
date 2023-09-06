<script setup>
const client = useSupabaseClient();
const router = useRouter();
const routes = ref([]);

onMounted(async () => {
  console.log("we ran once");
  routes.value = await db.routes.getRoutesByFilter(client, "dashboard");
});
</script>
<template>
  <aside class="fixed left-0 top-0 h-full bg-gray-800 w-36">
    <!-- Logo -->
    <div></div>
    <!-- Menu -->
    <ul>
      <li v-for="route in routes">
        <button @click="() => router.push(route.path)">{{ route.name }}</button>
      </li>
    </ul>
  </aside>
</template>
