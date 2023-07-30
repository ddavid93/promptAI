<template>
  <div class="bg-gray-900">
    <div class="relative isolate overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1597589827703-f4b68eafa0ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        class="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div class="mx-auto max-w-4xl py-32">
        <Header class="py-10" />
        <ClientOnly>
          <Container />
        </ClientOnly>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts"></script>
