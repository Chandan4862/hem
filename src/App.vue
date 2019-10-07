<template>
  <div id="app">
    <navBar></navBar>
    <router-view :key="$route.fullPath" />
  </div>
</template>
<script>
import navBar from '@/views/NavBar'
export default {
  components: {
    navBar
  },
  data() {
    return {
      logged: null
    }
  },
  created() {
    //this.logged = localStorage.getItem('token')
  },
  computed: {
    // isLogged() {
    //   if (this.logged == null) {
    //     return false
    //   } else {
    //     return true
    //   }
    // }
  }
}
</script>
<style scoped>
#app {
  background-color: #f8f8f8;
  height: 100%;
}
</style>
