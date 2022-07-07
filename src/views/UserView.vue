<template>
   <div class="container pt-3 pb-0">
      <div class="grid grid-cols-3 items-center">
         <router-link to="/" class="bg-white text-black rounded-full text-2xl w-12 h-12"><i class="p-3 bx bx-left-arrow-alt"></i></router-link>
         <h2 class="text-xl font-medium text-center">Profile</h2>
      </div>
      <div class="mt-6 flex flex-col gap-4 items-center">
         <img class="rounded-full w-24" src="../image/user_image.png" alt="Photo Profile User" />
         <div class="text-center">
            <h3 class="font-medium text-lg">Muhamad Raul Iqbal</h3>
            <span class="text-sub_text text-sm">muhamadrauliqbal.13@gmail.com</span>
         </div>
      </div>

      <div class="flex flex-col gap-4 mt-6 px-4">
         <!-- Card -->
         <div class="flex bg-white items-center p-3 rounded-xl gap-4 hover:shadow-lg transition-all duration-300">
            <span class="text-2xl col-span-1 text-sub_text">
               <i class="bx bx-user-circle"></i>
            </span>
            <span class="col-span-auto text-base font-medium">Profile</span>
         </div>

         <div class="flex bg-white items-center p-3 rounded-xl gap-4 hover:shadow-lg transition-all duration-300">
            <span class="text-2xl col-span-1 text-sub_text">
               <i class="bx bx-wallet"></i>
            </span>
            <span class="col-span-auto text-base font-medium">Payment Methods</span>
         </div>

         <div class="flex bg-white items-center p-3 rounded-xl gap-4 hover:shadow-lg transition-all duration-300">
            <span class="text-2xl col-span-1 text-sub_text">
               <i class="bx bx-receipt"></i>
            </span>
            <span class="col-span-auto text-base font-medium">Order History</span>
         </div>

         <div class="flex bg-white items-center p-3 rounded-xl gap-4 hover:shadow-lg transition-all duration-300">
            <span class="text-2xl col-span-1 text-sub_text">
               <i class="bx bx-receipt"></i>
            </span>
            <span class="col-span-auto text-base font-medium">Delivery Address</span>
         </div>

         <div class="flex bg-white items-center p-3 rounded-xl gap-4 hover:shadow-lg transition-all duration-300">
            <span class="text-2xl col-span-1 text-sub_text">
               <i class="bx bx-directions"></i>
            </span>
            <span class="col-span-auto text-base font-medium">Support Center</span>
         </div>

         <div class="flex bg-white items-center p-3 rounded-xl gap-4 hover:shadow-lg transition-all duration-300">
            <span class="text-2xl col-span-1 text-sub_text">
               <i class="bx bx-check-shield"></i>
            </span>
            <span class="col-span-auto text-base font-medium">Legal Policy</span>
         </div>
      </div>

      <div class="text-center mt-8"><button class="text-red-600 bg-white rounded-lg px-3 py-2 text-sm font-medium hover:bg-red-300 transition-all duration-300">Log Out</button></div>
   </div>
</template>

<script>
export default {
   name: "UserView",

   data() {
      return {};
   },
};
</script>

<style lang="css" scoped></style>
