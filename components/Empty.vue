<template>
  <div
    class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center"
  >
    <Icon name="iconoir:input-field" size="40" />
    <span class="mt-2 block text-sm font-semibold">{{ message }}</span>
  </div>
  <div class="alert">
    <Icon
      name="material-symbols:info-outline-rounded"
      class="text-blue-500"
      size="20"
    />
    <span v-pre
      >You can add inputs to your prompt using placeholders: {{ input }}</span
    >
  </div>
</template>
<script lang="ts" setup>
defineProps<{ message: string }>();
</script>
