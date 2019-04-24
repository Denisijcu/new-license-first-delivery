<template>
  <div id="new-question">
    <h3>New Sections</h3>
    <div class="row">
      <form @submit.prevent="saveQuestion" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="sectionId" required>
            <label>Section ID#</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="title" required>
            <label>Title</label>
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

        <button type="submit" class="btn">Submit</button>
        <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "new-question",
  data() {
    return {
      sectionId: null,
      title: null,
      review: null,
      sectionI: null,
      sectionII: null,
      sectionIII: null,
      sectionIV: null,
      sectionV: null
    };
  },
  methods: {
    saveQuestion() {
      db.collection("questions")
        .add({
          sectionId: this.sectionId,
          title: this.title,
          review: this.review,
          sectionI: this.sectionI,
          sectionII: this.sectionII,
          sectionIII: this.sectionIII,
          sectionIV: this.sectionIV,
          sectionV: this.sectionV
        })
        .then(docRef => this.$router.push("/"))

        .catch(error => console.log(err));
    }
  }
};
</script>