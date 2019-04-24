<template>
  <div class="container black-text">
    <h1>Welcome to the courses</h1>

    <h1 id="timer2"></h1>

    <i class="material-icons" @click="onTimer">{{iconSection0}}</i>

    <section class="course">
      <div class="row" v-show="TimerON">
        <div id="clockdiv">
          <div style="display:none;">
            <span class="days" id="day"></span>
            <div class="smalltext">Days</div>
          </div>
          <div>
            <span class="hours" id="hour">{{hour}}</span>
            <div class="smalltext">Hours</div>
          </div>
          <div>
            <span class="minutes" id="minute">{{minute}}</span>
            <div class="smalltext">Minutes</div>
          </div>
          <div>
            <span class="seconds" id="second">{{second}}</span>
            <div class="smalltext">Seconds</div>
          </div>
        </div>
      </div>

      <div class="card-panel">
        <div class="row">
          <h5 class="col s10">Course Progress</h5>
          <h5 class="col s2 right-align">{{lessonProgress}}</h5>
        </div>
        <div class="progress">
          <div class="determinate" style="width:30%"></div>
        </div>
      </div>

      <div class="row">
        <div class="col s12 m6 timer">
          <div id="timer"></div>
        </div>
      </div>

      <div class="row">
        <div class="col s12 m4">
          <ul class="collapsible">
            <li>
              <div class="collapsible-header">
                <i class="material-icons" @click="onOpen0">{{iconSection0}}</i>
                INTROUCTION
              </div>

              <div class="collapsible-body">
                <a class="effect whost black-text">
                  <i class="small material-icons left" @click="openFolderFn(0)">{{iconFolder}}</i>
                  <span v-html="title"></span>
                </a>

                <br>

                <ul v-show="folderOpen" style="margin-left: 15px;">
                  <li>
                    <a class="waves-effect whost black-text" @click="openSections(1)">
                      <i class="material-icons left">remove_red_eye</i>
                      <span>Section I</span>
                    </a>
                  </li>
                  <li>
                    <a class="waves-effect whost black-text" @click="openSections(2)">
                      <i class="material-icons left">remove_red_eye</i>
                      <span>Section II</span>
                    </a>
                  </li>
                  <li>
                    <a class="waves-effect whost black-text" @click="openSections(3)">
                      <i class="material-icons left">remove_red_eye</i>
                      <span>Section III</span>
                    </a>
                  </li>

                  <li>
                    <a class="waves-effect whost black-text" @click="openSections(4)">
                      <i class="material-icons left">remove_red_eye</i>
                      <span>Review</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <!-- Section I -->
            <li>
              <div class="collapsible-header">
                <i class="material-icons" @click="onOpen1">{{iconSection1}}</i>SECTION 1
              </div>
              <div class="collapsible-body">
                <a class="effect whost black-text">
                  <i class="small material-icons left" @click="openFolderFn(1)">{{iconFolder}}</i>
                  <span v-html="title"></span>
                </a>

                <br>
                <ul v-show="folderOpen" style="margin-left: 15px;">
                  <li>
                    <a class="waves-effect whost black-text" @click="openSectionI(1)">
                      <i class="material-icons left">remove_red_eye</i>
                      <span>1.1 What is a drug?</span>
                    </a>
                  </li>
                  <li>
                    <a class="waves-effect whost black-text" @click="openSectionI(2)">
                      <i class="material-icons left">remove_red_eye</i>
                      <span>1.2 Alcoholism affects our society</span>
                    </a>
                  </li>
                  <li>
                    <a class="waves-effect whost black-text" @click="openSectionI(3)">
                      <i class="material-icons left">remove_red_eye</i>
                      <span>1.3 Types of drugs and their effects</span>
                    </a>
                  </li>

                  <li>
                    <a class="waves-effect whost black-text" @click="openSectionI(4)">
                      <i class="material-icons left">remove_red_eye</i>
                      <span>1.4 Polydrug use</span>
                    </a>
                  </li>

                  <li>
                    <a class="waves-effect whost black-text" @click="openSectionI(5)">
                      <i class="material-icons left">remove_red_eye</i>
                      <span>1.5 Long-term effects of alcohol consumption?</span>
                    </a>
                  </li>

                  <li>
                    <a class="waves-effect whost black-text" @click="openSectionI(6)">
                      <i class="material-icons left">remove_red_eye</i>
                      <span>1.6 Alcohol absorption</span>
                    </a>
                  </li>

                  <li>
                    <a class="waves-effect whost black-text" @click="openSectionI(7)">
                      <i class="material-icons left">remove_red_eye</i>
                      <span>1.7 Tolerance and dependence</span>
                    </a>
                  </li>

                  <li>
                    <a class="waves-effect whost black-text" @click="openSectionI(8)">
                      <i class="material-icons left">remove_red_eye</i>
                      <span>1.8 Steps toward addiction</span>
                    </a>
                  </li>

                  <li>
                    <a class="waves-effect whost black-text" @click="openSectionI(9)">
                      <i class="material-icons left">remove_red_eye</i>
                      <span>1.9 Psychological factors of use, abuse, and addiction</span>
                    </a>
                  </li>

                  <!-- Make the Review Section I -->
                  <li>
                    <a class="waves-effect whost black-text" @click="openSectionI(10)">
                      <i class="material-icons left">remove_red_eye</i>
                      <span>REVIEW</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <!--
            <li>
              <div class="collapsible-header">
                <i class="material-icons" @click="onOpen2">{{iconSection2}}</i>SECTION 2
              </div>
              <div class="collapsible-body">
                <span>{{sectionII}}</span>
              </div>
            </li>
            <li>
              <div class="collapsible-header">
                <i class="material-icons" @click="onOpen3">{{iconSection3}}</i>SECTION 3
              </div>
              <div class="collapsible-body">
                <span>{{sectionIII}}</span>
                <div v-for="b in book" :key="b.id">
                  {{b.content}}
                  <br>
                  <ul v-for="item in b.Introduction" :key="item.id">
                    <li v-html="item">{{item}}</li>
                  </ul>
                </div>
              </div>
            </li>
            -->
          </ul>
        </div>

        <!--Column show Content when Folder is close -->
        <div class="col s12 m8 nice-shot">
          <div class="card white green-text" v-show="!folderOpen && !review">
            <h1 align="center" class="black white-text">South Florida Safety Program</h1>
            <div class="carousel">
              <div v-for="elem in images" :key="elem.id">
                <a class="carousel-item size" :href="elem.link">
                  <img :src="elem.img" :alt="elem.link">
                  <span>
                    <h1 class="black white-text"></h1>
                  </span>
                </a>
              </div>
            </div>
            <h1 class="black white-text"></h1>
          </div>
        </div>
        <!--Colum show Content -->
        <div class="col s12 m8" v-show="folderOpen && !review">
          <div class="row teal black-text">
            <div class="col s12 m12 show-conten">
              <div class="card" v-show="start">
                <p class="white-text the_font">{{contenTitle}}</p>
                <img :src="spinner" alt="loading" v-show="isLoading">
                <p class="white-text the_font">
                  <span v-html="showConten" class="the_font"></span>
                </p>

                <div class="fixed-action-btn">
                  <p class="btn-floating btn-large red">
                    <i class="material-icons" @click="speak(showConten)">headset</i>
                  </p>
                </div>
              </div>
              <div class="card white" v-show="timerON">
                <h3 class="red-text">
                  <i class="large material-icons">access_alarms</i> TIME OVER
                </h3>
                <img
                  src="https://images.pexels.com/photos/1639141/pexels-photo-1639141.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt
                  style="min-width:50%; max-width:50%; min-height:auto; max-height:auto;"
                >
              </div>
            </div>
          </div>
        </div>

        <!--Colum show Window Reviews -->
        <div class="col s12 m8" v-show="review && !EndReview">
          <div class="row grey white-text">
            <div class="col s12 m12 show-conten transparent">
              <div class="card white black-text">
                <h5>
                  <span style="color:green; position:absolute; right:15px;">
                    SECTION
                    <span
                      style="right:5px; color:white; border:1px solid green;border-radius:100%; padding:25px;padding-top:30px; background-color:green"
                    >
                      <span
                        style="color:white;font-family: 'Ultra', serif; font-size:40px;"
                      >{{sectionNumber}}</span>
                    </span>
                  </span>
                </h5>
                <h2 align="center">REVIEW</h2>
                <div class="divider"></div>
                <div class="col s12 m12">
                  <row>
                    <p>
                      Question:
                      <span
                        style="font-family: 'Roboto Condensed', sans-serif; font-size:25px;color:black;"
                      >{{questionNumber}}</span>
                    </p>
                    <p
                      style="font-family: 'Montserrat', sans-serif; font-size:25px;font-weight:bold;"
                    >{{questionName}}</p>
                    <hr>
                  </row>

                  <row>
                    <div class="col s11 m12">
                      <p>Pick your answer:</p>
                      <input type="radio" id="answerA" value="AnswerA" v-model="answerI">
                      <label for="answerA" style="color: black">{{answerA}}</label>
                      <br>

                      <input type="radio" id="answerB" value="AnswerB" v-model="answerI">
                      <label for="answerB" style="color: black">{{answerB}}</label>
                      <br>

                      <input
                        type="radio"
                        id="answerC"
                        value="AnswerC"
                        v-model="answerI"
                        v-if="answerC"
                      >
                      <label for="answerC" style="color: black">{{answerC}}</label>
                      <br>
                      <br>
                      <div class="col s12 m12 divider"></div>
                      <br>
                      <div class="row">
                        <div class="col s6 m6">
                          <div class="row">
                            <h5 class="col s10">Questions</h5>
                            <h5 class="col s2 right-align">{{questionsProgress}}</h5>
                          </div>
                          <div class="progress red">
                            <div class="determinate" :style="questionProgressStyle"></div>
                          </div>
                        </div>
                        <div class="col s6 m6">
                          <a class="waves-effect waves-orange btn" @click="nextQuestion(++q)">
                            <i class="material-icons right">arrow_forward</i>Next
                          </a>
                        </div>
                      </div>
                    </div>
                  </row>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Window Results Reviews -->
        <div class="col s12 m8" v-show="EndReview">
          <div class="row grey white-text">
            <div class="col s12 m12 show-conten transparent">
              <div class="card white black-text">
                <h5>
                  <span style="color:green; position:absolute; right:15px;">
                    SECTION
                    <span
                      style="right:5px; color:white; border:1px solid green;border-radius:100%; padding:25px;padding-top:30px; background-color:green"
                    >
                      <span
                        style="color:white;font-family: 'Ultra', serif; font-size:40px;"
                      >{{sectionNumber}}</span>
                    </span>
                  </span>
                </h5>
                <h2 align="center">Results</h2>
                <div class="divider"></div>
                <div class="col s12 m12 teal white-text">
                  <table class="highlight table-result centered">
                    <thead>
                      <tr>
                        <th># Question</th>
                        <th>Name</th>
                        <th>Points</th>
                        <th>Right Answer</th>
                        <th>Your Answer</th>
                        <th>Result</th>
                        <th>Points Gained</th>
                      </tr>
                    </thead>

                    <tbody v-for="question in questionsTest" v-bind:key="question.id">
                      <tr v-bind:class="question.result ? 'azul' : 'rojo'">
                        <td>{{question.questionId}}</td>
                        <td style="text-align:left">{{question.questionName}}</td>
                        <td>{{question.points}}</td>
                        <td>{{question.rightAnswer}}</td>
                        <td>{{question.studentAnswer}}</td>
                        <td v-bind:class="question.result ? 'azul' : 'rojo'">{{question.result}}</td>
                        <td>{{question.pointsGain}}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div class="col s6 m6">
                    <a class="waves-effect waves-orange btn" @click="nextQuestion(++q)">
                      <i class="material-icons right"></i>Try Again
                    </a>
                  </div>
                  <div class="col s6 m6">
                    <a class="waves-effect waves-red btn" @click="nextQuestion(++q)">
                      <i class="material-icons right"></i>Close
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import spinner from "@/assets/spinner.gif";
import db from "./firebaseInit";

export default {
  name: "Course",
  components: {},
  mounted() {
    var elem = document.querySelector(".carousel");
    // eslint-disable-next-line
    var t = new M.Carousel(elem, {
      indicators: true,
      autoplay: true
    });
  },
  data() {
    return {
      questions: [],

      hour: 0,
      minute: 0,
      second: 0,
      iconSection0: "",
      iconSection1: "",
      iconSection2: "",
      iconSection3: "",
      lessonProgress: "",
      questionsProgress: "",
      questionProgressStyle: "width:0%",
      start: true,
      section0: "",
      sectionI: "",
      sectionII: "",
      sectionIII: "",
      sectionIV: "",
      sectionV: "",
      sectionVI: "",
      sectionVII: "",
      sectionVIII: "",
      sectionIX: "",
      showConten: "",
      contenTitle: "",
      spinner: spinner,
      isLoading: false,

      folderOpen: false,
      iconFolder: "folder",

      /* interval var */
      i: 0,

      /*this sections is for the questions review */
      review: false,
      sectionNumber: "1",

      questionsTest: [
        {
          questionId: "1",
          questionName: "What organ is most impaired by alcohol?",
          answerA: "heart",
          answerB: "brain",
          answerC: "lungs",
          studentAnswer: "",
          result: false,
          rightAnswer: "brain",
          points: 1,
          pointsGain: 0
        },
        {
          questionId: "2",
          questionName: "_________ is the most widely used drug in America.",
          answerA: "marijuana",
          answerB: "alcohol",
          answerC: "ecstasy",
          studentAnswer: "",
          result: true,
          rightAnswer: "alcohol",
          points: 1,
          pointsGain: 0
        },
        {
          questionId: "3",
          questionName: "Cigarettes contain over __________ chemicals.",
          answerA: "400",
          answerB: "1,000",
          answerC: "4,000",
          studentAnswer: "",
          result: false,
          rightAnswer: "4,000",
          points: 1,
          pointsGain: 0
        },
        {
          questionId: "4",
          questionName:
            "Alcohol is a __________; thus, it ___________ your Central Nervous System.",
          answerA: "depressant / speeds up",
          answerB: "stimulant / speeds up",
          answerC: "depressant / slows down",
          studentAnswer: "",
          result: false,
          rightAnswer: "depressant / slows down",
          points: 1,
          pointsGain: 0
        },
        {
          questionId: "5",
          questionName:
            "Only the children of alcohol abusers are at risk of Fetal Alcohol Syndrome:",
          answerA: "true",
          answerB: "false",
          answerC: "",
          studentAnswer: "",
          result: false,
          rightAnswer: "false",
          points: 1,
          pointsGain: 0
        },
        {
          questionId: "6",
          questionName:
            "Cold showers, exercise, coffee or vomiting would speed up the elimination of alcohol.",
          answerA: "true",
          answerB: "false",
          answerC: "",
          studentAnswer: "",
          result: false,
          rightAnswer: "false",
          points: 1,
          pointsGain: 0
        },

        {
          questionId: "7",
          questionName:
            "The effects of Marijuana on the lungs are similar to those of cigarette smoking.",
          answerA: "true",
          answerB: "false",
          answerC: "",
          studentAnswer: "",
          result: false,
          rightAnswer: "true",
          points: 1,
          pointsGain: 0
        },

        {
          questionId: "8",
          questionName:
            "The most dangerous effect of alcohol is a raging hangover.",
          answerA: "true",
          answerB: "false",
          answerC: "",
          studentAnswer: "",
          result: false,
          rightAnswer: "true",
          points: 1,
          pointsGain: 0
        }
      ],

      questionNumber: "",
      questionName: "",
      answerA: "",
      answerB: "",
      answerC: "",
      answerI: false,
      q: 0,
      ps: 0,
      EndReview: false,

      /*Test Book.js  */
      book: book,

      /*This is the gallery of the carrousel */

      images: [
        {
          img:
            "https://images.pexels.com/photos/1089423/pexels-photo-1089423.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          link: "#",
          msj: "Image One"
        },
        {
          img:
            "https://images.pexels.com/photos/818563/pexels-photo-818563.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          link: "#",
          msj: "Image two"
        },
        {
          img:
            "https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          link: "#",
          msj: "Image Three"
        },
        {
          img:
            "https://images.pexels.com/photos/209594/pexels-photo-209594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          link: "#",
          msj: "Image Four"
        },
        {
          img:
            "https://images.pexels.com/photos/606506/pexels-photo-606506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          link: "#",
          msj: "Image Five"
        },
        {
          img:
            "https://images.pexels.com/photos/271171/pexels-photo-271171.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          link: "#",
          msj: "Image Six"
        },
        {
          img:
            "https://images.pexels.com/photos/2068664/pexels-photo-2068664.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          link: "#",
          msj: "Image Nine"
        },
        {
          img:
            "https://images.pexels.com/photos/1377393/pexels-photo-1377393.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          link: "#",
          msj: "Image Ten"
        }
      ],

      // Deactivate the UI Timer
      timerON: false
    };
  },
  methods: {
    onOpen0() {
      if (this.iconSection0 === "add") {
        this.contenTitle = "INTRODUCTION";
        this.isLoading = true;
        this.title = this.questions[0].title;
        // this.showConten = this.questions[0].review;
        this.iconSection0 = "remove";
        this.isLoading = false;
      } else {
        this.iconSection0 = "add";
        this.showConten = "";
        this.contenTitle = "";
        this.title = this.questions[0].title;
      }

      console.log("questions", this.questions);

      document.querySelector(".determinate").style.width = "30%";
    },
    onOpen1() {
      document.querySelector(".determinate").style.width = "60%";
      if (this.iconSection0 === "add") {
        this.contenTitle = "SECTION 1";
        this.isLoading = true;
        this.sectionI = this.questions[1].title;
        this.showConten = this.questions[1].sectionI;
        this.iconSection0 = "remove";
        this.isLoading = false;
      } else {
        this.iconSectionI = "add";
        this.showConten = "";
        this.contenTitle = "";
      }
    },
    onOpen2() {
      document.querySelector(".determinate").style.width = "70%";
      if (this.iconSection0 === "add") {
        this.contenTitle = "SECTION 2";
        this.isLoading = true;
        //this.sectionII = this.questions[2].title;
        this.showConten = this.questions[2].review;
        this.iconSection0 = "remove";
        this.isLoading = false;
      } else {
        this.iconSection0 = "add";
        this.showConten = "";
        this.contenTitle = "";
      }
    },
    onOpen3() {
      document.querySelector(".determinate").style.width = "90%";
      if (this.iconSection0 === "add") {
        this.contenTitle = "SECTION 3";
        //  this.isLoading = true;
        // this.sectionIII = this.questions[3].title;
        this.showConten = this.questions[3].review;
        this.iconSection0 = "remove";
        // this.isLoading = false;
      } else {
        this.iconSection0 = "add";
        this.showConten = "";
        this.contenTitle = "";
      }
    },

    openFolderFn(section) {
      this.folderOpen = !this.folderOpen;
      this.iconFolder = this.folderOpen ? "folder_open" : "folder";

      clearInterval(this.i);
      this.review = false;

      /*
      this.showConten = this.folderOpen
        ? "South Florida Safety Program"
        : this.questions[0].review;
       */

      switch (section) {
        case 0:
          this.showConten = this.questions[0].review;
          break;
        case 1:
          this.showConten = this.questions[1].sectionI;
          break;
        case 2:
          this.showConten = this.questions[0].sectionII;
          break;
        case 3:
          this.showConten = this.questions[0].sectionIII;
          break;
        case 4:
          this.showConten = this.questions[0].sectionIV;
          break;
        case 5:
          this.showConten = this.questions[0].sectionV;
          break;

        default:
          this.showConten = this.questions[0].review;
      }
    },

    openSections(section) {
      console.log(section);

      switch (section) {
        case 1:
          this.showConten = this.questions[0].sectionI;
          break;
        case 2:
          this.showConten = this.questions[0].sectionII;
          break;
        case 3:
          this.showConten = this.questions[0].sectionIII;
          break;
        case 4:
          this.showConten = this.questions[0].sectionIV;
          break;
        case 5:
          this.showConten = this.questions[0].sectionV;
          break;

        default:
          this.showConten = this.questions[0].review;
      }
      this.sectionTime(5);
    },

    openSectionI(section) {
      console.log(section);
      switch (section) {
        case 1:
          this.showConten = this.questions[1].sectionI;
          break;
        case 2:
          this.showConten = this.questions[1].sectionII;
          break;
        case 3:
          this.showConten = this.questions[1].sectionIII;
          break;
        case 4:
          this.showConten = this.questions[1].sectionIV;
          break;
        case 5:
          this.showConten = this.questions[1].sectionV;
          break;
        case 6:
          this.showConten = this.questions[1].sectionVI;
          break;
        case 7:
          this.showConten = this.questions[1].sectionVII;
          break;
        case 8:
          this.showConten = this.questions[1].sectionVIII;
          break;
        case 9:
          this.showConten = this.questions[1].sectionIX;
          break;
        case 10:
          /* Show the section */
          this.review = !this.review;
          this.start = false;
          break;

        default:
          this.showConten = this.questions[1].review;
      }
      this.sectionTime(60);
    },

    speak(texto) {
      console.log(texto);
      // voice section
      //Init SpeechSynth API
      const synth = window.speechSynthesis;
      // Get speak text
      const speakText = new SpeechSynthesisUtterance(texto);
      // Speak end
      speakText.onend = e => {
        console.log("Done speaking...");
      };
      //Speak error
      speakText.onerror = e => {
        console.error("Something went wrong");
      };
      //Speak
      synth.speak(speakText);
    },

    /*
    sectionTime(minutes) {
      let dt = new Date();

      clearInterval(this.i);

      dt.setMinutes(dt.getMinutes() + minutes);

      let deadLine = dt;

      this.i = setInterval(() => {
        let now = new Date().getTime();
        let t = deadLine - now;
        this.hour = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minute = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        this.second = Math.floor((t % (1000 * 60 * 60)) / 1000);

       // this.second = parseInt(this.second.toString().slice(0,2));
       // console.log('los segundos', this.second.toString().subStr(0,1));
       let secondTest = Math.floor(this.second/1000);
       console.log('Segundos',secondTest);
        //  t < 5 ? (this.start = true) : (this.start = false);

        if (t < 0) {
          clearInterval(this.i);
          this.start = false;
          this.hour = 0;
          this.minute = 0;
          this.second = 0;
        } else {
          this.start = true;
        }
      }, 1000);
    },
    */

    onTimer() {},

    nextQuestion(q) {
      //q++;
      if (q > 8) {
        this.EndReview = true;
        this.q = 0;
        this.speak("Nice Job");
        return;
      }

      this.questionNumber = this.questionsTest[q].questionId;
      this.questionName = this.questionsTest[q].questionName;
      this.answerA = this.questionsTest[q].answerA;
      this.answerB = this.questionsTest[q].answerB;
      this.answerC = this.questionsTest[q].answerC;
      this.questionsProgress = q + 1 + "/8";
      this.ps = (100 * q) / 8;
      this.questionProgressStyle = `width:${this.ps}%`;
    }
  },

  created() {
    this.questions = [];
    db.collection("questions")
      .orderBy("sectionId")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            sectionId: doc.data().sectionId,
            title: doc.data().title,
            review: doc.data().review,
            sectionI: doc.data().sectionI,
            sectionII: doc.data().sectionII,
            sectionIII: doc.data().sectionIII,
            sectionIV: doc.data().sectionIV,
            sectionV: doc.data().sectionV,
            sectionVI: doc.data().sectionVI,
            sectionVII: doc.data().sectionVII,
            sectionVIII: doc.data().sectionVIII,
            sectionIX: doc.data().sectionIX
          };
          this.questions.push(data);
        });
      });

    this.iconSection0 = "add";
    this.iconSection1 = "add";
    this.iconSection2 = "add";
    this.iconSection3 = "add";
    this.lessonProgress = "3/5";

    this.folderOpen = false;

    $(document).ready(function() {
      $(".carousel").carousel({
        padding: 50
      });
      autoplay();
      function autoplay() {
        $(".carousel").carousel("next");
        setTimeout(autoplay, 4500);
      }
      // Init Slider
      $(".slider").slider({
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
      });

      // Show sections
      $(".section").fadeIn();

      // Init Collapse to course
      $(".collapsible").collapsible();
      // Init Carrousel
    });

    //let questionTime = "april 21, 2019 23:30:00";
    //let deadLine = new Date(questionTime).getTime();

    const minutes = 0;

    let dt = new Date();
    dt.setMinutes(dt.getMinutes() + minutes);

    let deadLine = dt;

    /*

    this.i = setInterval(() => {
      let now = new Date().getTime();
      let t = deadLine - now;
      this.hour = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minute = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      this.second = Math.floor((t % (1000 * 60 * 60)) / 1000);

      console.log('The timer in created', this.second.toString().substring(0,2));

      //  t < 5 ? (this.start = true) : (this.start = false);

      if (t < 0) {
        clearInterval(this.i);
        this.start = false;
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
      } else {
        this.start = true;
      }
    }, 1000);

    */
    /* Review Sections */
    this.questionNumber = this.questionsTest[0].questionId;
    this.questionName = this.questionsTest[0].questionName;
    this.answerA = this.questionsTest[0].answerA;
    this.answerB = this.questionsTest[0].answerB;
    this.answerC = this.questionsTest[0].answerC;
    this.questionsProgress = "1/8";
    this.questionProgressStyle = "width:0%";
    this.ps = 0;
    this.EndReview = false;

    console.log("EL LIBRO ESTA EN EL COMPONENT", this.book);
    this.timerON = false;
  }
};
</script>

<style>
.course {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  background: whitesmoke;
  padding: 5px;
}
.timer {
  min-height: 15vh;
  max-height: 15vh;
  text-align: center;
  font-size: 20px;
  color: black;
}

h1 {
  color: green;
  font-weight: 50;
  font-size: 20px;
  margin: 40px 0px 20px;
}
#clockdiv {
  position: fixed;
  top: 0%;
  right: 50%;
  font-family: sans-serif;
  color: #fff;
  display: inline-block;
  font-weight: 50;
  text-align: center;
  font-size: 20px;
}
#clockdiv > div {
  padding: 10px;
  border-radius: 3px;
  background: black;
  display: inline-block;
}
#clockdiv div > span {
  padding: 15px;
  border-radius: 3px;
  background: white;
  display: inline-block;
  color: black;
}
.smalltext {
  padding-top: 5px;
  font-size: 16px;
}

.show-conten {
  min-width: 100%;
  max-width: 100%;
  min-height: auto;
  max-height: auto;
  padding: 15px;
  text-align: justify;
  margin: 15px;
  box-shadow: 4px 4px 4px black;
}

.card {
  min-width: 100%;
  max-width: 100%;
  min-height: auto;
  max-height: auto;
  height: 600px;
  background: transparent;
  color: black;
  overflow: scroll;
  padding: 25px;
}

/* Scrollbar styles */
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-track-x {
  /*box-shadow: inset 0 0 10px olivedrab;*/
  background: gold;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb-x {
  border-radius: 10px;
  background: yellowgreen;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb-x:hover {
  background: #7bac10;
}

img {
  border: 2px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
  margin: 5px;
  box-shadow: 4px 4px 4px black;
  transform: rotate(0deg);
}

img {
  float: right;
}
.the_font {
  font-size: 22px;
  font-family: "Oxygen", sans-serif;
}
li {
  margin-left: 25px;
}

table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 15px;
  margin: 5px;
}
th {
  background: black;
}
body,
td {
  background-color: white;
  color: black;
}

.size {
  min-width: 500px;
  max-width: 500px;
  min-height: 500px;
  max-height: 500px;
  left: 20px;
}

.row {
  padding-left: 5px;
  padding-right: 15px;
}

.nice-shot {
  box-shadow: 4px 4px 4px black;
  border-radius: 8px;
}
.nice-shot:hover {
  box-shadow: 4px 4px 4px gray;
  border-radius: 0px;
}
.table-result {
  background-color: white;
  color: black;
  border: 0px solid white;
  margin: 5px;
  overflow: scroll;
}
.table-result,
th {
  background-color: white;
  color: black;
  border: 1px solid black;
}

.azul {
  color: blue;
}
.rojo {
  color: red;
}
</style>