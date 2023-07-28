<template>
  <div class="relative pt-2">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-700" />
    </div>
    <div class="relative flex justify-center px-3">
      <span class="isolate inline-flex space-x-2 rounded-md shadow-sm">
        <button class="btn tooltip" data-tip="Save">
          <Icon name="material-symbols:save" size="20" />
        </button>
        <button class="btn tooltip" data-tip="Run">
          <Icon name="material-symbols:play-arrow-rounded" size="20" />
        </button>
      </span>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
