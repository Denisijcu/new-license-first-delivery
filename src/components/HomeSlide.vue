<template>
  <!-- Section: Slider-->
  <section class="slider">
    <ul class="slides">
      <li>
        <img class="responsive-img" :src="p4" alt>
        <div class="caption center-align">
          <h2 class="white-text">Drugs</h2>
          <h5
            class="light yellow-text text-lighten-3 hide-on-small-only"
          >The use of drugs and their effects on the body</h5>
          <a href="#" class="waves-effect waves-light transparent btn-small">
            <router-link to="/courses">Know What is a drug?</router-link>
          </a>
        </div>
      </li>
      <li>
        <img class="responsive-img" :src="p2" alt>
        <div class="caption left-align">
          <h2 class="white-text">Driving</h2>
          <h5
            class="light yellow-text text-lighten-3 hide-on-small-only"
          >The use of drugs and their effects on driving</h5>
          <a href="#" class="waves-effect waves-light transparent btn-small">
            <router-link to="/courses">Know How alcohol and drugs affect driving</router-link>
          </a>
        </div>
      </li>
      <li>
        <img class="responsive-img" :src="p3" alt>
        <div class="caption right-align">
          <h2 class="white-text">Responsible driving</h2>
          <h5 class="light yellow-text text-lighten-3 hide-on-small-only">Safety belts and car seats</h5>
          <a class="waves-effect waves-light btn-small transparent">
            <router-link to="/login">Sign Up</router-link>
          </a>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";

//import Jquery as $ from 'jquery';

export default {
  name: "HomeSlide",
  props: {},
  components: {},
  data() {
    return {
      p1: "",
      p2: "",
      p3: "",
      p4: ""
    };
  },
  created() {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.p4 = p4;
    $(document).ready(function() {
      // Init Slider
      $(".slider").slider({
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
      });

      // Show sections
      $(".section").fadeIn();
    });
  }
};
</script>
  
<style>
.slider {
  max-width: 98vw;
  min-width: 98vw;
  height: auto;
  box-shadow: 4px 4px 4px gray;
}

@media (max-width: 600px) {
  .main-header {
    height: 50vh;
  }

  h2 {
    font-size: 1.7em;
  }
}
</style>
