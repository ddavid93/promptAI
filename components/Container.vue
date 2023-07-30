<template>
  <div
    class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-600 bg-opacity-10 backdrop-blur-lg"
  >
    <div class="px-4 py-5 sm:px-6">
      <div class="form-control">
        <EditablePrompt v-model="prompt" />
      </div>
    </div>
    <div class="grid grid-cols-2 gap-x-10 px-4 py-5 sm:p-6">
      <div class="space-y-4">
        <div>
          <h4>Inputs</h4>
          <template v-if="placeholders?.length">
            <div
              v-for="placeholder in placeholders"
              :key="placeholder"
              class="badge badge-primary"
            >
              {{ placeholder }}
            </div>
          </template>
        </div>

        <Empty v-if="!prompt" message="No inputs" />
        <input
          v-else
          type="text"
          v-model="inputModel"
          placeholder="Type here"
          class="input input-bordered input-primary w-full max-w-xs"
        />
      </div>
      <div class="space-y-4">
        <h3>Preview</h3>
        <div v-html="promptPreview"></div>
      </div>
    </div>
  </div>
  <Tasks />
</template>

<script setup lang="ts">
const inputModel = ref("Banana");
const prompt = ref("");

const placeholders = computed(() => {
  const matches = prompt.value.match(/{{\s*([^{}]+)\s*}}/g);
  return matches?.map((match) => match.replace(/{{|}}/g, ""));
});

const promptPreview = computed(() => {
  const matches = prompt.value.match(/{{\s*([^{}]+)\s*}}/g);
  if (!matches?.length) return prompt.value;
  // Temporally only take the first position (limited to one placeholder)
  return prompt.value.replace(matches[0], inputModel.value);
});
</script>
