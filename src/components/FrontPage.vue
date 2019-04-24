<template>
  <div id="frontpage">
    <div>
      <!-- <img class="responsive-img" :src="banner" alt="banner" width="100%" height="10%">-->
      <img :src="banner" alt="banner" width="100%" height="10%">
    </div>

    <!--
    <div class="header">
      <h4>South Florida Safety Program</h4>
    </div>
    -->

    <div class="logo">
      <router-link to="/">
        <img alt="SP logo" src="@/assets/logo.jpg">
      </router-link>
    </div>

    <div>
      <HomeSlide/>

      <div class="section texto">
        <div class="row black-text">
          <h4 style="text-align: center; color: green">
            Traffic Law and Substance Abuse
            <span style="text-align: center">
              <br>Education Course
            </span>
            <span style="text-align: center">
              <br>(TLSAE)
            </span>
          </h4>

          <p>Mynewlicense.com is a web based traffic school for taking online courses. It allows registered students to take the traffic law and substance abuse education course (TLSAE) online at their convenience from the comfort of their home. It provides all of the same benefits to the student which He or She will get by attending life traffic school classes.</p>
        </div>
      </div>
      <div class="divider"></div>

      <IconBox/>
      <div class="divider"></div>

      <About/>

      <div class="divider"></div>
      <div class="section texto">
        <div class="row">
          <div class="col s12 m6">
            <h4>Questions? | We Have answers!</h4>

            <ul>
              <li style="text-align:left: ">How can I register?</li>
              <p>To register follow this simple steps:</p>
              <li>Go Login</li>
              <br>
              <li>Create an account</li>
              <br>
              <li>Answers some questions</li>
              <br>
              <li>And submit</li>
            </ul>
          </div>
          <div class="col s12 m6"></div>
        </div>
      </div>

      <Contact/>
    </div>

    <!-- Section: Follow-->
    <section class="section section-follow transparent darken-2 black-text center">
      <div>
        <div class="row">
          <div class="col s12">
            <p>Follow us Social Media</p>
            <a href="https://www.facebook.com/" target=" _blank " class="black-text">
              <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://twitter.com " target="_blank " class="black-text">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://linkedin.com " target="_blank " class="black-text">
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://googleplus.com " target="_blank " class="black-text">
              <i class="fab fa-google-plus fa-2x"></i>
            </a>
            <a href="https://pinterest.com " target="_blank " class="black-text">
              <i class="fab fa-pinterest fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
  </div>
</template>

<script>
import db from "./firebaseInit";

import About from "./About";
import Contact from "./Contact";
import HomeSlide from "./HomeSlide";
import IconBox from "./IconBoxes";
import Footer from "./Footer";

import banner from "../assets/banner02.png";

export default {
  name: "frontpage",
  components: {
    About,
    Contact,
    HomeSlide,
    IconBox,
    Footer
  },
  data() {
    return {
      questions: [],
      banner: ""
    };
  },
  created() {
    db.collection("questions")
      .orderBy("sectionId")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            sectionId: doc.data().sectionId,
            title: doc.data().title,
            review: doc.data().review
          };
          this.questions.push(data);
        });
      });

    this.banner = banner;
  }
};
</script>


<style scoped>
* {
  box-sizing: border-box;
  text-align: center;
}

.header-X {
  margin: 0px;
  margin-top: 40px;
  background: transparent;
}

h4 {
  font-size: 3.7em;
  color: yellow;
  text-shadow: 4px 4px 4px black;
  font-family: "Anton", sans-serif;
}

.texto {
  text-align: left !important;
}
.texto ol {
  text-align: left !important;
}

.logo {
  position: absolute;
  left: 0%;
  top: 40vh;

  min-height: 7vh;
  max-height: 7vh;
  min-width: 7vw;
  max-width: 7vw;
}

@media (max-width: 600px) {
  .main-header {
    height: 50vh;
  }
  h4 {
    font-size: 1.7em;
    color: yellow;
    text-shadow: 4px 4px 4px black;
    font-family: "Anton", sans-serif;
  }
}
</style>
