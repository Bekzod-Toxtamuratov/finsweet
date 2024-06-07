<script setup>
import { reactive } from 'vue'

const myData = reactive([
	{ img: '/images/facebook.png', hreff: 'https://www.facebook.com/' },
	{ img: '/images/twitter.png', hreff: 'https://x.com/?lang=en' },
	{ img: '/images/instragram.png', hreff: 'https://www.instagram.com' },
	{ img: '/images/linkedin.png', hreff: 'https://www.linkedin.com' },
])
</script>

<template>
	<div class="bg-[#1C1E53]">
		<div class="container mx-auto px-4">
			<div class="md:grid grid-cols-2 gap-12 py-8 md:py-24 items-center">
				<div class="pt-5">
					<img src="/images/Logo.png" class="w-full max-w-xs" />
					<p class="mt-4 text-white max-w-xs">
						We are always open to discuss your project and improve your online
						presence
					</p>
					<div
						class="flex flex-col md:flex-row gap-4 bg-[#FCD980] text-[#282938] p-4 md:p-6 mt-8 md:mt-20"
					>
						<div>
							<p class="text-sm md:text-base font-bold">Email me at</p>
							<p>bekzodtoxtamuratov@gmail.com</p>
						</div>
						<div>
							<p class="text-sm md:text-base font-bold">Call us</p>
							<p>+99893 089-41-82</p>
						</div>
					</div>
				</div>
				<div>
					<h2 class="text-2xl md:text-5xl font-bold text-white mb-8 md:mb-4 max-md:mt-4">
						Let's Talk!
					</h2>
					<p class="text-white mb-8 md:mb-4 max-w-sm">
						We are always open to discuss your project, improve your online
						presence, and help with your UX/UI design challenges.
					</p>
					<div class="flex gap-6">
						<div v-for="(item, index) in myData" :key="index">
							<a :href="item.hreff">
								<img :src="item.img" class="w-8 h-8 md:w-12 md:h-12" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
