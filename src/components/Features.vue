<script setup>
import { reactive } from 'vue'

const mydata = reactive([
	{
		title: 'Uses Client First',
		text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ',
	},
	{
		title: 'Two Free Revision Round',
		text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ',
	},
	{
		title: 'Template Customization',
		text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ',
		image: '/images/Icon1.png',
	},
	{
		title: '24/7 Support',
		text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ',
		image: '/images/Icon2.png',
	},
	{
		title: 'Quick Delivery',
		text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ',
		image: '/images/Icon3.png',
	},
	{
		title: 'Hands-on approach',
		text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ',
	},
])
</script>

<template>
	<div class="bg-[#F4F6FC] mt-[128px]">
		<div class="container pt-[128px] pb-[158px] ">
			<h1 class="text-[#282938] leading-7 text-[16px] font-medium text-center">
				Features
			</h1>

			<div class="mt-3 mb-[42px]">
				<h2
					class="pl-[100px] text-[30px] md:text-[48px] font-bold leading-[64px] text-center"
				>
					Design that solves problems, one product at a time
				</h2>
			</div>
			<div
				class="max-md:gap-y-5 max-md:flex-col max-md:flex md:grid grid-cols-3 gap-8 mb-[128px]"
			>
				<div class="bg-[#FFFFFF]" v-for="item in mydata" :key="item.id">
					<div class="" v-if="item.image">
						<div class="pt-[48px]">
							<img :src="item.image" alt="Feature image" class="px-5 mb-4" />
							<p class="text-[#282938] text-6 font-bold mb-3 px-9">
								{{ item.title }}
							</p>
							<p class="text-[16px] font-normal leading-7 pb-12 text-center">
								{{ item.text }}
							</p>
						</div>
					</div>
					<div class="" v-else>
						<div class="pt-[108px]">
							<p class="text-[#282938] text-6 font-bold mb-3 px-9">
								{{ item.title }}
							</p>
							<p
								class="text-[14px] font-normal leading-7 items-center max-w-[300px] i pb-12 px-[20px] text-center"
							>
								{{ item.text }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
