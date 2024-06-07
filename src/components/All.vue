<script setup>
import { reactive, ref } from 'vue'

const myNavbar = ref([
	{
		name: 'All',
	},
	{
		name: 'UI Design',
	},
	{ name: 'Webflow Design' },
	{
		name: 'Figma Design',
	},
])
const myOurPhoto = reactive([
	{
		img: '/images/Cover.png',
		name: 'Template 1',
		parag:
			'	Apparently we had reached a great height in the atmosphere, for thesky was a dead black, and the stars had ceased to twinkle.',
		pro: '	View Portfolio',
		icon: '/images/Arrow3.png',
	},
	{
		img: '/images/Cover2.png',
		name: 'Template 2',
		parag:
			'	Apparently we had reached a great height in the atmosphere, for thesky was a dead black, and the stars had ceased to twinkle.',
		pro: '	View Portfolio',
		icon: 'images/Arrow3.png',
	},
	{
		img: '/images/Cover3.png',
		name: 'Template 3',
		parag:
			'	Apparently we had reached a great height in the atmosphere, for thesky was a dead black, and the stars had ceased to twinkle.',
		pro: '	Read case study',
		icon: '/images/Arrow3.png',
	},
	{
		img: '/images/Cover4.png',
		name: 'Template 4',
		parag:
			'	Apparently we had reached a great height in the atmosphere, for thesky was a dead black, and the stars had ceased to twinkle.',
		pro: '	Read case study',
		icon: '/images/Arrow3.png',
	},
	{
		img: '/images/Cover5.png',
		name: 'Template 5',
		parag:
			'	Apparently we had reached a great height in the atmosphere, for thesky was a dead black, and the stars had ceased to twinkle.',
		pro: '	Read case study',
		icon: '/images/Arrow3.png',
	},
	{
		img: '/images/Cover6.png',
		name: 'Template 6',
		parag:
			'	Apparently we had reached a great height in the atmosphere, for thesky was a dead black, and the stars had ceased to twinkle.',
		pro: '	Read case study',
		icon: '/images/Arrow3.png',
	},
])
</script>

<template>
	<div>
		<div class="container">
			<ul
				class="flex gap-8 text-[18px] leading-[32px] font-normal justify-center pt-[96px] bg-red"
			>
				<li
					class="hover:text-[#2405F2] hover:font-bold cursor-pointer"
					v-for="(item, index) in myNavbar"
					:key="index"
				>
					{{ item.name }}
				</li>
			</ul>
			<div class="mt-[48px] md:grid grid-cols-2 gap-x-[34px] gap-y-[50px]">
				<div
					v-for="(item, index) in myOurPhoto"
					:key="index"
					class="max-md:mb-[30px]"
				>
					<img :src="item.img" />
					<h2
						class="text-[31px] md:text-[38px] text-xl md:leading-[56px] font-bold max-md:my-[20px] mt-6"
					>
						{{ item.name }}
					</h2>
					<p
						class="text-sm md:text-[16px] font-medium leading-7 opacity-70 mb-6"
					>
						{{ item.parag }}
					</p>
					<div class="flex gap-4 items-center">
						<p
							class="text-sm md:text-[16px] leading-6 text-[#282938] font-medium"
						>
							{{ item.pro }}
						</p>
						<img class="max-md:w-[30px] max-md:h-[15px]" :src="item.icon" />
					</div>
				</div>
			</div>
			<div class="mt-[128px] max-w-[730px] mx-auto">
				<h2
					class="text-[30px] max-md:max-w-[350px] max-md:mx-auto md:text-[48px] font-bold leading-[40px] md:leading-[64px] text-center mb-5"
				>
					Let's build something great together
				</h2>
				<p
					class="text-[16px] leading-[28px] text-center max-md:max-w-[400px] max-md:mx-auto max-w-[500px] mx-auto mb-[56px]"
				>
					Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
					ultricies nec dolor sit amet, scelerisque cursus purus.
				</p>
				<div class="flex md:px-[250px] mb-[128px]">
					<button
						class="rounded-3xl font-medium py-3 px-[50px] md:py-4 md:px-16 bg-[#FCD980] text-center mx-auto"
					>
						Contact Us
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
