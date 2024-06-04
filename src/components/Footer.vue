<script setup>
import { reactive } from 'vue'

const myData = reactive([
	{ img: '/images/facebook.png' },
	{ img: '/images/twitter.png' },
	{
		img: '/images/instragram.png',
	},
	{
		img: '/images/linkedin.png',
	},
])
</script>

<template>
	<div class="bg-[#1C1E53]">
		<div class="container">
			<div class="md:grid grid-cols-2 py-[100px] gap-x-[50px] items-center">
				<div class="pt-5">
					<img src="/images/Logo.png" />
					<p class="max-w-[380px] mt-4 text-[white]">
						We are always open to discuss your project and improve your online
						presence
					</p>
					<div
						class="pl-[37px] md:flex gap-x-4 text-[#282938] bg-[#FCD980] py-1 w-[50%] md:py-6 md:w-[80%] mt-[30px] md:mt-[86px]"
					>
						<div class="">
							<p class="text-[14px] md:text-[18px] font-bold">Email me at</p>
							<p>bekzodtoxtamuratov@mgail.com</p>
						</div>

						<div class="">
							<p class="text-[14px] md:text-[18px] font-bold">Call us</p>
							<p>0927 6277 2852</p>
						</div>
					</div>
				</div>
				<div class="h-full">
					<h1
						class="text-[30px] md:text-[48px] font-bold leading-16 text-[white]"
					>
						Lets Talk!
					</h1>
					<p
						class="mt-[14px] leading-7 text-4 font-normal max-w-[400px] text-[white]"
					>
						We are always open to discuss your project, improve your online
						presence and help with your UX/UI design challenges.
					</p>
					<div class="flex mt-[28px] gap-x-4">
						<div v-for="(item, index) in myData" :key="index">
							<img :src="item.img" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
