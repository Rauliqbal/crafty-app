<template>
   <div class="pt-3 product-detail px-4">
      <div class="flex justify-between">
         <router-link
            to="/"
            class="bg-white text-black rounded-full text-2xl w-12 h-12"
            ><i class="p-3 bx bx-left-arrow-alt"></i
         ></router-link>
         <router-link
            to="/"
            class="bg-white text-black rounded-full text-2xl w-12 h-12"
            ><i class="p-3 bx bx-heart"></i
         ></router-link>
      </div>
      <div class="mt-4">
         <img
            class="h-[205px] mx-auto"
            :src="'/assets/images/' + product.img"
         />

         <div class="grid grid-cols-5 items-center mt-8">
            <h2 class="product-title col-span-3">{{ product.title }}</h2>
            <h6 class="product-price col-span-2">Rp. {{ product.price }}</h6>
         </div>

         <div class="mt-4">
            <h3 class="text-xl font-medium">Description</h3>
            <h4 class="product-desc mt-2">{{ product.desc }}</h4>
         </div>
      </div>

      <div
         class="container p-6 bg-white flex flex-col fixed bottom-0 inset-x-0 max-w-sm mx-auto rounded-t-2xl"
      >
         <form v-on:submit.prevent>
            <input type="number" v-model="order.order_quantity" min="0" step="1"/>
         </form>
         <button
            @click="checkout"
            class="bg-primary py-3 px-4 text-white rounded-lg"
         >
            Add To Card
         </button>
      </div>
   </div>
</template>

<script>
import axios from "axios";

export default {
   name: "ProductDetail",

   data() {
      return {
         product: {},
         order: {},
      };
   },

   methods: {
      setProduct(data) {
         this.product = data;
      },
      checkout() {
         if (this.order.order_quantity) {
            this.order.products = this.product;
            axios
               .post("https://api-crafty-app.herokuapp.com/carts", this.order)
               .then(() => {
                  this.$router.push({path: "/cart"})
                  this.$toast.success("Success Order.", {
                     // optional options Object
                     type: "success",
                     position: "top",
                     duration: "3000",
                     dismissible: true,
                  });
               })
               .catch((err) => console.log(error));
         }else {
            this.$toast.warning("Please enter order quantity", {
                     // optional options Object
                     type: "warning",
                     position: "top",
                     duration: "3000",
                     dismissible: true,
                  });
         }
      },
   },

   mounted() {
      axios
         .get(
            "https://api-crafty-app.herokuapp.com/products/" +
               this.$route.params.id
         )
         .then((response) => this.setProduct(response.data))
         .catch((error) => console.log(error));
   },
};
</script>

<style></style>