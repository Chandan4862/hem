<template>
  <div>
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
      data-interval="5000"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="slide1.jpg"
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="slide2.jpg"
            alt="Second slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="slide3.jpg"
            height="700px"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span
          class="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span
          class="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="container">
      <div class="detailss row">
        <div
          class="card"
          style="width: 20rem;"
        >
          <img
            src="card1.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Shopping Made Easy</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="/register"
              class="btn btn-primary"
            >Register</a>
          </div>
        </div>

        <div
          class="card"
          style="width: 20rem;"
        >
          <img
            src="card2.jpg"
            class="card-img-top"
            height="235px;"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Add To Cart</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div
          class="card"
          style="width: 20rem;"
        >
          <img
            src="card3.jpg"
            class="card-img-top"
            height="235px;"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Market At Home</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="/login"
              class="btn btn-primary"
            >Login</a>
          </div>
        </div>
      </div>
    </div>

    <div class="mainfoot">
      <div class="foot container">
        <center><a href="#">@Copyrights HaryanaState.gov.in</a></center>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  }
}
</script>

<style scoped>
.carousel-inner {
  height: 700px;
}
.carousel {
  margin-top: 1px;
}
.detailss {
  justify-content: space-around;
  margin-top: 20px;
}
.foot {
  background-color: #282828;
  color: white;
  padding: 20px;
  margin-top: 50px;
}
.foot a {
  color: white;
  text-decoration: none;
}
.mainfoot {
  background-color: #282828;
  color: white;
}
</style>
