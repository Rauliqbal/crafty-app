<template>
   <div class="flex items-center">
      <!-- Card product -->
      <div class="flex flex-col">
         <div v-for="product in products" v-bind:key="product.id">
            <img v-bind:src="product.img" />
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "CardProduct",

   data() {
      return {
         products: [
            {
               id: 1,
               img: "../assets/images/product_1.png",
               title: "Ox Mathis Chair",
               price: 200.0,
            },
            {
               id: 2,
               img: "../assets/images/product_2.png",
               title: "Fuji arm Chair",
               price: 500.0,
            },
         ],
      };
   },
};
</script>

<style lang="css" scoped></style>
