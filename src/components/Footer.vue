<script setup>
import { reactive } from 'vue'

const myData = reactive([
	{ img: '/images/facebook.png', hreff: 'https://www.facebook.com/' },
	{ img: '/images/twitter.png', hreff: 'https://x.com/?lang=en' },
	{
		img: '/images/instragram.png',
		hreff: 'https://www.instragram.com',
	},
	{
		img: '/images/linkedin.png',
		hreff: 'https://www.linkedin.com',
	},
])
</script>

<template>
	<div class="bg-[#1C1E53]">
		<div class="container">
			<div
				class="md:grid grid-cols-2 pt-[30px] pb-[50px] md:py-[100px] gap-x-[50px] items-center"
			>
				<div class="pt-5">
					<img src="/images/Logo.png" />
					<p class="max-w-[380px] mt-4 text-[white]">
						We are always open to discuss your project and improve your online
						presence
					</p>
					<div
						class="pl-[25px] md:flex md:gap-x-4 text-[#282938] bg-[#FCD980] py-[2px] w-full md:py-6 md:w-[80%] mt-[30px] md:mt-[86px] overflow-hidden"
					>
						<div class="">
							<p class="text-[14px] md:text-[18px] font-bold">Email me at</p>
							<p>bekzodtoxtamuratov@mgail.com</p>
						</div>

						<div class="max-md:mt-4">
							<p class="text-[14px] md:text-[18px] font-bold">Call us</p>
							<p>+99893 089-41-82</p>
						</div>
					</div>
				</div>
				<div class="h-full">
					<h2
						class="max-md:my-8 text-[25px] md:text-[48px] font-bold leading-16 text-[white]"
					>
						Lets Talk!
					</h2>
					<p
						class="mt-[14px] leading-7 text-4 font-normal max-w-[400px] text-[white]"
					>
						We are always open to discuss your project, improve your online
						presence and help with your UX/UI design challenges.
					</p>
					<div class="flex mt-[28px] gap-x-[26px] max-md:gap-x-8">
						<div v-for="(item, index) in myData" :key="index">
							<a :href="item.hreff">
								<img :src="item.img" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
