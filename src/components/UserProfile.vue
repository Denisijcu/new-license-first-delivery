<template>
  <div>
    <div class="card white profile" v-show="showProfileWindow">
      <form @submit="createProfile">
        <h4 class="green-text">Your Account was created succesfully</h4>

        <p>Please fill the form bellow to create your profile</p>

        <input type="text" v-model="fname" placeholder="First Name">
        <br>
        <input type="text" v-model="lname" placeholder="Last Name">
        <br>

        <label class="black-text">Set a Validation Question</label>
        <select
          class="browser-default"
          v-model="validationQuestion"
          v-on:click="onSelectValidationQuestion"
        >
          <option value disabled selected>Choose your option</option>
          <option value="What is your favor color?">What is your favor color?</option>
          <option value="What was your first car?">What was your first car?</option>
          <option value="What was your first school?">What was your first school?</option>
        </select>

        <div v-if="svq">
          <input type="text" v-model="answer" placeholder="Enter answer">
          <br>
        </div>

        <br>
        <input type="submit" value="Submit" class="btn teal white-text">
        <br>
        <br>
        <br>
      </form>
    </div>

    <user-setting v-bind:profile="user" v-if="showRegisterWindow"></user-setting>
  </div>
</template>

 <script>
import Setting from "./Setting.vue";
export default {
  name: "UserProfile",
  components: {
    "user-setting": Setting
  },
  data() {
    return {
      email: "",
      password: "",
      showProfileWindow: true, // true
      showRegisterWindow: false,
      fname: "",
      lname: "",
      validationQuestion: "",
      svq: false,
      answer: "",
      month: "",
      day: "",
      year: "",
      audio: false,
      video: false,
      email1: false,
      download: false,
      printed: false,
      email2: false,
      category: 1,
      email3: "",
      upgrade: false,
      term: false,

      user: {
        fname: "Prueba",
        lname: "Prueba Last Name",
        qvalidation: 0,
        answer: ""
      }
    };
  },
  methods: {
    createProfile() {
      this.user = {
        email: this.email,
        password: this.passwor,
        fname: this.fname,
        lname: this.lname,
        qvalidation: this.validationQuestion,
        answer: this.answer,
        month: this.month,
        day: this.day,
        year: this.year,
        audio: this.audio,
        video: this.video,
        email: this.email,
        download: this.download,
        printed: this.printed,
        email2: this.email2,
        email3: this.email3,
        category: 1
      };
      //  this.$router.push({ name: "register"});
      this.showRegisterWindow = true;
      this.showProfileWindow = false;
    },
    onSelectValidationQuestion() {
      this.svq = true;
    }
  }
};
</script>

 <style scoped>
h4 {
  font-size: 1.7rem;
  color: black;
  left: 20px;
}
.sign-up {
  background-image: url("../assets/p5.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  color: white;
}
.card-profile {
  position: absolute;
  left: 32%;
  top: 32%;
  background-color: orangered;
  color: black;
  min-width: 35vw;
  max-height: 35vh;
  max-width: 35vw;
  min-height: 35vh;
  border-radius: 5px;
  margin: 15px;
  padding: 30px;
  box-shadow: 5px 5px 5px black;
  text-align: left;
}

input[type="text"] {
  border: 1px solid gray;
  padding: 2px;
  border-radius: 5px;
  max-width: 250px;
  min-width: 250px;
  overflow: hidden;
}

input[type="password"] {
  border: 1px solid gray;
  padding: 2px;
  border-radius: 5px;
  max-width: 250px;
  min-width: 250px;
  overflow: hidden;
}
.row {
  margin-bottom: 0px;
}

label {
  color: white;
}

.btn {
  padding-top: 0;
  position: absolute;
  left: 40%;
}

.go-back {
  position: absolute;
  left: 60%;
}

.profile {
  position: absolute;
  left: 32%;
  top: 32%;

  background-color: grey;
  border: 2px solid gray;
  color: black;
  min-width: 50vw;
  max-height: 60vh;
  max-width: 50vw;
  min-height: 60vh;
  border-radius: 5px;
  margin: 30px;
  padding: 30px;
  box-shadow: 5px 5px 5px black;
  text-align: left;
}

select {
  border: 1px solid gray;
}

@media (max-width: 600px) {
  h4 {
    font-size: 1.7rem;
    color: black;
    left: 20px;
  }
  .sign-up {
    background-image: url("../assets/p5.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 1;
    color: white;
  }
  .card-profile {
    position: relative;
    background-color: green;
    left: 2%;
    color: black;
    min-width: 90vw;
    max-height: 35vh;
    max-width: 90vw;
    min-height: 35vh;
    border-radius: 5px;
    margin: 15px;
    padding: 30px;
    box-shadow: 5px 5px 5px black;
    text-align: left;
  }

  input[type="text"] {
    border: 1px solid gray;
    padding: 2px;
    border-radius: 5px;
    max-width: 250px;
    min-width: 250px;
    overflow: hidden;
  }

  input[type="password"] {
    border: 1px solid gray;
    padding: 2px;
    border-radius: 5px;
    max-width: 250px;
    min-width: 250px;
    overflow: hidden;
  }
  .row {
    margin-bottom: 0px;
  }

  label {
    color: white;
  }

  .btn {
    padding-top: 0;
    position: absolute;
    left: 40%;
  }

  .go-back {
    position: absolute;
    left: 60%;
  }

  .profile {
    background-color: grey;
    color: black;
    min-width: 90vw;
    max-height: 60vh;
    max-width: 90vw;
    min-height: 60vh;
    border-radius: 5px;
    margin: 15px;
    padding: 30px;
    box-shadow: 5px 5px 5px black;
    text-align: left;
  }

  select {
    border: 1px solid gray;
  }
}
</style>
