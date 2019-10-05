<template>
  <!--Navbar -->
  <nav class="mb-1 navbar navbar-expand-lg navbar-dark default-color bg-info">
    <a class="navbar-brand" href="#">Haryana E-Mart</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent-333"
      aria-controls="navbarSupportedContent-333"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
      <ul class="navbar-nav mr-auto">
        <!-- <li class="nav-item active">
        <a class="nav-link" href="#">Home
          <span class="sr-only">(current)</span>
        </a>
        </li>-->
        <!-- <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
        </li>-->
        <!-- <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
        </li>-->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="navbarDropdownMenuLink-333"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >Order-Info</a
          >
          <div
            class="dropdown-menu dropdown-default"
            aria-labelledby="navbarDropdownMenuLink-333"
          >
            <a class="dropdown-item" href="#">Order Details</a>
          </div>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto nav-flex-icons">
        <li class="nav-item">
          <a class="nav-link waves-effect waves-light">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link waves-effect waves-light">
            <i class="fab fa-google-plus-g"></i>
          </a>
        </li>
        <b-nav-item-dropdown right>
          <ul class="navbar-nav ml-auto nav-flex-icons">
            <li class="nav-item">
              <a class="nav-link waves-effect waves-light">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
          </ul>

          <template v-slot:button-content>
            <BaseIcon name="user"></BaseIcon>
            <em></em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </ul>
    </div>
  </nav>
  <!--/.Navbar -->
</template>
<script>
export default {
  name: 'navBar'
}
</script>
