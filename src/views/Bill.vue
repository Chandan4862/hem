<template>
  <div class="Bill">{{ this.bill }}</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['payment'],
  data() {
    return {
      bill: {
        fname: '',
        lname: '',
        pname: '',
        date: '',
        delD: '',
        total: '',
        payment: ''
      }
    }
  },
  created() {
    // this.bill.name = this.profile.User.firstname
    this.bill.pname = this.product.product.title
    this.bill.date = new Date()
    this.bill.delD = new Date(
      this.bill.date.getFullYear(),
      this.bill.date.getMonth(),
      this.bill.date.getDate() + 3
    )
    this.bill.total = this.product.product.price
    this.bill.payment = this.payment
  },
  computed: mapState(['product', 'profile'])
}
</script>

<style></style>
