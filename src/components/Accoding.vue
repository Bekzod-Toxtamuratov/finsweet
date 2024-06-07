<script setup>
import { ref } from "vue";

const props = defineProps({ data: "String", parag: "String" });

// const props2 = defineProps({ });

const isOpen = ref(false);
function openAccordion() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="accordion w-full">
    <div
      class="header px-4 py-6 border-b border-gray-200 flex justify-between items-center"
      @click="openAccordion"
    >
      <div class="flex items-center">
        <span class="mr-10 text-[#2405F2] md:text-2xl">{{ props.data }}</span>
        <span class="md:text-2xl">{{ props.parag }}</span>
      </div>
      <span
        class="text-2xl md:text-3xl duration-200"
        :class="isOpen ? 'rotate-45' : ''"
        >+</span
      >
    </div>
    <div
      class="body bg-gray-50 overflow-hidden duration-200"
      :class="isOpen ? 'max-h-[500px]' : 'max-h-0'"
    >
      <div class="p-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  </div>
</template>

<style scoped></style>
