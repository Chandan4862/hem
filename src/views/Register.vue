<template>
  <div>
    <div class="container">
      <form
        @submit="submit"
        style="border:1px solid #ccc;width:80%;"
        class="regform"
      >
        <div class="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label for="firstname"><b>First Name:</b></label>
          <input
            type="text"
            placeholder="Enter First Name"
            v-model="User.firstname"
            required
          />

          <label for="lastname"><b>Last Name:</b></label>
          <input
            type="text"
            placeholder="Enter Last Name"
            v-model="User.lastname"
            required
          />
          <label for="email"><b>Email</b></label>
          <input
            type="text"
            placeholder="Enter Email"
            v-model="User.email"
            required
          />
          <label for="username"><b>UserName:</b></label>
          <input
            type="text"
            placeholder="Enter UserName"
            v-model="User.username"
            required
          />
          <label for="password"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            v-model="User.password"
            required
          />
          <label for="address"><b>Address:</b></label>
          <input
            type="text"
            placeholder="Enter Address"
            v-model="User.address"
            required
          />
          <label for="mobile"><b>Mobile Number:</b></label>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            v-model="User.mobile"
            required
          />
          <label for="mobile"><b>Role:</b></label>
          <select v-model="User.usertype" required>
            <option value="">----select----</option>
            <option value="vendor">Vendor</option>
            <option value="customer">Customer</option>
          </select>
          <label>
            <input
              type="checkbox"
              checked="checked"
              name="remember"
              style="margin-bottom:15px"
            />
            Remember me
          </label>

          <p>
            By creating an account you agree to our
            <a href="#" style="color:dodgerblue">Terms & Privacy</a>.
          </p>

          <div class="clearfix">
            <button type="submit" class="signupbtn sigupbutton">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      User: {}
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('RegisterUser', this.User).then(() => {
        alert('registerd Sussessfully')
        this.$router.push({
          name: 'login'
        })
      })
    }
  }
}
</script>

<style scoped>
/* Full-width input fields */
input[type='text'],
input[type='password'],
select {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type='text']:focus,
input[type='password']:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
.sigupbutton {
  background-color: #3399ff;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity: 1;
}
.regform {
  margin-left: 200px;
  background: white;
}
/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn,
.signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 30px;
}

/* Clear floats */
.clearfix::after {
  content: '';
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn,
  .signupbtn {
    width: 100%;
  }
}
</style>
