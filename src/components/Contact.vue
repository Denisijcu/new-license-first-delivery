<template>
  <!-- Section: Contact-->

  <section id="contact" class="section section-contact scrollspy">
    <div>
      <div class="row">
        <div class="col s12 m6">
          <div class="card-panel green white-text center">
            <i class="material-icons medium">email</i>
            <h5>Contact</h5>
            <p>
              <span style="color: yellow; font-size:24px">South Florida Safety Program</span>
              <br>
              <span style="color:black; font-size:18px">
                <i class="material-icons prefix white-text">phone</i> 954-865-9627
              </span>
              <br>
              <span style="color:blue;">
                <i class="material-icons prefix white-text">email</i> mynewlicense@goDaddy.com
              </span>
            </p>
          </div>

          <ul class="collection with header">
            <div class>
              <li class="collection-header">
                <h5></h5>
              </li>
              <li class="colletion-item"></li>
              <li class="colletion-item"></li>
              <li class="colletion-item"></li>
              <li class="colletion-item"></li>
              <li class="colletion-item"></li>
            </div>
          </ul>
        </div>
        <div class="col s12 m6">
          <div class="card-panel grey lighten-3">
            <h5>Please fill this form bellow</h5>

            <form id="form" action>
              <div class="input-field">
                <input type="text" placeholder="Name" id="name" value>
                <label for="name" id="name"></label>
              </div>
              <div class="input-field">
                <input type="email" placeholder="Email" id="email">
                <label for="email"></label>
              </div>
              <div class="input-field">
                <input type="text" placeholder="Phone Number" id="phone">
                <label for="phone"></label>
              </div>

              <div class="input-field">
                <textarea placeholder="Enter Message " id="message"></textarea>
                <label for="message"></label>
              </div>

              <input type="submit" value="Submit" class="btn green" id="btn">
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  components: {}
};
</script>

<style scoped>
.header {
  background-color: white;
  background-image: url("../assets/niceview.jpg");
  background-size: cover;
  min-height: 50vh;
  max-height: 50vh;
}
</style>