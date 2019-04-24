<template>
  <div class="seccion seccion-icons grey lighten-4 center">
    <div class="row">
      <div class="col s12 m4">
        <div class="card-panel">
          <h1 style="color:green">
            <i class="fas fa-cannabis"></i>
          </h1>
          <h4>Drugs</h4>
          <p>The use of drugs and their effects on the body</p>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="card-panel">
          <h1 style="color:red">
            <i class="fas fa-car-crash"></i>
          </h1>
          <h4>Driving</h4>
          <p>The use of drugs and their effects on driving</p>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="card-panel">
          <h1 style="color:blue">
            <i class="fas fa-car"></i>
          </h1>
          <h4>Responsible driving</h4>
          <p>Safety belts and car seats</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m4">
        <div class="card-panel detail">
          <ul style="list-style-type: circle">
            <li>What is a drug?</li>
            <li>Types of drugs and their effects</li>
            <li>Effects of alcohol consumption</li>
            <li>Alcohol: absorption, elimination, and addiction</li>
            <li>Tolerance and dependence</li>
          </ul>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="card-panel detail">
          <ul style="list-style-type: circle">
            <li>Blood Alcohol Concentration (BAC)</li>
            <li>How alcohol and drugs affect driving</li>
            <li>Signs of impaired driving</li>
          </ul>
        </div>
      </div>

      <div class="col s12 m4">
        <div class="card-panel detail">
          <ul style="list-style-type: circle">
            <li>Car insurance requirements in Florida</li>
            <li>Important traffic laws</li>
            <li>BAC tests</li>
            <li>Safety belts and car seats</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m4">
        <div class="card-panel video-youtube">
          <iframe
            width="484"
            height="150"
            src="https://www.youtube.com/embed/Tq7gehNE810"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p>Dangerous Effects of Drugs on the Human Body</p>
      </div>
      <div class="col s12 m4">
        <div class="card-panel video-youtube">
          <iframe
            width="1189"
            height="673"
            src="https://www.youtube.com/embed/bWLksTAnuFE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p>10 drugs not to take before driving</p>
      </div>

      <div class="col s12 m4">
        <div class="card-panel video-youtube">
          <iframe
            width="1189"
            height="669"
            src="https://www.youtube.com/embed/sivdDB756Rc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p>Driving Safety</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconBox",
  components: {}
};
</script>

<style scoped>
iframe {
  max-width: 100%;
  height: auto;
}
ul {
  list-style-type: circle;
}

ul li {
  margin: 15px;
  text-align: left;
  list-style-type: square;

  display: block;
}

.detail {
  min-height: 30vh;
  max-height: 30vh;
}

.video-youtube iframe {
  max-height: 50vh;
  min-height: 50vh;
}
</style>