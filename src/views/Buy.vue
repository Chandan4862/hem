<template>
  <div class="buynow">
    <div class="left-column">
      <!-- put product image and details here -->
      <div class="product-image">
        <img src="vmSocks-blue-onWhite.jpg" />
      </div>
      <div class="product-info">
        <span>{{ product.product.title }}</span>
        <h1>{{ product.product.brand }}</h1>
        <p>{{ product.product.description }}</p>
        <h2>Price: Rs.{{ product.product.price }}</h2>
      </div>
    </div>
    <!-- Right column -->
    <div class="right-column">
      <div class="Shipping-info">
        <h3>Please verify shipping information</h3>
        <p>{{ profile.User.firstname }} {{ profile.User.lastname }}</p>
        <p>{{ profile.User.address }}</p>
        <button v-on:click="changeAddr">Change Address</button>
        <input
          type="text"
          v-if="change"
          placeholder="Alternate Address"
          v-model="shippingaddr"
        />
        <button v-if="change" v-on:click="sendAddr">Save</button>
        <p>Total:Put product price here</p>
      </div>
      <div class="Payment-info">
        <h3>Please select payment Method</h3>
        <br />
        <input type="radio" v-model="method" value="Credit Card" />Credit Card
        <br />
        <input type="radio" v-model="method" value="Debit Cart" />Debit Card
        <br />
        <input type="radio" v-model="method" value="COD" />Cash On Delivery
        <br />
        <input type="radio" v-model="method" value="UPI" />UPI
        <br />
        <br />
        <p>Payment Method Selected : {{ method }}</p>
        <br />
      </div>
      <button v-on:click="checkOut">CheckOut</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      change: false,
      method: '',
      shippingaddr: '',
      date: '',
      delD: '',
      buyCart: {
        pid: '',
        date: '',
        delD: ''
      },
      bill: {
        name: '',
        pname: '',
        date: '',
        delD: '',
        total: '',
        payment: ''
      }
    }
  },
  methods: {
    changeAddr() {
      console.log('Change Address')
      this.change = true
    },
    sendAddr() {
      console.log('Send Address')
      console.log(this.shippingaddr)
    },
    checkOut() {
      console.log('CheckOut')
      this.buyCart.pid = this.product.product.pid
      this.buyCart.date = new Date()
      this.buyCart.delD = new Date(
        this.date.getFullYear(),
        this.date.getMonth(),
        this.date.getDate() + 3
      )
      this.bill.pname = this.product.product.title
      this.bill.total = this.product.product.price
      this.bill.payment = this.method

      console.log(this.buyCart)
    }
  },
  computed: {
    ...mapState(['product', 'profile'])
  },
  created() {
    this.date = new Date()
    this.delD = new Date(
      this.date.getFullYear(),
      this.date.getMonth(),
      this.date.getDate() + 3
    )
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

.buynow {
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  /* max-width: 1200px; */
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
.product-image img {
  width: 90%;
  height: 70%;
  position: absolute;
  top: 0;
  opacity: 100;
  transition: all 0.3s ease;
}
/*left Column-product-info */
.product-info {
  border-bottom: 1px solid #e1e8ee;
  margin-bottom: 20px;
}
.product-info span {
  font-size: 35px;
  color: #358ed7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}
.product-info h1 {
  font-weight: 300;
  font-size: 20px;
  color: #43484d;
  letter-spacing: -2px;
}
.product-info p {
  font-size: 22px;
  font-weight: 300;
  color: #86939e;
  line-height: 24px;
}
</style>
