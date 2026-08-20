<script setup lang="ts">
const navigationItems = [
  { label: "Home", to: "/" },
  { label: "Ask Parrot", to: "/ask" },
  { label: "History", to: "/history" },
];
</script>

<template>
  <aside class="sidebar" aria-label="Primary navigation">
    <RouterLink class="sidebar-brand" to="/">AstroParrot AI</RouterLink>

    <nav class="sidebar-nav">
      <RouterLink
        v-for="item in navigationItems"
        :key="item.to"
        class="sidebar-link"
        :to="item.to"
      >
        {{ item.label }}
      </RouterLink>
    </nav>
  </aside>
</template>
