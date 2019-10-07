<template>
  <div class="container">
    <h1>Product Details</h1>

    <div class="row">
      <div class="col-sm-4">
        <img src="image" height="350px" width="350px;" />
      </div>
      <div class="col-sm-8" style="background-color:white">
        <h3>{{ product.product.title }}</h3>
        <h6>{{ product.product.brand }}</h6>
        <h5>Description:</h5>
        <p>{{ product.product.description }}</p>

        <h5>Rs.{{ product.product.price }}</h5>

        <button
          class="sigupbutton"
          v-on:click="addToCart"
          :disabled="product.product.maxcount == 0"
          :class="{
            disabledButton: product.product.maxcount == 0
          }"
        >
          Add to Cart
        </button>
        <button
          style="margin-left:10px;"
          class="sigupbutton"
          :disabled="product.product.maxcount == 0"
          :class="{
            disabledButton: product.product.maxcount == 0
          }"
        >
          Buy Now
        </button>
      </div>
    </div>
    <div
      class="row"
      style="margin-top:50px;background-color:white;width:30%;padding:20px;"
    >
      <div class="col">
        <h5>Product Specifications:</h5>
        {{ product.product.spec }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'productDetail',
  props: {
    pid: {
      type: String
    }
  },
  data() {
    return {}
  },
  created() {
    console.log('PID', this.pid)
    this.$store.dispatch('fetchProduct', this.pid)
  },
  methods: {
    addToCart() {
      console.log('Add to cart')
      console.log('ADD TO CART', this.product.product)
      this.$store.dispatch('addProductToCart', this.product.product)
    }
  },
  computed: {
    status() {
      if (product.product.maxcount < 1) {
        this.btn = 'Sold Out'
      }
    },

    ...mapState(['product', 'cart'])
  }
}
</script>

<style scoped>
/* Basic Styling */
.sigupbutton {
  background-color: #3399ff;
  color: white;
  padding: 7px;
  border: none;
  cursor: pointer;
  width: 15%;
  opacity: 0.9;
  margin-top: 50px;
}
</style>
