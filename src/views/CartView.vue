<template>
   <div class="pt-3 px-4 pb-72">
      <div class="flex justify-between items-center">
         <router-link to="/" class="bg-white text-black rounded-full text-2xl w-12 h-12"><i class="p-3 bx bx-left-arrow-alt"></i></router-link>
         <h2 class="text-xl font-medium">Shopping</h2>
         <router-link to="/" class="bg-white text-black rounded-full text-2xl w-12 h-12"><i class="p-3 bx bx-heart"></i></router-link>
      </div>

      <div class="grid gap-4 mt-6">
         <div class="grid grid-cols-9 bg-white py-3 px-4 rounded-lg gap-4 items-center" v-for="cart in carts" :key="cart.id">
            <div class="col-span-3 w-[94px] h-[94px] flex justify-center items-center bg-[#F0F0F2] rounded-md">
               <img class="h-16" :src="'/assets/images/' + cart.products.img" alt="" />
            </div>
            <div class="col-span-4 flex flex-col">
               <div>
                  <h4 class="product-title">{{ cart.products.title }}</h4>
                  <h5 class="product-store">{{ cart.products.store }}</h5>
                  <h6 class="text-sm">Qty : {{ cart.order_quantity }}</h6>
               </div>

               <h6 class="product-price">Rp. {{ cart.products.price * cart.order_quantity }}</h6>
            </div>
            <h6 @click="deleteCart(cart.id)" class="col-span-2 ml-auto text-red-400 cursor-pointer">
               <i class="bx bx-trash text-2xl bg-[#f9f9f9] p-2 rounded-full"></i>
            </h6>
         </div>
      </div>

      <div v-if="carts.length > 0" class="container p-6 bg-white flex flex-col fixed bottom-0 inset-x-0 max-w-sm mx-auto rounded-t-2xl">
         <h3 class="text-base font-medium mb-2">Order Summary</h3>

         <table class="mb-2">
            <tr>
               <td class="text-sub_text pb-2">Subtotal</td>
               <td class="text-right product-price pb-2">Rp. {{ subTotal }}</td>
            </tr>
            <tr>
               <td class="text-sub_text pb-2">Shipping Cost</td>
               <td class="text-right product-price pb-2">Rp. 10.000</td>
            </tr>
            <tr class="border-t-2">
               <td class="font-semibold pt-3">Total Payment</td>
               <td class="text-right product-price pt-4">Rp. {{ subTotal + 10000 }}</td>
            </tr>
         </table>

         <button class="bg-primary py-3 px-4 text-white rounded-lg mt-4">Check Out</button>
      </div>

      <div v-else>Keranjang masih kosong</div>
   </div>
</template>

<script>
import axios from "axios";

export default {
   name: "CartView",
   components: {},

   data() {
      return {
         carts: [],
      };
   },
   methods: {
      setCarts(data) {
         this.carts = data;
      },
      deleteCart(id) {
         axios
            .delete("https://api-crafty-app.herokuapp.com/carts/" + id)
            .then(() => {
               this.$toast.error("Success Delete ", {
                  // optional options Object
                  type: "error",
                  position: "top",
                  duration: "3000",
                  dismissible: true,
               });

               // Update Data Cart
               axios
                  .get("https://api-crafty-app.herokuapp.com/carts")
                  .then((response) => this.setCarts(response.data))
                  .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
      },
   },
   mounted() {
      axios
         .get("https://api-crafty-app.herokuapp.com/carts")
         .then((response) => this.setCarts(response.data))
         .catch((error) => console.log(error));
   },
   computed: {
      subTotal() {
         return this.carts.reduce(function (items, data) {
            return items + data.products.price * data.order_quantity;
         }, 0);
      },
   },
};
</script>

<style lang="css" scoped></style>
