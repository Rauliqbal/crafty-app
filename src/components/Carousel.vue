<template>
	<h2 class="mb-4 text-lg capitalize font-semibold">Special offers</h2>
	<swiper :spaceBetween="30" :pagination="true" :modules="modules" class="mySwiper">
		<swiper-slide class="rounded-2xl overflow-hidden">
			<img class="relative" src="../assets/images/carousel_1.svg">
			<div class="absolute inset-0 w-full h-full bg-[#101817]/30 p-5">
				<div>
					<h3 class="text-2xl font-semibold text-white">25% Discount</h3>
					<p class="text-base text-white font-light">For a cozy yellow set !</p>
				</div>
				<button class="bg-primary text-sm text-white font-light rounded-full py-2 px-4 mt-8">Learn More</button>
			</div>
		</swiper-slide>

		<swiper-slide class="rounded-2xl overflow-hidden">
			<img class="relative" src="../assets/images/carousel_2.svg">
			<div class="absolute inset-0 w-full h-full bg-[#101817]/30 p-5">
				<div>
					<h3 class="text-2xl font-semibold text-white">35% Discount</h3>
					<p class="text-base text-white font-light">For a cozy yellow set !</p>
				</div>
				<button class="bg-primary text-sm text-white font-light rounded-full py-2 px-4 mt-8">Shop Now</button>
			</div>
		</swiper-slide>
	</swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default {
	name: "Carousel",

	components: {
		Swiper,SwiperSlide,
	},

	setup() {
		return {
			modules: [Pagination],
		};
	},
};
</script>

<style lang="css" scoped>
	.swiper-pagination-bullet-active {
		background: #0c8a7b !important;
	}
</style>