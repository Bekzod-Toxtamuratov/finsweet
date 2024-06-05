<script setup>
import { reactive } from 'vue'

const mydata = reactive([
	{
		name: 'Home',
		url: '/',
	},
	{
		name: 'About Us',
		url: '/about',
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
	<div class="bg-[#1C1E53] py-3">
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
				
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
