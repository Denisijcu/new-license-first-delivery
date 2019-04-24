<template>
  <div>
    <nav>
      <div class="nav-wrapper green">
        <div>
          <router-link to="/" class="brand-logo s12 m12">{{websiteTitle}}</router-link>
          <ul class="right">
            <li v-if="isLoggeIn">
              <span class="email black-text">{{currentUser}}</span>
            </li>
            <li v-if="isLoggeIn">
              <router-link to="/">Home</router-link>
            </li>
            <li v-if="isLoggeIn">
              <router-link to="/about">About</router-link>
            </li>
            <li v-if="isLoggeIn">
              <router-link to="/courses">Courses</router-link>
            </li>
            <li v-if="isLoggeIn">
              <router-link to="/contact">Contact</router-link>
            </li>

            <li v-if="!isLoggeIn">
              <router-link to="/login">Login</router-link>
            </li>
            <li v-if="!isLoggeIn">
              <router-link to="/register">Register</router-link>
            </li>
            <li v-if="isLoggeIn">
              <button v-on:click="logout" class="btn black">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "usernavbar",
  data() {
    return {
      isLoggeIn: false,
      currentUser: false,
      websiteTitle: "User"
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggeIn = true;
      this.currentUser = firebase.auth().currentUser.email;
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
</style>
