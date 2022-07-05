<template>
	<div class="container pt-3">
		<form class="flex items-center relative text-sub_text mb-6">
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
import axios from 'axios'
import CardProduct from "../components/CardProduct.vue"

export default {

  name: 'SearchView',
  components: {CardProduct},

  data() {
      return {
         products: [],
         search: '',
      };
   },
   methods: {
      setProducts(data) {
         this.products = data;
      },

      searchProduct() {
         axios
            .get("https://api-crafty-app.herokuapp.com/products?q=" + this.search)
            .then((response) => this.setProducts(response.data))
            .catch((error) => console.log(error));
      }
   },
   mounted() {
      axios
         .get("https://api-crafty-app.herokuapp.com/products")
         .then((response) => this.setProducts(response.data))
         .catch((error) => console.log(error));
   },
}
</script>

<style lang="css" scoped>
</style>