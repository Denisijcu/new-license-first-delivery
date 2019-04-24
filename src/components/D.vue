<template>
  <div class="sec-d">
    <div class="seccion seccion-icons white lighten-4 left black-text">
      <div class="col s0 m1"></div>
      <div class="col s12 m10 white black-text form-confirmation">
        <h3 class="confirmation-title">Confirmation</h3>
        <h2 class="confirmation-fullName">{{profile.fname}} {{profile.lname}}</h2>

        <p>
          You almost done your registration.
          Just take some seconds to check your answers.
        </p>

        <input type="text" class="personal-info" v-model="profile.fname" placeholder="First Name">
        <br>
        <input type="text" class="personal-info" v-model="profile.lname" placeholder="Last Name">
        <br>
        <input type="text" v-model="profile.qvalidation" disabled placeholder="Validation Question">
        <br>
        <input type="text" v-model="profile.answer" placeholder="Answer">
        <br>
        <p style="text-align:center; font-weight:bold;">Date of Birth</p>
        <label for="month">Month</label>
        <input
          type="text"
          v-model="profile.month"
          placeholder="Month"
          style="min-width: 40px; max-width: 40px;text-align:center;"
        >
        <br>
        <label for="month">Day</label>
        <input
          type="text"
          v-model="profile.day"
          placeholder="Day"
          style="min-width: 40px; max-width: 40px;text-align:center;"
        >
        <br>
        <label for="month">Year</label>
        <input
          type="text"
          v-model="profile.year"
          placeholder="Year"
          style="min-width: 40px; max-width: 40px;text-align:center;"
        >
        <br>

        <p style="text-align:center; font-weight:bold;">Course Format</p>
        <div style="margin: 10px; padding:15px">
          <input type="checkbox" id="cAudio" v-model="profile.audio">
          <label for="cAudio" style="color:black;font-size:11px;">Audio</label>
        </div>
        <div style="margin: 10px; padding:15px">
          <input type="checkbox" id="cVideo" v-model="profile.video">
          <label for="cVideo" style="color:black;font-size:11px;">Video</label>
        </div>

        <p style="text-align:center; font-weight:bold;">Get Proofs</p>

        <div style="margin: 10px; padding:15px">
          <input type="checkbox" id="cEmail3" v-model="profile.email3">
          <label for="cEmail3" style="color:black;font-size:11px;">by Email</label>
        </div>

        <div style="margin: 10px; padding:15px">
          <input type="checkbox" id="cDownload" v-model="profile.download">
          <label for="cDownload" style="color:black;font-size:11px;">by Download</label>
        </div>

        <div style="margin: 10px; padding:15px">
          <input type="checkbox" id="cPrinted" v-model="profile.printed">
          <label for="cPrinted" style="color:black;font-size:11px;">by Printed</label>
        </div>

        <p style="text-align:center; font-weight:bold;">Upgrade, terms and conditions</p>

        <div style="margin: 10px; padding:15px">
          <input type="checkbox" id="cUpgrade" v-model="profile.upgrade">
          <label
            for="cUpgrade"
            style="color:black;font-size:11px;"
          >Upgrade your 50-Question DMV Practice Test to 100 Questions</label>
        </div>

        <div style="margin: 10px; padding:15px">
          <input type="checkbox" id="cterm" v-model="profile.term">
          <label
            for="cterm"
            style="color:black;font-size:11px;"
          >I have read and I accept the terms and conditions</label>
        </div>

        <br>
        <p style="text-align:left; font-style: italic;">If everything is Ok please Submit</p>
        <br>

        <a @click="onSubmit" class="waves-effect green waves-light btn" style="padding-top:0px;">
          <i class="material-icons right">chevron_right</i>Submit
        </a>

        <br>
        <br>
        <br>
        <br>
      </div>
      <div class="col s0 m1"></div>
    </div>
  </div>
</template>    

<script>
import db from "./firebaseInit";

export default {
  props: ["profile"],
  name: "D",

  components: {},

  data() {
    return {
      email: this.profile.email,
      firstName: this.profile.fname,
      lastName: this.profile.lname,
      qvalidation: this.profile.qvalidation,
      answer: this.profile.answer,
      month: this.profile.month,
      day: this.profile.day,
      year: this.profile.year,
      audio: this.profile.audio,
      video: this.profile.video,
      download: this.profile.download,
      printed: this.profile.printed,
      email2: this.profile.email2,
      email3: this.profile.email3,
      category: this.profile.category
    };
  },
  methods: {
    onTest() {
      console.log("clicked");
    },

    onSubmit() {
      console.log("This profile", this.profile);
      //  this.$router.push({name:'courses'})

      this.saveProfile();
    },

    saveProfile() {
      db.collection("students")
        .add({
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          qvalidation: this.qvalidation,
          answer: this.answer,
          month: this.month,
          day: this.day,
          year: this.year,
          audio: this.audio,
          video: this.video,
          download: this.download,
          printed: this.printed,
          email2: this.email2,
          email3: this.email3,
          category: this.category
        })
        .then(docRef => this.$router.push("/"))

        .catch(error => console.log(err));
    }
  }
};
</script>

<style scoped>
.sec-d {
  min-width: 150vw;
  max-width: 150vw;
  min-height: 100vh;
  max-height: 100vh;
  position: relative;
  left: 30%;
  margin-top: 5px;
}
.form-confirmation {
  text-align: left;
}
.confirmation-title,
.confirmation-fullName {
  text-align: center;
}
.personal-info {
  max-width: 20vw;
  min-width: 20vw;
}

@media (max-width: 600px) {
}
</style>