<template>
  <div>
    <div class="seccion seccion-icons white lighten-4 center" v-if="!compD">
      <div class="row">
        <br>
        <div class="col s12 m2"></div>
        <div class="col s11 m6 a-left">
          <h2>Payment</h2>
          <input type="radio" id="creditcard" value="CreditCard" v-model="optionPament">
          <label for="creditcard" style="color: black; display:none">
            Credit Card
            <span>
              <img
                src="https://teen-idrivesafely.netdna-ssl.com/images/signuprevamp/cards-img.png"
                style="vertical-align:middle;margin-left:10px;width:160px"
              >
            </span>
          </label>
          <br>

          <input type="radio" id="stripe" value="Stripe" v-model="optionPament">
          <label for="stripe" style="color: black">3rd party (Stripe)</label>
        </div>
        <div class="col s8 m1"></div>
        <div class="col s4 m3 fl-approved"></div>
      </div>

      <div class="row">
        <div class="col s12 m2"></div>
        <div class="col s12 m6 a-justify">
          <p
            style="font-size:11px;display:none"
          >After you enter your payment information, your course is ready to begin! And don't worry - we don't save your credit card number. Your information is secure.</p>

          <br>

          <p style="color: black;display:none">Name on Card:</p>
          <span>
            <input
              v-model="nameOnCard"
              placeholder="Enter Name on Card"
              style="min-width: 300px; max-width:300px;display:none"
            >
          </span>
          <p style="color: black;display:none">Card Number:</p>
          <span>
            <input
              v-model="cardNomber"
              placeholder="Enter Card Number"
              maxlength="16"
              style="min-width: 300px; max-width:300px;display:none"
            >
            <span
              style="margin-left: 15px;font-size: 10px;display:none"
            >All Major Credit/Debit Cards Accepted</span>
          </span>

          <table class="tb1">
            <tbody>
              <td>Expiration Date:</td>
              <td>
                <select
                  class="browser-default"
                  v-model="expirationMonth"
                  v-on:click="onSelectMonth"
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
              </td>
              <td>
                <select class="browser-default" v-model="expirationYear" v-on:click="onSelectYear">
                  <option value disabled selected>Year</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                  <option value="2031">2031</option>
                </select>
              </td>
            </tbody>
          </table>
          <br>

          <table class="tb2">
            <tbody>
              <tr style="display:none">
                <td class="col s2">Sec.Code:</td>
                <td class="col s10">
                  <input
                    v-model="securityCode"
                    maxlength="3"
                    placeholder="Sec Code"
                    style="font-size: 14px;min-width: 50px; max-width: 50px;"
                  >
                  <span style="margin-left:8px;">
                    <em style="color: blue; cursor:pointer;font-size:12px;" v-on:click="onCVC">
                      What's this
                      <i class="fas fa-question"></i>
                    </em>
                    <span
                      style="margin-left: 5px; font-style:italic;font-size:9px"
                    >Also known as "CVC" or "CVV"</span>
                  </span>
                  <br>
                  <div class="cvc" v-show="cvc"></div>
                </td>
              </tr>
              <tr>
                <td class="col s1 m2">Email</td>
                <td class="col s10 m8" style="overflow:hidden;">
                  <input
                    type="email"
                    v-model="profile.email3"
                    placeholder="Email"
                    style="padding-left: 15px; min-width: 250px; max-width:250px"
                    required
                  >
                  <br>

                  <span style="overflow: hidden;max-width:300px; min-width:300px; font-size: 12px;">
                    <em>
                      (Login info and purchase receipt sent to this address)
                      <span style="margin-left:3px">
                        <i class="fas fa-exclamation-circle" v-on:click="onMore"></i>
                      </span>
                      <span>
                        <br>We hate spam as much as you do.
                        <a href="#">Read privacy policy</a>
                      </span>
                    </em>
                  </span>
                </td>
                <td class="col s12">
                  <div class="toolTip-wrap" v-show="more" v-on:click="onMore">
                    <div class="toolTip">
                      We will only use the email address you provide us here to send you
                      notifications and information relevant to the product you are purchasing. Note that this does not apply if you
                      use the same email address to voluntarily join a campaign elsewhere on our site.
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <tr>
            <div id="example-3">
              <div
                style="background-color: white; border: 1px solid gray; margin: 10px; padding: 15px; border-radius:8px;"
              >
                <input type="checkbox" id="option1" value="Option1" v-model="profile.upgrade">
                <label for="option1" style="color:black; font-size:11px;">
                  Upgrade your 50-Question DMV Practice Test to 100 Questions
                  <span style="color:green;">Now Only $6.99</span>
                </label>
                <p style="font-size:11px;">
                  Be fully prepared and pass your permit exam the very first time with our 100-Question Practice Test.
                  Study questions and answers one at a time or create realistic test examples. Don't risk failing.
                </p>
              </div>
              <div style="margin: 10px; padding:15px">
                <input type="checkbox" id="option2" value="Option2" v-model="profile.term">
                <label for="option2" style="color:black;font-size:11px;">
                  I have read and I accept the terms and conditions.
                  <br>
                  <span>
                    <a href="#">View / Print Terms and Conditions</a>
                  </span>
                </label>
              </div>
              <br>
            </div>
          </tr>

          <tr>
            <br>
            <a
              @click="onValidate"
              class="waves-effect blue waves-light btn"
              style="padding-top:0px;"
            >
              <i class="material-icons right">chevron_right</i>Continue
            </a>
            <br>
            <br>
          </tr>
        </div>

        <div class="col s12 m4 white-text">
          <div
            class="green"
            style="padding-left: 15px;border-radius: 4px; box-shadow: 10px 5px 10px gray; text-align:left"
          >
            <h3 style="text-shadow: 4px 4px 4px orange; text-align:center;">Order Summary</h3>

            <div class="divider"></div>

            <table>
              <tbody>
                <tr>
                  <td>Florida Drivers Ed Course</td>
                  <td>$24.95</td>
                </tr>
                <tr>
                  <td>Special Discount</td>
                  <td style="color:red;">-$7.95</td>
                </tr>
                <tr>
                  <td style="color: yellow;">Course Fee</td>
                  <td style="color:yellow;">$17.00</td>
                </tr>

                <tr>
                  <td>
                    State Certificate & Handling Fee
                    <br>
                    <span>
                      <a style="color:blue" href>What is this?</a>
                    </span>
                  </td>
                  <td>$8.00</td>
                </tr>

                <tr>
                  <td>
                    Email Proof of Completion
                    <br>
                    <span>
                      <a style="color:blue" href>Remove</a>
                    </span>
                  </td>
                  <td>$8.95</td>
                </tr>

                <tr>
                  <td>50 DMV Practice Questions</td>
                  <td>FREE</td>
                </tr>

                <tr>
                  <td>Audio</td>
                  <td>$4.99</td>
                </tr>

                <tr style="background-color: white; color: black; box-shadow: 4px 4px 4px black;">
                  <td>
                    <i class="fas fa-lock"></i>
                    <span style="padding-left:10px;">Total</span>
                  </td>
                  <td>$ 38.94</td>
                </tr>

                <br>
              </tbody>
            </table>
          </div>

          <br>
          <br>
        </div>
      </div>
    </div>

    <div v-if="compD">
      <D v-bind:profile="profile"/>
    </div>
  </div>
</template>    

<script>
import D from "./D.vue";

export default {
  props: ["profile"],
  name: "C",
  components: {
    D
  },
  data() {
    return {
      optionPament: "Stripe",
      nameOnCard: "",
      cardNomber: "",
      expirationMonth: "",
      expirationYear: "",
      securityCode: "",
      email: "",
      cvc: false,
      more: false,
      option1: false,
      option2: false,
      compD: false
    };
  },
  methods: {
    onSelectMonth() {
      console.log("click select month");
    },
    onSelectYear() {
      console.log("click select year");
    },
    onCVC() {
      this.cvc = !this.cvc;
    },
    onMore() {
      this.more = !this.more;
    },
    onValidate() {
      this.compD = true;
    }
  }
};
</script>

<style scoped>
h2 {
  color: #33383b !important;
  font-size: 22px !important;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: "SohoStd-Medium", sans-serif !important;
  line-height: 30px;
  text-align: left;
}
.a-left {
  margin: 0;
  padding: 5;
  text-align: left;
}

.a-justify {
  margin: 0;
  padding: 5;
  text-align: justify;
}

label,
input {
  font-weight: bold !important;
}

.fl-approved {
  background-color: white;
  background-image: url("../assets/fl-seal-wp.gif");
  background-size: cover;
  max-width: 10vw;
  min-width: 10vw;
  max-height: 10vw;
  min-height: 10vw;
}

p {
  margin-bottom: 0px;
  font-size: 14px;
}

input {
  border: 1px solid gray;
  padding: 0px;
  padding-left: 10px;
  padding-bottom: 0;
  padding-top: 0;
  border-radius: 5px;
  max-width: auto;
}

input[type="email"] {
  border: 1px solid gray;
  padding: 0px;
  padding-left: 10px;
  padding-bottom: 0;
  padding-top: 0;
  border-radius: 5px;
  max-width: auto;
}

.cvc {
  background-color: white;
  background-image: url("../assets/cvc.gif");
  background-size: cover;
  max-width: 20vw;
  min-width: 20vw;
  max-height: 10vw;
  min-height: 10vw;
}
.toolTip {
  background: #333740;
  width: 235px;
  padding: 8px;
  font-size: 11px;
  color: #fff;
  border-radius: 4px;
  position: absolute;
  top: -105px;
  font-family: Arial;
  left: -116px;
  display: auto;
  line-height: 1.3;
}

.toolTip-wrap {
  float: right;
  position: relative;
  top: 8px;
  right: 172px;
}

.tb1 {
  width: 300px;
  border-top: 1px solid white;
  display: none;
}
select {
  border: 1px solid gray;
}

.tb2 {
  width: 500px;
}

@media (max-width: 600px) {
  h2 {
    color: #33383b !important;
    font-size: 22px !important;
    font-weight: bold;
    margin-bottom: 20px;
    font-family: "SohoStd-Medium", sans-serif !important;
    line-height: 30px;
    text-align: left;
  }
  .a-left {
    margin: 0;
    padding: 5;
    text-align: left;
  }

  .a-justify {
    margin: 0;
    padding: 5;
    text-align: justify;
  }

  label,
  input {
    font-weight: bold !important;
  }

  .fl-approved {
    background-color: white;
    background-image: url("../assets/fl-seal-wp.gif");
    background-size: cover;
    max-width: 10vw;
    min-width: 10vw;
    max-height: 10vw;
    min-height: 10vw;
  }

  p {
    margin-bottom: 0px;
    font-size: 14px;
  }

  input {
    border: 1px solid gray;
    padding: 0px;
    padding-left: 10px;
    padding-bottom: 0;
    padding-top: 0;
    border-radius: 5px;
    max-width: auto;
  }

  input[type="email"] {
    border: 1px solid gray;
    padding: 0px;
    padding-left: 10px;
    padding-bottom: 0;
    padding-top: 0;
    border-radius: 5px;
    max-width: auto;
  }

  .cvc {
    background-color: white;
    background-image: url("../assets/cvc.gif");
    background-size: cover;
    max-width: 20vw;
    min-width: 20vw;
    max-height: 10vw;
    min-height: 10vw;
  }
  .toolTip {
    background: #333740;
    width: 235px;
    padding: 8px;
    font-size: 11px;
    color: #fff;
    border-radius: 4px;
    position: absolute;
    top: -105px;
    font-family: Arial;
    left: -116px;
    display: auto;
    line-height: 1.3;
  }

  .toolTip-wrap {
    float: right;
    position: relative;
    top: 8px;
    right: 172px;
  }

  .tb1 {
    width: 300px;
    border-top: 1px solid white;
  }
  select {
    border: 1px solid gray;
  }

  .tb2 {
    width: 500px;
  }
}
</style>