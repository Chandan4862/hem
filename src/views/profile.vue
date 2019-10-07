<template>
  <div class="container">
    <div class="card">
      <div class="imgcontainer">
        <img src="/profile.jpg" alt="Avatar" class="avatar" />
      </div>
      <div class="row">
        <div class="col" style="margin-left:30px;margin-top:30px;">
          <h3>First Name:{{ profile.User.firstname }}</h3>
          <hr />
          <h3>Last Name:{{ profile.User.lastname }}</h3>
          <hr />
          <h3>Email Id:{{ profile.User.email }}</h3>
          <hr />
          <h3>Address:{{ profile.User.address }}</h3>
          <hr />
          <h3>Mobile:{{ profile.User.mobile }}</h3>
        </div>
      </div>
      <p><button class="clbutton">Edit Profile</button></p>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  created() {
    this.$store.dispatch('ProfileLog')
  },
  methods: {},
  computed: mapState(['profile'])
}
</script>
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: auto;
  text-align: left;
  font-family: arial;
}
.clbutton {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

button:hover,
a:hover {
  opacity: 0.7;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}
</style>
