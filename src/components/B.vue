<template>
  <div>
    <div class="optiones" v-if="!compC">
      <div class="fl-approved"></div>
      <div class="card-panel white option">
        <h1>Options</h1>
        <hr>

        <h2>Course Format</h2>

        <div id="course-format">
          <input type="checkbox" id="audio" v-model="profile.audio">
          <label for="audio" class="black-text darken-1">
            Audio Read-Along
            <span class="green-text">Now Only $4.99</span>
          </label>
          <br>
          <span
            class="space"
          >Our Audio Read-Along feature provides even more freedom, allowing you to move about while listening and learning the course content.</span>
          <br>
          <input type="checkbox" id="video" v-model="profile.video">
          <label for="video" class="black-text">
            <span class="red-text">NEW!</span> Streaming Video Course ($9.99)
          </label>
          <br>
          <span
            class="space"
          >All of the info from the original text-based course condensed in a convenient, streaming video format. This is the easiest way to fulfill your Florida TLSAE requirement!</span>
          <br>
          <br>
        </div>

        <h2>Course Completion</h2>
        <p
          class="space"
        >For your convenience, we will notify the DHSMV once you have successfully completed your Florida Streaming First-Time Driver Course (TLSAE/Drug and Alcohol Course).</p>

        <h2>
          Select an option below to also receive a Proof of Completion for your records.
          <br>
          <span>
            <p class="sbtn yellow-text" v-on:click="onShowProof">What's a proof of completion?</p>
          </span>
        </h2>
        <div id="proof" class="proof" v-show="showProof">
          <div>
            <p style="font-weight:bold">
              <strong>What's a "Proof of Completion?"</strong>
            </p>
            <br>
            <em>Your proof of completion shows that you have successfully completed your course, stating the date and time of completion.We encourage you to keep a Proof of Completion Certificate for your records.</em>
          </div>
          <br>
          <em v-on:click="onShowProof" class="sbtn red-text close">Close</em>
        </div>
        <div id="course-completion">
          <input type="checkbox" id="email2" value="Email2" v-model="profile.email2">
          <label for="email2" class="black-text">Email Proof of Completion ($8.95)</label>
          <br>
          <input type="checkbox" id="download" v-model="profile.download">
          <label for="download" class="black-text">Download Proof of Completion ($8.95)</label>
          <br>
          <input type="checkbox" id="printed" value="Printed" v-model="profile.printed">
          <label for="printed" class="black-text">Printed Proof of Completion ($9.95)</label>
          <br>
        </div>
        <br>
        <hr>

        <br>
        <a @click="onValidate" class="waves-effect blue waves-light btn" style="padding-top:0px;">
          <i class="material-icons right">chevron_right</i>Continue
        </a>
      </div>
    </div>

    <div v-if="compC">
      <C v-bind:profile="profile"/>
    </div>
  </div>
</template>

<script>
import C from "./C.vue";

export default {
  name: "B",
  props: ["profile"],
  components: {
    C
  },

  data() {
    return {
      checkedFormat: [],
      checkedCompletion: [],
      showProof: false,
      compC: false,
      audio: false,
      video: false
    };
  },
  methods: {
    onShowProof() {
      this.showProof = !this.showProof;
    },
    onValidate() {
      this.compC = true;
    }
  }
};
</script>

<style scoped>
.optiones {
  position: relative;
  background-image: linear-gradient(#558b2f, #558b2f light-green darken-4);
  margin: 5%;
  margin-top: 0px;
  padding: 50px;
  padding-left: 150px;
  max-width: 85vw;
  min-width: 85vw;
  max-height: 100vh;
  min-height: 100vh;
  color: black;
  text-align: left;
}
.option {
  padding-left: 100px;
  font-family: "Times New Roman", Times, serif;
  font-size: 14px;
}

h1 {
  font-size: 1.9em;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
h2 {
  font-size: 1.3em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bolder;
}

.space {
  margin-left: 30px;
  font-style: italic;
}
.sbtn {
  cursor: pointer;
}
.proof {
  position: relative;
  border: 1px solid black;
  box-shadow: 4px 4px 4px gray;
  min-width: 40vw;
  max-width: 40vw;
  max-height: 20vh;
  min-height: 20vh;
  padding: 25px;
  background-color: wheat;
  color: black;
  margin-bottom: 50px;
}

.close {
  position: relative;
  left: 90%;
}

.fl-approved {
  position: absolute;
  /*  left: 82%;*/
  /* top: -50px */
  left: 83%;
  top: 13%;
  z-index: 1;
  background-color: white;
  background-image: url("../assets/fl-seal-wp.gif");
  background-size: cover;
  max-width: 10vw;
  min-width: 10vw;
  max-height: 10vw;
  min-height: 10vw;
}

@media (max-width: 600px) {
  .optiones {
    position: relative;
    background-image: linear-gradient(#558b2f, #558b2f light-green darken-4);
    margin: 0%;
    margin-top: 0px;
    padding: 1px;
    padding-left: 0px;
    max-width: 95vw;
    min-width: 95vw;
    max-height: 100vh;
    min-height: 100vh;
    color: black;
    text-align: left;
  }
  .option {
    padding-left: 10px;
    font-family: "Times New Roman", Times, serif;
    font-size: 12px;
  }

  h1 {
    font-size: 1.4em;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  h2 {
    font-size: 1em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: bolder;
  }

  .space {
    margin-left: 10px;
    font-style: italic;
  }
  .sbtn {
    cursor: pointer;
  }
  .proof {
    position: relative;
    border: 1px solid black;
    box-shadow: 4px 4px 4px gray;
    min-width: 80vw;
    max-width: 80vw;
    max-height: 30vh;
    min-height: 30vh;
    padding: 10px;
    background-color: wheat;
    color: black;
    margin-bottom: 10px;
  }

  .close {
    position: relative;
    left: 90%;
  }

  .fl-approved {
    position: absolute;
    /*  left: 82%;*/
    /* top: -50px */
    left: 73%;
    top: 13%;
    z-index: 1;
    background-color: white;
    background-image: url("../assets/fl-seal-wp.gif");
    background-size: cover;
    max-width: 20vw;
    min-width: 20vw;
    max-height: 20vw;
    min-height: 20vw;
  }
  .btn {
    min-width: 30vw;
    max-width: 30vw;
    margin: 0;
    padding: 0;
    padding-left: 8px;
    font-size: 12px;
  }
}
</style>