<template>
  <label class="label">
    <span class="label-text">Prompt</span>
  </label>
  <div
    contenteditable="true"
    ref="promptRef"
    @focusin="isFocus = true"
    @focusout="isFocus = false"
    @input="
      promptExport = $event.target.innerHTML;
      handleInput($event);
    "
    v-html="prompt"
    class="textarea textarea-bordered h-auto resize-none"
  ></div>
</template>

<script lang="ts" setup>
defineProps<{ modelValue: string }>();

const emits = defineEmits(["update:modelValue"]);

const promptRef = ref();
const prompt = ref(`<div class="p-2 pb-4">
          <p>
          Given the following fruit, output the closest color hex value that matches the color of that fruit.
          </p>
          <p>
          Fruit: <br>
          {{ fruit }}
          </p>
</div>`);
const originalPrompt = computed(() => prompt.value);
const promptExport = ref(prompt.value);
const isFocus = ref(false);

onMounted(() => handleInput());

function handleInput(e?: Record<any, HTMLInputElement> | null) {
  //Resize height of div element
  promptRef.value.style.height = "auto";
  promptRef.value.style.height = !e
    ? "200px"
    : `${e.target?.scrollHeight - 16}px`;

  emits("update:modelValue", promptExport.value);
}

watch(
  isFocus,
  (val) => {
    prompt.value = originalPrompt.value.replaceAll(
      /\{\{\s*([^{}]+)\s*\}\}/g,
      val
        ? "<span>{{ $1 }}</span>"
        : '<span class="badge badge-primary">$1</span>',
    );
  },
  { immediate: true },
);
</script>
