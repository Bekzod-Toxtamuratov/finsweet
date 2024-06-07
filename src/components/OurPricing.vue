<script setup>
import { ref } from 'vue'

import Accoring from '../components/Accoding.vue'

const myData = ref([
	{
		price: '$299',
		title: 'Per Design',
		page: 'Landing Page',
		parag: 'When you’re ready to go beyond prototyping in Figma,',
		img: '/images/Pointer.png',
		x: [
			'All limited links',
			'Own analytics platform',
			'Chat support',
			'Optimize hashtags',
			'Unlimited users',
		],
		button: 'Get started',
	},
	{
		price: '$399',
		title: 'Multi Design',
		page: 'Website Page',
		parag:
			'When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.',
		img: '/images/Pointer.png',
		x: [
			'All limited links',
			'Own analytics platform',
			'Chat support',
			'Optimize hashtags',
			'Unlimited users',
		],
		button: 'Get started',
	},
	{
		price: '$499 +',
		title: 'Per Design',
		page: 'Complex Project',
		parag: 'When you’re ready to go beyond prototyping in Figma,',
		img: '/images/Pointer.png',
		x: [
			'All limited links',
			'Own analytics platform',
			'Chat support',
			'Optimize hashtags',
			'Unlimited users',
		],
		button: 'Contact us',
	},
])
</script>

<template>
	<div class="container bg-[#FFFFFF]">
		<h1
			class="mb-[16px] pt-[220px] text-center text-[30px] md:text-[48px] leading-[67px] font-bold"
		>
			Our Pricing Plans
		</h1>
		<p
			class="text-[16px] leading-7 font-medium max-w-[400px] md:max-w-[562px] mx-auto mb-[61px]"
		>
			When you’re ready to go beyond prototyping in Figma, Webflow is ready to
			help you bring your designs to life — without coding them.
		</p>
		<div
			class="max-md:gap-y-10 max-md:flex max-md:flex-col md:grid grid-cols-3 gap-x-8 mb-[128px]"
		>
			<div v-for="(item, index) in myData" :key="index">
				<div
					class="pt-[64px] pl-[48px] pb-[78px] bg-[#F4F6FC] group hover:bg-[#1C1E53]"
				>
					<div class="flex gap-x-5 items-center mb-5">
						<p
							class="font-pop font-bold text-[38px] leading-[56px] text-[black] group-hover:text-[white]"
						>
							{{ item.price }}
						</p>
						<p
							class="text-[#2405F2] text-[16px] font-normal group-hover:text-[#FCD980]"
						>
							{{ item.title }}
						</p>
					</div>
					<p
						class="text-[24px] font-normal leading-[36px] mb-2 group-hover:text-[white]"
					>
						{{ item.page }}
					</p>
					<p
						class="text-[16px] h-[84px] font-normal leading-7 max-w-[281px] group-hover:text-[white]"
					>
						{{ item.parag }}
					</p>
					<div class="group-hover:text-[white] mt-[50px]">
						<div class="flex flex-col gap-y-2">
							<div
								v-for="(link, idx) in item.x"
								:key="idx"
								class="flex items-center gap-x-4"
							>
								<img :src="item.img" />
								<p class="text-[16px] font-normal leading-7">{{ link }}</p>
							</div>
						</div>
					</div>
					<div class="mt-8">
						<button
							class="py-5 px-[60px] rounded-[41px] text-[white] bg-[#282938] group-hover:bg-[#FCD980] group-hover:text-[black]"
						>
							{{ item.button }}
						</button>
					</div>
				</div>
			</div>
		</div>

		<Accoring  class="mt-[300px] mb-[400px]"  />
	</div>
</template>

<style lang="scss" scoped></style>
