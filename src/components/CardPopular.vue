<template>
	<div class="grid gap-4">
		<div class="flex bg-white py-3 px-4 rounded-lg gap-4 items-center" v-for="popular in populars" :key="popular.id">
			<div class="w-[72px] h-[72px] flex justify-center items-center bg-[#F0F0F2] rounded-md">
				<img class="h-12" :src="'/assets/images/' + popular.img" alt="">
			</div>
			<div class="flex justify-between flex-col ">
				<div>
					<h4 class="product-title">{{popular.title}}</h4>
					<h5 class="product-store">{{popular.store}}</h5>
				</div>
				<h6 class="product-price">Rp. {{popular.price}}</h6>
			</div>
			<router-link :to="'/popular/' + popular.id" class="bg-primary p-2 w-10 h-10 text-white text-2xl inline-flex rounded-full ml-auto">
            	<i class="bx bx-shopping-bag"></i>
         </router-link>
		</div>
	</div>
</template>

<script>
import axios from "axios"

export default {

  name: 'CardPopular',

  data() {
      return {
         populars: [],
      };
   },
   methods: {
      setPopulars(data) {
         this.populars = data;
      },
   },
   mounted() {
      axios
         .get("https://api-crafty-app.herokuapp.com/populars")
         .then((response) => this.setPopulars(response.data))
         .catch((error) => console.log(error));
   },
}
</script>

<style lang="css" scoped>
</style>