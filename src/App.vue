<template>
  <div id="app" class="container">
    <main>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
        <img alt="Vue logo" src="./assets/logo.png" width="50px">
        <!-- Mobile menu button -->
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          v-on:click="toggleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarText" v-bind:class="{ 'show': show }">
          <!-- Here is the text and links to pages -->
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/home" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">All Products</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </main>

    <router-view></router-view>
    <!-- <div>
      <helloWorld></helloWorld>
    </div> -->

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
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "app",
  data() {
    return {
      show: false
    };
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    }
  },
  // components: { // Load in the page in this component
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
