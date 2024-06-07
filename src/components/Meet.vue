<script setup>
import { ref } from 'vue'

const myData = ref([
	{
		name: 'John Smith',
		job: 'CEO',
		img: [
			'images/facebook.png',
			'images/twitter.png',
			'images/linkedin.png',
			'images/radius.png',
		],
	},
	{
		name: 'Simon Adams',
		job: 'CEO',
		img: [
			'images/facebook.png',
			'images/twitter.png',
			'images/linkedin.png',
			'images/radius2.png',
		],
	},
	{
		name: 'Paul Jones',
		job: 'Design Lead',
		img: [
			'images/facebook.png',
			'images/twitter.png',
			'images/linkedin.png',
			'images/radius3.png',
		],
	},
	{
		name: 'Sara Hardin',
		job: 'Project Manager',
		img: [
			'images/facebook.png',
			'images/twitter.png',
			'images/linkedin.png',
			'images/radius.png',
		],
	},
])
</script>

<template>
	<div class="bg-[#F4F6FC]">
		<div class="container">
			<div>
				<h2
					class="md:leading-[64px] text-[30px] md:text-[48px] font-bold text-center mb-[48px] md:pt-[128px]"
				>
					Meet our team
				</h2>
			</div>
			<div class="md:grid grid-cols-4 gap-x-7 pb-[50px] md:pb-[128px]">
				<div v-for="(item, index) in myData" :key="index">
					<div class="bg-[white] group hover::shadow py-[30px] mb-5">
						<div
							class="relative w-[168px] h-[168px] mx-auto rounded-full overflow-hidden"
						>
							<div
								class="absolute left-0 -bottom-full duration-300 group-hover:bottom-0 w-full h-full"
							>
								<div class="flex h-full justify-center items-end">
									<div class="flex gap-3 pb-5">
										<img :src="item.img[0]" alt="Facebook" />
										<img :src="item.img[1]" alt="Twitter" />
										<img :src="item.img[2]" alt="LinkedIn" />
									</div>
								</div>
							</div>
							<img :src="item.img[3]" alt="radius" class="w-full h-full" />
						</div>
						<p
							class="text-[18px] md:text-[24px] leading-[36px] font-medium mt-[30px] text-center"
						>
							{{ item.name }}
						</p>
						<p class="text-center max-md:text-[14px]">{{ item.job }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
