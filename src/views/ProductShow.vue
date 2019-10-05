<template>
  <div class="product">
    <div class="left-column">
      <img src="vmSocks-blue-onWhite.jpg" />
    </div>

    <!--Right Column -->
    <div class="Right Column">
      <!-- Product Details -->
      <div class="product-description">
        <span>{{ product.product.title }}</span>
        <h1>{{ product.product.brand }}</h1>
        <p>{{ product.product.description }}</p>
      </div>

      <!-- Product Specs -->
      <div class="product-specs">
        <!-- Product Color -->
        <!-- <div
          class="profuct-color"
          v-for="(varient, index) in varients"
          :key="varient.varientId"
          :style="{ backgroundColor: varient.varientColor }"
          v-on:mouseover="updateProduct(index)"
        >-->
      </div>
      <div class="product-specs">{{ product.product.spec }}</div>

      <!--Pricing and buy -->
      <div class="product-price">
        <span>{{ product.product.price }}</span>

        <button
          v-on:click="addToCart"
          :disabled="product.product.maxcount == 0"
          :class="{ disabledButton: product.product.maxcount == 0 }"
        >
          {{ btn }}
        </button>

        <span v-if="product.product.maxcount < 1">Sold Out</span>
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
    return {
      btn: 'AddToCart'
    }
  },
  created() {
    console.log('PID', this.pid)
    this.$store.dispatch('fetchProduct', this.pid)
  },
  methods: {
    addToCart() {
      console.log('Add to cart')
      console.log('ADD TO CART', this.product.product.pid)
      this.$store.dispatch('addProductToCart', this.product.product.pid)
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
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

.product {
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
}

/* Columns */
.left-column {
  width: 70%;
  position: relative;
}

.right-column {
  width: 30%;
  margin-top: 60px;
}

/* Left Column */
.left-column img {
  width: 75%;
  position: absolute;
  left: -50px;
  top: 0;
  opacity: 100;
  transition: all 0.3s ease;
}

/* Product Description */
.product-description {
  padding-top: 70%;
  border-bottom: 1px solid #e1e8ee;
  margin-bottom: 20px;
}
.product-description span {
  font-size: 35px;
  color: #358ed7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}
.product-description h1 {
  font-weight: 300;
  font-size: 20px;
  color: #43484d;
  letter-spacing: -2px;
}
.product-description p {
  font-size: 22px;
  font-weight: 300;
  color: #86939e;
  line-height: 24px;
}
/* Product Price */
.product-price {
  display: flex;
  align-items: center;
}

.product-price span {
  font-size: 26px;
  font-weight: 300;
  color: #43474d;
  margin-right: 22px;
  padding-top: 25px;
}

.button {
  display: inline-block;
  background-color: #7dc855;
  border-radius: 6px;
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  padding: 12px 30px;
  transition: all 0.5s;
}
.cart-btn:hover {
  background-color: #64af3d;
}

.disabledButton {
  background-color: #d8d8d8;
}

/* Responsive */
@media (max-width: 940px) {
  .container {
    flex-direction: column;
    margin-top: 60px;
  }

  .left-column,
  .right-column {
    width: 100%;
  }

  .left-column img {
    width: 300px;
    right: 0;
    top: -65px;
    left: initial;
  }
}

@media (max-width: 535px) {
  .left-column img {
    width: 220px;
    top: -85px;
  }
}
</style>
