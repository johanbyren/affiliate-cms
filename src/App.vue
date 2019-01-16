<template>
  <!-- 1. This is an exemple for loading in stuff to page. Look at comment 2 as well
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>-->
  <div id="app" class="container">
    <main>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
        <img alt="Vue logo" src="./assets/logo.png" width="50px"/>
        <!-- Mobile menu button -->
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          v-b-toggle="'navbarText'"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarText">
          <!-- Here is the text and links to pages -->
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <!-- <route-link to="/" class="nav-link">Home</route-link> -->
              <a class="nav-link" href="#">Link 1</a>
            </li>
            <li class="nav-item">
              <!-- <route-link to="/" class="nav-link">All Products</route-link> -->
              <a class="nav-link" href="#">Link 2</a>
            </li>
            <li class="nav-item">
              <!-- <route-link to="/" class="nav-link">About</route-link> -->
              <a class="nav-link" href="#">Link 3</a>
            </li>
          </ul>

          <!-- Here is the dropdown menu -->
          <!-- <ul>
            <li></li>
          </ul>-->
        </div>
      </nav>
    </main>

    <!-- <div style="height:500px; width: 100%; background-color:grey">remove later</div> -->
    <!-- Just fillout, remove later -->
    <footer class="container-fluid footer text-left mt-3">
      <p class="mr-auto">
        Developed by:
        <strong>Johan Byrén</strong>
      </p>
      <div style="float:right">
        <a href="no-mail-inserted" style="margin-right:10px">
          <i class="fa fa-envelope-open" aria-hidden="true" style="font-size:20px"></i>
        </a>
        <a href="https://github.com/johanbyren" target="_blank" style="margin-right:10px">
          <i class="fab fa-github" aria-hidden="true" style="font-size:20px"></i>
        </a>
        <!--<a href="https://www.linkedin.com/in/ikismail7/" target="_blank" style="margin-right:10px">
          <i class="fa fa-linkedin" aria-hidden="true" style="font-size:20px"></i>
        </a>-->
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "app"
  // 2. Here is where we load in a template. Look at comment nr 1 as well.. This links to page HelloWorld.vue exemple file.
  // components: {
  //   HelloWorld
  // }
});
</script>

<style lang="scss">
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 15px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

html {
  position: relative;
  min-height: 100%;
}

body {
  margin-bottom: 60px; /* Margin bottom by footer height */
}

.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  height: 60px; /* Set the fixed height of the footer here */
  background-color: #f5f5f5;
}
footer {
  background-color: #f2f2f2;
  padding: 25px;
}
.footer p,
.footer div {
  display: inline;
  vertical-align: top;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 28px;
}
.footer p {
  font-weight: bold;
}
* a {
  color: #42b983;
}
* .fa {
  font-size: 18px;
}
.buttonGreen-outline {
  width: 100%;
  color: #41b883;
  background-color: transparent;
  border-color: #41b883;
}
.buttonGreen-outline:hover {
  color: #ffffff;
  background-color: #41b883;
  border-color: #41b883;
}
.buttonGreen {
  color: #fff;
  background-color: #41b883;
}
.buttonGreen:hover {
  background-color: #42a97b;
}
</style>
