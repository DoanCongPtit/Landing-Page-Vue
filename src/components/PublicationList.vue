<template>
  <div class="background">
    <div class="container">
      <h5 class="tag">Publications</h5>
      <div class="line"></div>
      <div class="top-el">
        <h2 class="main-title">From Store</h2>
        <button type="button" class="btn">All Products</button>
      </div>
      <div class="row list">
        <div class="col-3 card">
          <div class="main-img">
            <img
              src="https://thepixelcurve.com/html/edubin/images/publication/p-1.jpg"
              alt=""
            />
            <div class="options">
                <div class="icon">
                    <img src="@/assets/shopping-cart.png" alt="">
                </div>
                <div class="icon">
                    <img src="@/assets/heart.png" alt="">
                </div>
            </div>
          </div>

          <a href="#">Stones The Road</a>
          <p>By Scott Trench</p>
          <div class="bottom-el">
            <div class="container-fluid">
              <div class="row">
                <div class="col-4">
                  <span class="price">$250</span>
                  <br />
                  <span class="sale-price">$200</span>
                </div>
                <div class="col-8">
                  <button type="button" class="btn-buy">
                    <img src="@/assets/shopping-cart.png" alt="" /> Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 card">
          <div class="main-img">
            <img
              src="https://thepixelcurve.com/html/edubin/images/publication/p-4.jpg"
              alt=""
            />
            <div class="options">
                <div class="icon">
                    <img src="@/assets/shopping-cart.png" alt="">
                </div>
                <div class="icon">
                    <img src="@/assets/heart.png" alt="">
                </div>
            </div>
          </div>

          <a href="#">The Stranded</a>
          <p>By Scott Trench</p>
          <div class="bottom-el">
            <div class="container-fluid">
              <div class="row">
                <div class="col-4">
                  <span class="price">$250</span>
                  <br />
                  <span class="sale-price">$200</span>
                </div>
                <div class="col-8">
                  <button type="button" class="btn-buy">
                    <img src="@/assets/shopping-cart.png" alt="" /> Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 card">
          <div class="main-img">
            <img
              src="https://thepixelcurve.com/html/edubin/images/publication/p-2.jpg"
              alt=""
            />
            <div class="options">
                <div class="icon">
                    <img src="@/assets/shopping-cart.png" alt="">
                </div>
                <div class="icon">
                    <img src="@/assets/heart.png" alt="">
                </div>
            </div>
          </div>

          <a href="#">The Sicario</a>
          <p>By Scott Trench</p>
          <div class="bottom-el">
            <div class="container-fluid">
              <div class="row">
                <div class="col-4">
                  <span class="price">$250</span>
                  <br />
                  <span class="sale-price">$200</span>
                </div>
                <div class="col-8">
                  <button type="button" class="btn-buy">
                    <img src="@/assets/shopping-cart.png" alt="" /> Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 card">
          <div class="main-img">
            <img
              src="https://thepixelcurve.com/html/edubin/images/publication/p-3.jpg"
              alt=""
            />
            <div class="options">
                <div class="icon">
                    <img src="@/assets/shopping-cart.png" alt="">
                </div>
                <div class="icon">
                    <img src="@/assets/heart.png" alt="">
                </div>
            </div>
          </div>

          <a href="#">There Were None</a>
          <p>By Scott Trench</p>
          <div class="bottom-el">
            <div class="container-fluid">
              <div class="row">
                <div class="col-4">
                  <span class="price">$250</span>
                  <br />
                  <span class="sale-price">$200</span>
                </div>
                <div class="col-8">
                  <button type="button" class="btn-buy">
                    <img src="@/assets/shopping-cart.png" alt="" /> Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.background {
  margin-top: 70px;
  background-color: #edf0f2;
}
.tag {
  padding-top: 115px;
  color: #07294d;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 18px;
}
.line {
  width: 35px;
  height: 2px;
  background-color: yellow;
  bottom: 0;
  left: 0;
}
.top-el {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main-title {
  font-size: 48px;
  color: black;
  padding-top: 10px;
  font-weight: 700;
}
.btn {
  background-color: yellow;
  color: #07294d;
  cursor: pointer;
  font-weight: 500;
  height: 50px;
  padding: 0 35px;
  font-size: 16px;
  font-weight: 700;
  line-height: 50px;
}
.btn:hover {
  background-color: #07294d;
  color: yellow;
}
.row .card {
  margin: 0 auto;
}
.card {
  width: 195px;
  height: 390px;
  background-color: white;
}

.main-img {
  margin-top: 15px;
  position: relative;
}
.main-img img {
  width: 100%;
  height: 100%;
}
.options {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(7, 41, 77, 0.8);
  opacity: 1;
  /* visibility: hidden; */
  display: none !important;
}
.main-img img:hover{
    cursor: pointer;
}
.main-img img:hover +.options {
  /* visibility: visible; */
  display: flex !important;
  opacity: 1;
  pointer-events: none;
}
.options{
    /* text-align: center; */
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.icon{
    height: 40px;
    width: 40px;
    border: 1px solid yellow;
}
.icon img{
    margin: 9px;
    width: 20px;
    height: 20px;
}
.icon:hover{
    background-color: #ffc600 !important;
}
.card a {
  font-size: 18px;
  text-align: center;
  color: #000;
  font-weight: 600;
  -webkit-transition: all 0.4s linear;
  transition: all 0.4s linear;
  margin: 5px 0;
  text-decoration: none;
}
.card a:hover {
  color: yellow;
}
.card p {
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: #505050;
  margin: 0px;
}
.bottom-el {
  margin-top: 20px;
}
.container-fluid {
  padding: unset;
}
.price {
  font-size: 14px;
  color: #505050;
  text-decoration: line-through;
}
.sale-price {
  font-size: 16px;
  font-weight: 600;
  color: #07294d;
}
.col-8 {
  padding-left: unset;
}
.btn-buy {
  padding: 0 5px;
  line-height: 40px;
  height: 50px;
  width: 100%;
  font-size: 15px;
  border: 1px solid #ffc600;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  background-color: #ffc600;
  font-weight: 700;
  line-height: 50px;
  border-radius: 5px;
  color: #07294d;
  cursor: pointer;
}

.btn-buy:hover {
  background-color: #07294d;
  color: yellow;
}
.btn-buy img {
  vertical-align: unset;
}
@media only screen and (max-width: 450px) {
 .top-el{
  display: unset;
 }
 .list{
  margin-top: 20px;
 }
 .card{
  width: 80%;
  height: 100%;
  margin-bottom: 20px !important;
 }
}
</style>