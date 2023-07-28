<template>
  <div class="relative pt-2">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-700" />
    </div>
    <div class="relative flex justify-center px-3">
      <span class="isolate inline-flex space-x-2 rounded-md shadow-sm">
        <select class="select max-w-xs" v-model="modelGroup">
          <option disabled selected>OpenAI</option>
          <option v-for="modelGroup in modelGroups" :value="modelGroup.id">
            {{ modelGroup.name }}
          </option>
        </select>
        <select class="select w-full max-w-xs" v-model="model">
          <option v-for="model in models" :value="model.id">
            {{ model.name }}
          </option>
        </select>
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
<script setup lang="ts">
import { models, modelGroups } from "@/conf/conf";

const modelGroup = ref(1);
const model = ref(1);
</script>
