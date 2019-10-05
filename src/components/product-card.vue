<template>
  <div class="card" style="width: 15rem;" @click="productDetail">
    <div>Image</div>
    <div class="card-body">
      <h5 class="card-title">{{ productName }}</h5>
      <p class="card-text">{{ productDesc }}</p>
      <h5 class="card-title">{{ price }}</h5>
      <a href="#" class="btn btn-primary">Order</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pcard',
  props: {
    product: {
      type: Object
    }
  },
  data() {
    return {}
  },
  methods: {
    productDetail() {
      this.$router.push({
        path: '/productdetail',
        params: { pid: this.product.pid }
      })
    }
  },
  computed: {
    productName() {
      return this.product.title
    },
    productDesc() {
      return this.product.description
    },
    price() {
      return this.product.price
    }
  }
}
</script>

<style>
.card {
  text-decoration: none;
  margin-left: 10px;
  margin-top: 10px;
}
.card-body {
  text-decoration: none;
  color: black;
}
.event-link {
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-weight: 100;
}
</style>
