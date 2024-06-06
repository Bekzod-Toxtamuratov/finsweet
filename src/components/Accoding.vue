<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
function openAccordion() {
	isOpen.value = !isOpen.value
}
</script>

<template>
	<div class="accordion w-[500px]">
		<div
			class="header bg-gray-700 p-4 text-white flex justify-between items-center"
			@click="openAccordion"
		>
			<span>click accordion</span>
			<span class="text-xl duration-200" :class="isOpen ? 'rotate-45' : ''"
				>+</span
			>
		</div>
		<div
			class="body bg-gray-100 overflow-hidden duration-200"
			:class="isOpen ? 'max-h-[500px]' : 'max-h-0'"
		>
			<div class="p-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
				architecto deserunt tempora animi nobis sequi vel sint error quaerat
				fugiat suscipit rerum possimus quidem eaque dolores optio, inventore
				expedita! Dignissimos!
			</div>
		</div>
	</div>
</template>

<style scoped></style>
