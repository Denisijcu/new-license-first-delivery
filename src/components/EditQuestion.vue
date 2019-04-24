<template>
  <div id="edit-question">
    <h3>Edit Sections</h3>
    <div class="row">
      <form @submit.prevent="updateQuestion" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input disabled type="text" v-model="sectionId" required>
            <label class="active">Section ID#</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="title" required>
            <label class="active">Title</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <textarea id="review" v-model="review" class="materialize-textarea"></textarea>
            <label for="review">Review</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <textarea id="sectionI" v-model="sectionI" class="materialize-textarea"></textarea>
            <label for="sectionI">Section I</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="sectionII" v-model="sectionII" class="materialize-textarea"></textarea>
            <label for="sectionII">Section II</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="sectionIII" v-model="sectionIII" class="materialize-textarea"></textarea>
            <label for="sectionIII">Section III</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="sectionIV" v-model="sectionIV" class="materialize-textarea"></textarea>
            <label for="sectionIV">SectionIV</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="sectionV" v-model="sectionV" class="materialize-textarea"></textarea>
            <label for="sectionV">SectionV</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="sectionVI" v-model="sectionVI" class="materialize-textarea"></textarea>
            <label for="sectionVI">SectionVI</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="sectionVII" v-model="sectionVII" class="materialize-textarea"></textarea>
            <label for="sectionVII">SectionVII</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="sectionVIII" v-model="sectionVIII" class="materialize-textarea"></textarea>
            <label for="sectionVIII">SectionVIII</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="sectionIX" v-model="sectionIX" class="materialize-textarea"></textarea>
            <label for="sectionIX">SectionIX</label>
          </div>
        </div>

        <button type="submit" class="btn">Submit</button>
        <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "edit-question",
  data() {
    return {
      sectionId: null,
      title: null,
      review: null,
      sectionI: null,
      sectionII: null,
      sectionIII: null,
      sectionIV: null,
      sectionV: null,
      sectionVI: null,
      sectionVII: null,
      sectionVIII: null,
      sectionIX: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("questions")
      .where("sectionId", "==", to.params.question_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.sectionId = doc.data().sectionId;
            vm.title = doc.data().title;
            vm.review = doc.data().review;
            vm.sectionI = doc.data().sectionI;
            vm.sectionII = doc.data().sectionII;
            vm.sectionIII = doc.data().sectionIII;
            vm.sectionIV = doc.data().sectionIV;
            vm.sectionV = doc.data().sectionV;
            vm.sectionVI = doc.data().sectionVI;
            vm.sectionVII = doc.data().sectionVII;
            vm.sectionVIII = doc.data().sectionVIII;
            vm.sectionIX = doc.data().sectionIX;
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db.collection("questions")
        .where("sectionId", "==", this.$route.params.question_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.sectionId = doc.data().sectionId;
            this.title = doc.data().title;
            this.review = doc.data().review;
            this.sectionI = doc.data().sectionI;
            this.sectionII = doc.data().sectionII;
            this.sectionIII = doc.data().sectionIII;
            this.sectionIV = doc.data().sectionIV;
            this.sectionV = doc.data().sectionV;
            this.sectionVI = doc.data().sectionVI;
            this.sectionVII = doc.data().sectionVII;
            this.sectionVIII = doc.data().sectionVIII;
            this.sectionIX = doc.data().sectionIX;
          });
        });
    },
    updateQuestion() {
      db.collection("questions")
        .where("sectionId", "==", this.$route.params.question_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                sectionId: this.sectionId,
                title: this.title,
                review: this.review,
                sectionI: this.sectionI,
                sectionII: this.sectionII,
                sectionIII: this.sectionIII,
                sectionIV: this.sectionIV,
                sectionV: this.sectionV,
                sectionVI: this.sectionVI,
                sectionVII: this.sectionVII,
                sectionVIII: this.sectionVIII,
                sectionIX: this.sectionIX
              })
              .then(() => {
                this.$router.push({
                  name: "view-question",
                  params: { question_id: this.sectionId }
                });
              });
          });
        });
    }
  }
};
</script>