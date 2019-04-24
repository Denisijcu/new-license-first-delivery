<template>
  <div>
    <div>
      <div class="row">
         <div class="col s12 m4"></div>
        <div class="col s12 m4">
          <div class="login card-panel green white-text center">
            <h3>Login</h3>
            <form action="index.html">
              <div class="input-field">
                <i class="material-icons prefix">email</i>
                <input type="email" id="email" v-model="email">
                <label class="white-text" for="email">Email Address</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">lock</i>
                <input type="password" id="password" v-model="password">
                <label class="white-text" for="password">Password</label>
              </div>
              <button
                v-on:click="login"
                class="btn btn-large btn-extended grey lighten-4 black-text"
              >Login</button>
            </form>
          </div>
           <div class="col s12 m4"></div>

            <div class="row">
              <a class="text orange-text social-button" v-on:click="socialLogin">
                <span>
                  <img src="../assets/google-logo.png" alt="google logo" class="social-button img">
                </span> Google Account
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`You are logged in as ${this.email}`);
            
            this.$router.go({ path: this.$router.path });
            // this.$router.push("/");
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    },

    socialLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
            //this.$router.go({ path: this.$router.path });
            this.$router.push({ name: "userProfile"});
        })
        .catch(err => {
          alert("Oops. " + err.message);
        });
    }
  }
};
</script>

<style scoped>
.social-button {
  width: 75px;
  background-color: transparent;
  color: black;
  padding: 10px;
  outline: 0;
  border: 0;
  height: 75px;
  cursor: pointer;
}

.social-button img {
  background-color: transparent;
  border: none;
}
.btn-login {
  min-width: 5vw;
  max-height: 40px;
  border-radius: 10px;
}
</style>