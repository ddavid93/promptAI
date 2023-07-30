<template>
  <label class="label">
    <span class="label-text">Prompt</span>
  </label>
  <div
    contenteditable="true"
    ref="promptRef"
    @input="
      handleInput($event);
      promptExport = $event.target.innerHTML;
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

const promptExport = ref(prompt.value);

onMounted(() => handleInput());

function handleInput(e?: Record<any, HTMLInputElement> | null) {
  //Resize height of div element
  promptRef.value.style.height = "auto";
  promptRef.value.style.height = !e
    ? "200px"
    : `${e.target?.scrollHeight - 16}px`;

  emits("update:modelValue", promptExport.value);
}
</script>
