<template>
  <div
    class="relative border-0"
    contenteditable="true"
    @focusin="isFocus = true"
    @focusout="isFocus = false"
    :class="isFocus ? `text-${color}-400` : `badge badge-${color}`"
    v-html="word"
  ></div>
</template>
<script lang="ts" setup>
const isFocus = ref(false);
const props = defineProps<{
  placeholder: string;
  color: string;
}>();

const word = computed(() => {
  return isFocus.value
    ? props.placeholder
    : props.placeholder.replace(/{{|}}/g, "");
});

watch(isFocus, (val) => {
  console.log(222, val);
});
</script>
