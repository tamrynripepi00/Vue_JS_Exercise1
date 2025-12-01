<template>
  <div class="about">
    <!-- {{ $store.state.products }} this is how you use it in the template tag -->
    <!-- <h1>This is an about page {{ products }}</h1> -->
     <h2>{{ wishlist }}</h2>
    
    <!-- <img :src="$store.state.image" alt=""> -->
    <h2>These are my products!</h2>
    <section v-for="product in $store.state.products">
      
      <!-- <h4>{{ product.id }}</h4> -->
      <h3>{{ product.title }}</h3>
      <h3>{{ product.price }}</h3>
      <h3>{{ product.available }}</h3>
      <img :src="product.img" :alt="product.title" class="product-image">

      <button @click="addToWishlist(product)">Add to Wishlist</button>
      
    </section>   
  </div>
</template>

<script>
export default{
  computed:{
    products(){
      return this.$store.state.products
    }
  }

}
</script>

<style scoped>
/* section{
  background-color: darkgrey;
  margin-bottom: 10px;
} */
img{
  width: 600px;
  height: 600px;
  object-fit: cover;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    /* display: flex; */
    align-items: center;
  }
}
</style>
