<template>
  <div id="app">
    <Navbar/>

    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {};
  },
  created() {
    this.banner = banner;
  }
};
</script>

<style>
nav {
  margin-bottom: 10px;
}

.header {
  background-color: white;
  background-image: url("./assets/banner02.png");
  background-size: contain;
  background-repeat: no-repeat;

  color: #333;
  text-align: center;
  padding: 0px;
  margin-top: 0vh;
  margin-bottom: 0vh;
}

.header a {
  color: #333;
  padding-right: 5px;
  text-decoration: none;
}
.logo {
  position: absolute;
  left: 1%;
  top: 32vh;

  min-height: 7vh;
  max-height: 7vh;
  min-width: 7vw;
  max-width: 7vw;
}
</style>