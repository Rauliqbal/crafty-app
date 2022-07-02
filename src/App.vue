<template>
   <div class="max-w-sm container relative min-h-screen bg-[#eaeaea]">
      <nav class="absolute inset-x-0 bottom-0 bg-white">
         <div class="flex items-center justify-around">
            <router-link active-class="active-link" exact-active-class="exact-active-link" class="nav-menu" to="/">
               <i class="icon bx bx-home-smile"></i>
               Home
            </router-link>
            <router-link active-class="active-link" exact-active-class="exact-active-link" class="nav-menu" to="/favorite">
               <i class="icon bx bx-heart"></i>
               Favorite
            </router-link>
            <router-link active-class="active-link" exact-active-class="exact-active-link" class="nav-menu" to="/cart">
               <i class="icon bx bx-cart-alt"></i>
               Cart
            </router-link>
            <router-link active-class="active-link" exact-active-class="exact-active-link" class="nav-menu" to="/user">
               <i class="icon bx bx-user"></i>
               user
            </router-link>
         </div>
      </nav>
      <router-view></router-view>
   </div>
</template>

<style></style>
