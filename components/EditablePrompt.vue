<template>
  <label class="label">
    <span class="label-text">Prompt</span>
  </label>
  <textarea
    ref="promptRef"
    v-model="prompt"
    @input="handleInput"
    class="textarea textarea-bordered h-auto resize-none"
  />
</template>

<script lang="ts" setup>
defineProps<{ modelValue: string }>();

const emits = defineEmits(["update:modelValue"]);

const promptRef = ref();
const prompt = ref(`
<p>
Given the following fruit, output the closest color hex value that matches the color of that fruit.
</p>
<p class="pt-4 pb-4">
Fruit: <br>
<span class="text-indigo-400">{{ fruit }}</span>
</p>
Color hex string:
`);
onMounted(() => handleInput());
const handleInput = (e?: Record<any, HTMLInputElement> | null) => {
  if (e) {
    promptRef.value.style.height = "auto";
    promptRef.value.style.height = `${e.target?.scrollHeight - 16}px`;
  }
  emits("update:modelValue", prompt.value);
};
</script>
