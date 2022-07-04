<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="5000">
        <img
          src="@/assets/PresentSlide2.jpeg"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h1>Choose the right theme for education</h1>
          <p>
            Donec vitae sapien ut libearo venenatis faucibus. Nullam quis ante.
            Etiam sit amet orci eget eros faucibus tincidunt Sed fringilla mauri
            amet nibh.
          </p>
          <div class="btn-action">
            <button type="button" class="btn btn-warning">Read More</button>
            <button type="button" class="btn btn-warning">Get Started</button>
          </div>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="5000">
        <img
          src="@/assets/PresentSlide3.jpeg"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h1>Choose the right theme for education</h1>
          <p>
            Donec vitae sapien ut libearo venenatis faucibus. Nullam quis ante.
            Etiam sit amet orci eget eros faucibus tincidunt Sed fringilla mauri
            amet nibh.
          </p>
          <div class="btn-action">
            <button type="button" class="btn btn-warning">Read More</button>
            <button type="button" class="btn btn-warning">Get Started</button>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.carousel-caption {
  margin-block: 200px;
}

h1 {
  text-align: left;
  width: 500px;
  font-size: 60px;
  font-weight: 700;
  animation: left_to_right 1s ease;
}

p {
  text-align: left;
  width: 500px;
  font-size: 18px;
  font-weight: 600;
  animation: bottom_to_top 3s ease;
}

.btn-action {
  animation: bottom_to_top 3s ease;
}


@keyframes left_to_right {
  from {
    margin-left: -30%;
  }
  to {
    margin-left: 0;
  }
}

@keyframes bottom_to_top {
  from {
    margin-bottom: -10%;
  }
  to {
    margin-bottom: 0;
  }
}

.btn-action {
  text-align: left;
}

.btn-action .btn{
  width: 160px;
  height: 50px;
  margin: 10px;
  color: #07294d;
  border-radius: 10px;
  font-weight: 700;
}
.btn:hover{
  color: yellow;
  background-color: #07294d;
}
</style>