<template>
   <div class="container pt-3">
      <div class="flex justify-between items-center">
         <router-link to="/" class="bg-white text-black rounded-full text-2xl w-12 h-12"><i class="p-3 bx bx-left-arrow-alt"></i></router-link>
         <h2 class="text-xl font-medium">Popular</h2>
         <router-link to="/" class="bg-white text-black rounded-full text-2xl w-12 h-12"><i class="p-3 bx bx-heart"></i></router-link>
      </div>

      <form class="flex items-center relative text-sub_text my-6">
         <i class="bx bx-search text-3xl absolute pl-4"></i>
         <input v-model="search" @keyup="searchProduct" class="py-3 pl-14 pr-4 w-full rounded-xl outline-none text-black" type="search" name="search" placeholder="Search Furniture" />
      </form>

      <div class="grid grid-cols-2 gap-4 mt-4">
         <div v-for="product in products" :key="product.id">
            <CardProduct :product="product" />
         </div>
      </div>
   </div>
</template>

<script>
import axios from "axios";
import CardProduct from "../components/CardProduct.vue";

export default {
   name: "SearchView",
   components: { CardProduct },

   data() {
      return {
         products: [],
         search: "",
      };
   },
   methods: {
      setProducts(data) {
         this.products = data;
      },

      searchProduct() {
         axios
            .get("https://api-crafty-app.herokuapp.com/populars?q=" + this.search)
            .then((response) => this.setProducts(response.data))
            .catch((error) => console.log(error));
      },
   },
   mounted() {
      axios
         .get("https://api-crafty-app.herokuapp.com/populars")
         .then((response) => this.setProducts(response.data))
         .catch((error) => console.log(error));
   },
};
</script>

<style lang="css" scoped></style>
