<script setup lang="ts">
import { RouterView } from "vue-router";

import AppSidebar from "@/components/AppSidebar.vue";
</script>

<template>
  <div class="app-shell">
    <AppSidebar />

    <main class="app-main" aria-label="Main content">
      <RouterView />
    </main>
  </div>
</template>
