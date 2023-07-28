<template>
  <div
    class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-600 bg-opacity-10 backdrop-blur-lg"
  >
    <div class="px-4 py-5 sm:px-6">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Prompt</span>
        </label>
        <textarea
          v-model="prompt"
          class="textarea textarea-bordered h-24 resize-none"
          placeholder="Bio"
        ></textarea>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-x-10 px-4 py-5 sm:p-6">
      <div class="space-y-4">
        <h4>Inputs</h4>
        <Empty message="No inputs" />
        <div class="alert">
          <Icon
            name="material-symbols:info-outline-rounded"
            class="text-blue-500"
            size="20"
          />
          <span v-pre
            >You can add inputs to your prompt using placeholders:
            {{ input }}</span
          >
        </div>
      </div>
      <div class="space-y-4">
        <h3>Preview</h3>
        <Preview :preview="prompt" />
      </div>
    </div>
  </div>
  <Tasks />
</template>

<script setup lang="ts">
const prompt = ref("");
</script>
