<template>
  <div
    :class="{ disabled: loading }"
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
            <div class="space-x-2">
              <span
                v-for="placeholder in placeholders"
                :key="placeholder.key"
                class="badge badge-primary"
              >
                {{ placeholder.key }}
              </span>
            </div>
          </template>
        </div>

        <Empty v-if="!prompt" message="No inputs" />
        <template v-else>
          <input
            type="text"
            v-for="(input, index) in placeholders"
            :key="placeholders[index].value"
            v-model="input.value"
            placeholder="Type here..."
            class="input input-bordered input-primary w-full max-w-xs"
          />
        </template>
      </div>
      <div class="space-y-4">
        <h3>Preview</h3>
        <div v-html="promptPreview"></div>
      </div>
    </div>
  </div>
  <Tasks :class="{ disabled: loading }" @run="run" />
  <Results :loading="loading" />
</template>

<script setup lang="ts">
const prompt = ref("");
const loading = ref(false);
const placeholders = computed(() => {
  const matches = prompt.value.match(/{{\s*([^{}]+)\s*}}/g);
  return matches?.map((match) => ({
    key: match.replace(/{{|}}/g, "").trim(),
    value: "FakeValue",
  }));
});

const promptPreview = computed(() => {
  const matches = prompt.value.match(/{{\s*([^{}]+)\s*}}/g);
  if (!matches?.length) return prompt.value;
  const textProcessed = matches?.map((match) =>
    match.replace(/{{|}}/g, "").trim(),
  );
  return textProcessed.reduce((result, current) => {
    const currentPlaceholder = placeholders.value?.find(
      ({ key }) => key === current,
    );
    return result.replace(
      new RegExp(`{{\\s*${current}\\s*}}`, "g"),
      currentPlaceholder?.value || "",
    );
  }, prompt.value);
});

function run() {
  // Fake
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 4000);
}
</script>

<style>
.disabled {
  opacity: 0.7;
  pointer-events: none;
  cursor: not-allowed;
}
</style>
