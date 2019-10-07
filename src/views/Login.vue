<template>
  <div class="container">
    <center>
      <h2>Login Form</h2>
    </center>

    <form @submit.prevent="submit" class="formlogin">
      <div class="imgcontainer">
        <img src="/login.jpg" alt="Avatar" class="avatar" />
      </div>

      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input
          type="text"
          placeholder="Enter Username"
          v-model="login.username"
          required
        />

        <label for="psw"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          v-model="login.password"
          required
        />

        <button class="logbutton" type="submit">Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember
          me
        </label>
      </div>

      <div class="container" style="background-color:#F5F5F5">
        <button type="button" @click="cancel" class="cancelbtn logbutton">
          Cancel
        </button>
        <span class="psw"
          >Not registered.Click here to register
          <a href="/register">Register</a></span
        >
      </div>
    </form>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'Login',
  data() {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  validations: {
    login: {
      username: {
        required
      },
      password: {
        required,
        minLength: minLength(4)
      }
    }
  },
  created() {
    //localStorage.clear()
  },
  // beforeRouteEnter(to, from, next) {
  //   if (localStorage.getItem('token') != null) {
  //     next('/eventlist')
  //   }
  //   next()
  // },
  methods: {
    submit() {
      this.$v.$touch()

      // if (!this.$v.$invalid) {
      this.$store
        .dispatch('LoginUser', this.login)
        .then(() => {})
        .catch(err => console.log(err))
    },
    cancel() {
      this.$router.push({
        name: 'homepage'
      })
    }
  }
}
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
.formlogin {
  border: 3px solid #f1f1f1;
  width: 60%;
  margin-left: 250px;
  background-color: white;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.logbutton {
  background-color: #3399ff;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
