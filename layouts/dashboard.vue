<!-- TODO: add left panel and header -->
<script setup></script>
<template>
  <div class="h-screen bg-gray-50">
    <!-- left panel -->
    <NavbarsLeftDashboard />
    <!-- TOP panel -->
    <div class="ml-36">
      <NavbarsTopDashboard />
      <div class="mx-auto max-w-3xl p-4">
        <slot />
      </div>
    </div>
  </div>
</template>
