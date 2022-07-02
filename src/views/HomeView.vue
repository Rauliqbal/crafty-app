<template>
   <div class="container pt-3">
      <form class="flex items-center relative text-sub_text mb-6">
         <i class='bx bx-search text-3xl absolute pl-4'></i>
         <input class="py-3 pl-14 pr-4 w-full rounded-xl outline-none text-black" type="search" name="search" placeholder="Search Furniture">
      </form>

      <Carousel/>
      <CardProduct/>

   </div>
</template>

<script>
import {defineComponent, ref} from "vue";

import Carousel from "../components/Carousel.vue"
import CardProduct from "../components/CardProduct.vue"

export default defineComponent ({
   name: "HomeView",
   components: {Carousel,CardProduct},
});
</script>
