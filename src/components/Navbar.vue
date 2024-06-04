<script setup>
import { reactive } from 'vue'

const mydata = reactive([
	{
		name: 'Home',
		url: '/',
	},
	{
		name: 'About Us',
		url: '/',
	},
	{
		name: 'Pricing',
		url: '/',
	},
	{
		name: 'Work',
		url: '/',
	},
	{
		name: 'Blog',
		url: '/',
	},
	{
		name: 'Contact Us',
		url: '/',
	},
])
</script>
<template>
	<div class="bg-[#1C1E53] pb-[128px]">
		<div class="container">
			<div>
				<div class="flex justify-between items-center">
					<img src="/images/Logo.png" />
					<div class="hidden md:flex gap-6 items-center">
						<router-link
							v-for="(item, i) in mydata"
							:key="i"
							class="text-white hover-underline-animation"
							:class="
								i == mydata.length - 1 ? 'border-2 rounded-3xl py-2 px-6 ' : ''
							"
							:to="item.url"
							>{{ item.name }}
						</router-link>
					</div>
				</div>
				<div
					class="max-md:border max-md:flex-col mt-[126px] border-red-500 md:flex gap-x-8"
				>
					<div>
						<h1
							class="mb-7 text-[25px] md:text-[54px] max-w-[582px] text-[white] font-bold leading-[74px]"
						>
							Building stellar websites for early startups
						</h1>
						<p
							class="max-w-[562px] font-medium text-[16px] leading-7 text-[white]"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt.
						</p>

						<div class="md:flex gap-x-10 mt-[50px] items-center">
							<button
								class="rounded-3xl font-medium border border-white-500 py-3 px-8 md:py-4 md:px-16 bg-[#FCD980]"
							>
								Contact us
							</button>
							<p
								class="text-3 mt-2 md:text-[14px] font-medium leading-7 text-[white]"
							>
								View Pricing
							</p>
						</div>
					</div>
					<div>
						<img class="max-md:w-[60%]" src="/images/intro.png" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
