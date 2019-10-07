<template>
  <div class="container">
    <div v-for="cart in product.cart" class="row" style="margin-top:10px;">
      <div
        class="col-sm-3"
        style="background-color:blue;height:200px;margin-top:20px;"
      >
        <img src="/login" alt="no image" height="100px" width="100px" />
      </div>
      <div class="col-sm-8" style="margin-top:20px;">
        <div class="event-card -shadow">
          <h3 class="eyebrow">{{ cart.title }}</h3>
          <p class="title">{{ cart.brand }}</p>
          <span>
            <span>{{ cart.description }}</span>
          </span>
          <h4>Rs.{{ cart.price }}</h4>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: '',
  data() {
    return {
      product1: []
    }
  },
  created() {
    this.$store.dispatch('cartview')
  },
  computed: {
    ...mapState(['product'])
  }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
