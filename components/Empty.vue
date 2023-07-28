<template>
  <div
    class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center"
  >
    <Icon name="iconoir:input-field" size="40" />
    <span class="mt-2 block text-sm font-semibold">{{ message }}</span>
  </div>
</template>
<script lang="ts" setup>
defineProps<{ message: string }>();
</script>
