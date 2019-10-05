<template>
  <div class="container">
    <div class="row">
      <div v-for="product in product.products" :key="product.pid">
        <pcard :product="product"></pcard>
      </div>
    </div>
  </div>
</template>

<script>
import pcard from '@/components/product-card'
import { mapState } from 'vuex'
export default {
  name: 'list',
  components: {
    pcard
  },
  data() {
    return {
      products: []
    }
  },
  created() {
    this.$store.dispatch('productsList')
  },
  computed: {
    ...mapState(['product'])
  }
}
</script>

<style scoped>
.align {
  display: flex;
}
.align pcard {
  margin-left: 50px;
}
.container {
  margin-left: 10%;
}
.row {
  display: flex;
  justify-content: flex-start;
  float: left;
}
</style>
