<template>
  <div>
    <div class="bk-register-form" v-if="!compB">
      <h4>Eligibility</h4>

      <p>{{profile.fname}} please continue your registration</p>

      <div class="fl-approved"></div>
      <div class="card-panel age img-elegible" id="bkg">
        <div class="row" id="select-age-form">
          <div class="col s12 m4">
            <label class="label-age">Please enter your birth date:</label>
          </div>
        </div>

        <!--  <img :src = "picflorida" alt = "florida" class="img-florida" title="Eligible Only in Florida" /> -->

        <div class="col s12 m4">
          <div class="row">
            <div class="col s3 m2">
              <select
                class="browser-default black-text"
                v-model="profile.month"
                v-on:click="onSelectMonth(profile.month)"
              >
                <option value disabled selected>Month</option>
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dic</option>
              </select>
            </div>
            <div class="col s2 m2">
              <select
                class="browser-default black-text"
                v-model="profile.day"
                v-on:click="onSelectDay(profile.day)"
              >
                <option value disabled selected>Day</option>
                <option v-bind:key="d.id" v-for="d in days" :value="d">{{d}}</option>
              </select>
            </div>
            <div class="col s3 m2">
              <select
                class="browser-default black-text"
                v-model="profile.year"
                v-on:click="onSelectYear2(profile.year)"
              >
                <option value="selected_year" selected>Year</option>
                <option v-bind:key="y.id" v-for="y in years" :value="y.year">{{y.year}}</option>
              </select>
            </div>
          </div>

          <br>
          <a
            @click="onValidate"
            v-if="showBtnContinue"
            class="waves-effect blue waves-light btn"
            style="padding-top:0px;"
          >
            <i class="material-icons right">chevron_right</i>Continue
          </a>
        </div>

        <div class="row">
          <div class="col s12 m12">
            <p class="black-text" v-show="calc_age">{{msj}}</p>

            <div class="col s12 m12 pink black-text" v-if="yunior">
              <p
                style="font-size: 18px; color: black;padding:35px; min-width: 300px; border-radius: 8px;"
              >Sorry !!! But you are not eligibility.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="stateRequires">
        <em class="text-animation">
          {{t1}}
          <br>
          <span>{{t2}}</span>
        </em>
      </div>
    </div>
    <div v-if="compB">
      <B v-bind:profile="profile"/>
    </div>
  </div>
</template>

<script>
import picFlorida from "@/assets/florida-image.png";

import B from "./B.vue";

export default {
  name: "A",
  props: ["profile"],
  components: {
    B
  },
  data() {
    return {
      prof: null,

      picflorida: "",
      t1:
        "The state requires you must be at least 14 1/2 years of age to take the course online.",
      t2:
        "The state requires you must be under 18 years of age to qualify for the Online Permit Exam.",
      years: [],
      selected_year: new Date().getFullYear(),
      days: [],
      selected_day: new Date().getDay(),

      month: new Date().getMonth(),

      msj: "Test",
      calc_age: false,

      pictures: [
        "./static/images/y1.jpg",

        "./static/images/e2.jpg",
        "",
        "./static/images/e1.jpg",
        ""
      ],

      compB: false,
      yunior: false,

      showBtnContinue: false
    };
  },
  created() {
    this.picflorida = picFlorida;

    let obj = { id: 0, year: 0 };
    let j = 0;
    let today = new Date().getFullYear();
    let theMiniAge = today - 14;

    for (let i = theMiniAge; i > 1940; i--) {
      obj = {
        id: j,
        year: i
      };
      this.years.push(obj);

      j++;

      if (j < 32) {
        this.days.push(j);
      }
    }

    let len = this.pictures.length;
    let k = 0;

    const bkAnimation = setInterval(() => {
      k++;
      if (k === len) {
        k = 0;
      }

      window.document.getElementById("bkg").style.backgroundImage = `url('${
        this.pictures[k]
      }')`;
    }, 6000);
  },
  methods: {
    onSelectMonth(month) {
      this.month = month;

      console.log("El profile is", this.prop);
    },

    onSelectDay(day) {
      this.selected_day = day;
    },
    onSelectYear() {
      /* Calc years */
    },

    onSelectYear2(year) {
      console.log(year);

      let now = new Date().getFullYear();
      let yourAge = now - year;

      /* Calc months */

      let month = new Date().getMonth();
      let monthAge = month - this.month;
      if (monthAge < 0) {
        yourAge = yourAge - 1;
        monthAge = Math.abs(monthAge);
      }

      if (yourAge < 15) {
        this.profile.category = 2;
        this.yunior = true;
        this.showBtnContinue = false;
      } else {
        this.profile.category = 1;
        this.yunior = false;
        this.showBtnContinue = true;
      }

      this.msj = yourAge.toString() + "/" + monthAge;
      this.calc_age = true;

      //  this.$emit('onSelectYear');
    },

    onValidate() {
      this.compB = true;
    }
  }
};
</script>

<style scoped>
h4 {
  position: relative;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  z-index: 1;
}
.age {
  position: relative;
  min-width: 60vw;
  max-width: 60vw;
  min-height: 60vh;
  max-height: 60vh;
  left: 20%;
  margin: 15px;
  padding: 30px;

  text-align: left;
}
.age:hover {
  box-shadow: 4px 4px 4px black;
}

select {
  border: 1px solid gray;
}

.pick-age {
  max-width: 5vw;
  margin: 0;
}
.label-age {
  position: relative;
  left: 0px;
  font-family: "Times New Roman", Times, serif;
  font-size: 18px;
  font-weight: bold;
  z-index: 1;
  color: black;
}

.m2 {
  margin: 5px;
  padding: 2px;
  min-width: 5vw;
}

.bk-register-form {
  background-image: linear-gradient(#558b2f, #558b2f light-green darken-4);
  margin: 0;
}

.img-elegible {
  background-color: white;
  background-image: url("../assets/y1.jpg");
  background-size: cover;
}

.fl-approved {
  position: absolute;
  /*  left: 82%;*/
  /* top: -50px */
  left: 70%;
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

.img-florida {
  position: relative;
  left: 40%;
  top: -25px;
  border: 2px solid darkgray;
}
.img-florida:hover {
  border: 2px solid black;
}

.stateRequires {
  font-size: 13px;
  top: -80px;
  position: relative;
  left: 50px;
  color: black;
  background-color: white;
  padding: 10px;
  min-width: 735px;
  max-width: 735px;
  left: 28%;
}

.text-animation {
  animation-name: justDoit;
  animation-iteration-count: 10;
  animation-duration: 2s;
  animation-direction: initial;
}

@keyframes justDoit {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 600px) {
  h4 {
    position: relative;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    z-index: 1;
  }
  .age {
    position: relative;
    min-width: 88vw;
    max-width: 88vw;
    min-height: 60vh;
    max-height: 60vh;
    left: 2px;
    margin: 2px;
    padding: 2px;

    text-align: left;
  }
  .age:hover {
    box-shadow: 4px 4px 4px black;
  }

  .pick-age {
    max-width: 3vw;
    margin: 0;
  }
  .label-age {
    position: relative;
    left: 5px;
    top: 15px;
    font-family: "Times New Roman", Times, serif;
    font-size: 18px;
    font-weight: bold;
    z-index: 1;
    color: black;
  }

  .m2 {
    margin: 5px;
    padding: 2px;
    min-width: 2vw;
  }

  .bk-register-form {
    background-image: linear-gradient(#558b2f, #558b2f light-green darken-4);
  }

  .img-elegible {
    background-color: white;
    background-image: url("../assets/y1.jpg");
    background-size: cover;
  }

  .img-florida {
    position: relative;
    left: 4%;
    top: -25px;
    border: 2px solid darkgray;
  }
  .img-florida:hover {
    border: 2px solid black;
  }

  .stateRequires {
    font-size: 6.5px;
    top: -90px;
    position: relative;
    left: 50px;
  }
  span {
    margin: -10px;
    padding: 0;
  }

  .fl-approved {
    position: absolute;
    /*  left: 82%;*/
    /* top: -50px */
    left: 4%;
    top: 45%;
    z-index: 1;
    background-color: white;
    background-image: url("../assets/fl-seal-wp.gif");
    background-size: cover;
    max-width: 30vw;
    min-width: 30vw;
    max-height: 30vw;
    min-height: 30vw;
  }

  .stateRequires {
    font-size: 6px;
    top: -80px;
    position: relative;
    left: 14px;
    color: black;
    background-color: white;
    padding: 10px;
    min-width: 270px;
    max-width: 270px;
  }
}
</style>