<template>
  <div>
    <div class="container-fluid pt-3">
      <div class="row">
        <div class="col-sm-3 col-md-3 col-lg-3"></div>
        <div class="col-sm-6 col-md-6 col-lg-6">
          <div id="loginApp">
            <div class="card rounded-25">
              <div class="card-body p-5">
                <form @submit.prevent="submit">
                  <div class="form-group">
                    <label for="username">Username :</label>
                    <input
                      id="username"
                      class="form-control inline-p30 line-h-23 rounded-25"
                      type="text"
                      v-model="$v.login.username.$model"
                      :class="{
                        'is-invalid': $v.login.username.$error,
                        'is-valid': !$v.login.username.$invalid
                      }"
                      placeholder="Please Enter your username"
                    />
                    <div class="valid-feedback pl-3">
                      Your username is valid!
                    </div>
                    <div class="invalid-feedback pl-3">
                      <span v-if="!$v.login.username.required"
                        >Username is required</span
                      >
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="password">Password :</label>
                    <input
                      id="password"
                      class="form-control inline-p30 line-h-23 rounded-25"
                      type="password"
                      placeholder="Please Enter Password"
                      v-model="$v.login.password.$model"
                      :class="{
                        'is-invalid': $v.login.password.$error,
                        'is-valid': !$v.login.password.$invalid
                      }"
                    />
                    <div class="valid-feedback pl-3">
                      Your Password is valid!
                    </div>
                    <div class="invalid-feedback pl-3">
                      <span v-if="!$v.login.password.required"
                        >Password is required</span
                      >
                      <span v-if="!$v.login.password.minLength">
                        {{ $v.login.password.$params.minLength.min }} characters
                        minimum
                      </span>
                    </div>
                  </div>

                  <br />
                  <button
                    type="submit"
                    id="login"
                    name="login"
                    class="btn form-control btn-primary text-uppercase line-h-23 rounded-25 mb-3"
                  >
                    Login
                  </button>
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  methods: {},
  submit() {
    this.$v.$touch()

    if (!this.$v.$invalid) {
      this.$store
        .dispatch('LoginUser', this.login)
        .then(() => {
          console.log(this.login)
          // this.$router.push({ name: 'eventlist' })
          location.reload()
        })
        .catch(() => {
          console.log('ERROR in LOGIN VUE')
        })
    }
  }
}
</script>

<style></style>
