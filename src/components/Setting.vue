<template>
  <div>
    <div class="divider"></div>
    <div class="row #558b2f light-green darken-4 scale-transition row-grad">
      <div class="col s12 m12">
        <br>
        <div>
          <div class="row">
            <!-- Options buttons -->
            <p>
              <span v-on:click="onA" class="show-a">
                <span class="number-circle">1</span> Eligibility
              </span>
              <span v-on:click="onB" class="show-b">
                <span class="number-circle">2</span> Options
              </span>
              <span v-on:click="onC" class="show-c">
                <span class="number-circle">3</span> Payment
              </span>
              <span v-on:click="onD" class="show-d">
                <span class="number-circle">4</span> Confirmation
              </span>
            </p>
          </div>
          <div class="divider"></div>
          <div class="row scale-transition scale-in">
            <div v-show="showA" class="sec-a">
              <A v-bind:profile="profile"/>
            </div>

            <div v-show="showB" class="sec-b">
              <B/>
            </div>
            <div v-show="showC" class="sec-c">
              <C/>
            </div>
            <div v-show="showD" class="sec-d col s12 m12">
              <D/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import A from "./A.vue";
import B from "./B.vue";
import C from "./C.vue";
import D from "./D.vue";

export default {
  name: "Setting",
  props: ["profile"],
  components: {
    A,
    B,
    C,
    D
  },
  data() {
    return {
      email: "",
      password: "",
      showA: true,
      showB: false,
      showC: false,
      showD: false,

      visible: true
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            //  this.$router.replace('home')
            this.$router.push({ name: "home" });
            alert("New Account was created succesfully");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    },

    onA: function() {
      this.onClear();
      console.log("click A");
      this.showA = true;
    },
    onB: function() {
      this.onClear();
      console.log("click B");
      this.showB = true;
    },
    onC: function() {
      this.onClear();
      console.log("click C");
      this.showC = true;
    },

    onD: function() {
      this.onClear();
      console.log("click D");
      this.showD = true;
    },

    onClear: function() {
      this.showA = false;
      this.showB = false;
      this.showC = false;
      this.showD = false;
    }
  }
};
</script>

<style scoped>
.show-a,
.show-b,
.show-c,
.show-d {
  cursor: pointer;
}
.show-a:hover {
  box-shadow: 4px 4px 4px black;
}
.show-b:hover {
  box-shadow: 4px 4px 4px black;
}
.show-c:hover {
  box-shadow: 4px 4px 4px black;
}
.show-d:hover {
  box-shadow: 4px 4px 4px black;
}
.show-a,
.show-b,
.show-c,
.show-d {
  color: yellow;
  font-size: 14;
  font-weight: bolder;
  border-radius: 2px;
  margin: 4px;
  padding: 10px;
  min-width: 200px;
}
.show-a {
  background-color: white;
  background-image: url("");
  background-size: cover;
  color: black;
}
.show-b {
  background-color: orangered;
  background-image: url("");
  background-size: cover;
  color: white;
}
.show-c {
  background-color: yellow;
  background-image: url("");
  color: black;
  background-size: cover;
}
.show-d {
  background-color: white;
  background-image: url("");
  background-size: cover;
  color: black;
}

.number-circle {
  color: black;

  text-align: center;
  background-color: transparent;
  margin-right: 5px;
}

@keyframes semaforo {
  from {
    background-color: red;
    color: white;
  }
  to {
    background-color: transparent;
    color: black;
  }
}

@media (max-width: 600px) {
  .show-a,
  .show-b,
  .show-c,
  .show-d {
    cursor: pointer;
  }
  .show-a:hover {
    box-shadow: 4px 4px 4px black;
  }
  .show-b:hover {
    box-shadow: 4px 4px 4px black;
  }
  .show-c:hover {
    box-shadow: 4px 4px 4px black;
  }
  .show-d:hover {
    box-shadow: 4px 4px 4px black;
  }
  .show-a,
  .show-b,
  .show-c,
  .show-d {
    color: yellow;
    font-size: 10px;
    border-radius: 2px;
    margin: 2px;
    padding: 4px;
    min-width: 50px;
  }
  .show-a {
    background-color: white;
    background-image: url("");
    background-size: cover;
    color: black;
  }
  .show-b {
    background-color: orangered;
    background-image: url("");
    background-size: cover;
    color: white;
  }
  .show-c {
    background-color: yellow;
    background-image: url("");
    color: black;
    background-size: cover;
  }
  .show-d {
    background-color: white;
    background-image: url("");
    background-size: cover;
    color: black;
  }

  .number-circle {
    color: black;
    text-align: center;
    background-color: transparent;
    margin-right: 5px;
  }
}
</style>