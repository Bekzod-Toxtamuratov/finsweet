<script setup>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
	<div>
		<Navbar />
		<RouterView></RouterView>
		<!-- <OurProject /> -->
		<!-- <Features /> -->
		<!-- <OurClient /> -->
		<Footer />
	</div>
</template>

<style scoped></style>
