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
      <div class="grid gap-y-3">
        <h4>Inputs</h4>
        <Empty v-if="!prompt" message="No inputs" />
        <template v-else>
          <template
            v-for="(input, index) in placeholders"
            :key="placeholders[index].value"
          >
            <div class="inline-grid space-y-2">
              <span class="badge badge-primary">
                {{ input.key }}
              </span>
              <input
                type="text"
                v-model="input.value"
                placeholder="Type here..."
                class="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
          </template>
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

async function run() {
  loading.value = true;
  const { error, data } = await useFetch("/api/openai", {
    body: {
      prompt: prompt.value,
    },
    method: "post",
  });
  loading.value = false;
}
</script>

<style>
.disabled {
  opacity: 0.7;
  pointer-events: none;
  cursor: not-allowed;
}
</style>
