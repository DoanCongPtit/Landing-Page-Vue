<template>
  <!-- LOGO -->
  <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
    <div class="container-fluid">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <div class="action mobile">
        <div class="search-button">
          <img src="@/assets/search.png" alt="" />
        </div>
        <div class="cart-button">
          <img src="@/assets/cart.png" alt="" />
          <span class="icon-button__badge">2</span>
        </div>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'Index' }"
              ><a class="nav-link active" aria-current="page" href="#">HOME</a
              ></router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">PAGES</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              COURSES
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">ABOUT US</a></li>
              <li><a class="dropdown-item" href="#">GALLERY</a></li>
              <li><a class="dropdown-item" href="#">POLICY</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              EVENTS
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">EVENT LIST 1</a></li>
              <li><a class="dropdown-item" href="#">EVENT LIST 2</a></li>
              <li><a class="dropdown-item" href="#">EVENT LIST 3</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              TEACHERS
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">TEACHERS 1</a></li>
              <li><a class="dropdown-item" href="#">TEACHERS 2</a></li>
              <li><a class="dropdown-item" href="#">TEACHERS 3</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">BLOG</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SHOP</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="action desktop">
      <div class="search-button">
        <button
          type="button"
          class="btn"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          <img src="@/assets/search.png" alt="" />
        </button>
      </div>
      <div class="cart-button">
        <img src="@/assets/cart.png" alt="" />
        <span class="icon-button__badge">2</span>
      </div>
    </div>
  </nav>

  <!-- The Modal -->
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title"></h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <input type="text" placeholder="Search.." name="search" />
          <span class="search-icon">
            <img src="@/assets/search.png" alt="" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  height: 80px;
  justify-content: center;
}
.logo img {
  width: 180px;
  height: 50px;
}
.dropdown:hover .dropdown-menu {
  display: block;
}
.navbar-collapse {
  margin-left: 270px;
}
.nav-item a {
  text-decoration: none;
}
.nav-item li a {
  font-weight: 600;
  color: white;
  background-color: #07294d;
}
.nav-link {
  font-weight: 600;
  color: #07294d !important;
}

.nav-item a:hover {
  color: yellow !important;
}
.dropdown-menu {
  background-color: #07294d !important;
}
.dropdown-item:hover {
  background-color: #07294d !important;
}

.action.mobile {
  display: none;
}

.action {
  margin-right: 100px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.btn {
  background-color: white;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}

.cart-button {
  position: relative;
  width: 50px;
  height: 50px;
  color: #333333;
  background: transparent;
  border: none;
  outline: none;
  border-radius: 50%;
}

.cart-button:hover {
  cursor: pointer;
}

.cart-button:active {
  background: #cccccc;
}

.icon-button__badge {
  position: absolute;
  top: 2px;
  right: 10px;
  width: 20px;
  height: 20px;
  background: red;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.modal-content {
  background-color: transparent !important;
  border: none !important;
}
.modal-header {
  border-bottom: none !important;
}
.search-icon {
  right: 120px;
  top: 25px;
  position: absolute;
}
.modal-body input[type="text"] {
  padding: 10px;
  font-size: 17px;
  border-radius: 15px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
}

@media only screen and (max-width: 900px) {
  .action.mobile {
    display: flex;
  }
  .desktop {
    display: none;
  }
  .action {
    margin-right: unset;
  }
  .logo img {
    width: 100px;
    height: 35px;
  }
  .navbar-collapse {
    margin-left: 200px;
  }
}
</style>