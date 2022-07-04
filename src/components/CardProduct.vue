<template>
   <div class="flex flex-col bg-white rounded-lg p-4">
      <img class="h-[90px] mx-auto mb-5" :src="'/assets/images/' + product.img" alt="" />
      <h4 class="product-title">{{ product.title }}</h4>
      <h5 class="product-store">{{product.store}}</h5>
      <div class="grid grid-cols-4 items-center mt-1">
         <div class="col-span-3">
            <h6 class="product-price">Rp. {{ product.price }}</h6>
         </div>
         <a href="/" class="bg-primary p-2 w-8 h-8 text-white text-base inline-flex rounded-full">
            <i class="bx bx-shopping-bag"></i>
         </a>
      </div>
   </div>
</template>

<script>
export default {
   name: "CardProduct",

   props: ["product"],
};
</script>

<style lang="css" scoped></style>
