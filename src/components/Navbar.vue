<template>
  <nav>
    <div class="nav-wrapper green">
      <div class="conta">
        <router-link to="/" class="brand-logo s12 m12">
          <h4>{{websiteTitle}}</h4>
        </router-link>

        <ul class="right">
          <li v-if="isLoggeIn">
            <span class="email black-text">{{currentUser}}</span>
          </li>
          <li v-if="isLoggeIn && admin">
            <router-link to="/admin">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/frontpage">
              Home
              <i class="material-icons left">home</i>
            </router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/course">
              <i class="material-icons left">local_library</i>
              Courses
            </router-link>
          </li>
          <li>
            <router-link to="/contact">
              <i class="material-icons left">local_post_office</i>
              Contact
            </router-link>
          </li>

          <li v-if="!isLoggeIn">
            <router-link to="/login">
              <i class="material-icons right">play_for_work</i>
              Login
            </router-link>
          </li>
          <li v-if="!isLoggeIn">
            <router-link to="/register">
              <i class="material-icons left">person_add</i>
              Register
            </router-link>
          </li>
          <li v-if="isLoggeIn">
            <a href="#?" v-on:click="logout">
              <i class="material-icons left">exit_to_app</i>Logout
            </a>
            <!-- <button v-on:click="logout" class="btn">Logout</button> -->
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from "firebase";
export default {
  name: "navbar",
  data() {
    return {
      isLoggeIn: false,
      currentUser: false,
      websiteTitle: "South Florida Safety Program",
      admin: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggeIn = true;
      this.currentUser = firebase.auth().currentUser.email;

      if (this.currentUser === "dslij@hotmail.com") {
        this.admin = true;
      } else {
        this.admin = false;
      }
    }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
        });
    }
  }
};
</script>

<style scoped>
.email {
  padding-right: 10px;
}
.logout {
  background: transparent;
}
h4 {
  font-size: 1em;
  color: yellow;
  text-shadow: 4px 4px 4px black;
  font-family: "Anton", sans-serif;
}
.conta {
  margin-left: 5px;
}
</style>


