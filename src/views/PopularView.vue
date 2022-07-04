<template>
   <div>
      <h2 class="text-center">Popular</h2>

      <div class="grid gap-4 items-center">
         <div v-for="product in products" :key="product.id">
            <CardProduct :product="product" />
         </div>
      </div>
   </div>
</template>

<script>
import axios from "axios"
import CardProduct from "../components/CardProduct.vue"


export default {

  name: 'PopularView',
  components : { CardProduct},

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
         .get("http://localhost:3000/popular")
         .then((response) => this.setProducts(response.data))
         .catch((error) => console.log(error));
   },
}
</script>

<style lang="css" scoped>
</style>