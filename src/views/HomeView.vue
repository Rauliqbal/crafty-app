<template>
   <div class="container pt-3">
      <Navbar/>
     
      <router-link to="/search" class="flex items-center relative text-sub_text mb-6">
         <i class="bx bx-search text-3xl absolute pl-4"></i>
         <input v-model="search" @keyup="searchProduct" class="py-3 pl-14 pr-4 w-full rounded-xl outline-none text-black" type="search" name="search" placeholder="Search Furniture" />
        
      </router-link>
      

      <Carousel />

      <div class="flex justify-between items-center mt-6">
         <h2 class="text-xl font-semibold capitalize">most interested</h2>
         <router-link to="/popular" class="capitalize text-[#F2A666] text-sm" href="">view All</router-link>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-4">
         <div v-for="product in products" :key="product.id">
            <CardProduct :product="product" />
         </div>
      </div>

      <div class="flex justify-between items-center mt-6">
         <h2 class="text-xl font-semibold capitalize">Popular</h2>
         <router-link to="/popular" class="capitalize text-[#F2A666] text-sm" href="">view All</router-link>
      </div>
      <CardPopular class="mt-4" />
   </div>
</template>

<script>
import axios from "axios";

import Navbar from "../components/Navbar.vue";
import Carousel from "../components/Carousel.vue";
import CardProduct from "../components/CardProduct.vue";
import CardPopular from "../components/CardPopular.vue";

export default {
   name: "HomeView",
   components: { Carousel, CardProduct, CardPopular, Navbar },

   data() {
      return {
         products: [],
      };
   },
   methods: {
      setProducts(data) {
         this.products = data;
      },
   },
   mounted() {
      axios
         .get("https://api-crafty-app.herokuapp.com/products")
         .then((response) => this.setProducts(response.data))
         .catch((error) => console.log(error));
   },
};
</script>
