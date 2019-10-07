<template>
  <div>
    <div class="pos-f-t">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h4 class="text-white">About Us</h4>
          <span class="text-white"
            >Haryana E-market is a palce where everyone can get the online
            orignal product produced in Haryana state.
          </span>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <h4 style="color:white">Haryana E-Mart</h4>
        </button>
        <div class="log1">
          <div v-if="isloged == null">
            <h6>
              <a href="/"
                ><span class="glyphicon glyphicon-user"></span> Home</a
              >
              <a href="/register"
                ><span class="glyphicon glyphicon-user"></span> Sign Up</a
              >

              <a href="/login"
                ><span class="glyphicon glyphicon-log-in"></span> Login</a
              >
            </h6>
          </div>
          <div v-if="isloged != null">
            <h6>
              <a href="/"
                ><span class="glyphicon glyphicon-user"></span> Home</a
              >
              <a href="/list"
                ><span class="glyphicon glyphicon-user"></span> All Products</a
              >
              <a href="#"
                ><span class="glyphicon glyphicon-user"></span> Order History</a
              >
              <a href="/cartview"
                ><span class="glyphicon glyphicon-user"></span> Cart</a
              >
              <a href="/profile"
                ><span class="glyphicon glyphicon-user"></span> Profile</a
              >
              <a @click="logout" style="color:white"
                ><span class="glyphicon glyphicon-log-in"></span> Logout</a
              >
            </h6>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data() {
    return {
      isloged: null
    }
  },
  created() {
    this.isloged = localStorage.getItem('token')
  },
  methods: {
    // token() {
    //   return sessionStorage.getItem("token");
    // }
    logout() {
      localStorage.removeItem('token')

      this.$router.push({
        name: '/'
      })
      location.reload()
    }
  }
}
</script>
<style scoped>
.log1 a {
  color: white;
  padding: 20px;
  text-decoration: none;
}

.log1 a:hover {
  background-color: grey;
}
.log {
  padding: 10px;
  display: block;
}
</style>
