<template>
	<swiper :pagination="true" :modules="modules" class="mySwiper">
		<swiper-slide>Slide 1</swiper-slide>
		<swiper-slide>Slide 2</swiper-slide>
		<swiper-slide>Slide 3</swiper-slide>
		<swiper-slide>Slide 4</swiper-slide>
		<swiper-slide>Slide 5</swiper-slide>
		<swiper-slide>Slide 6</swiper-slide>
		<swiper-slide>Slide 7</swiper-slide>
		<swiper-slide>Slide 8</swiper-slide>
		<swiper-slide>Slide 9</swiper-slide>
	</swiper>
</template>

<script>
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { defineComponent, ref } from 'vue'
import './style.css'

export default defineComponent({
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		const modules = ref([Pagination])
		return {
			modules,
		}
	},
})
</script>

<style scoped>
/* Add any additional styles here */
</style>
