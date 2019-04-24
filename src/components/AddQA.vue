<template>
  <div id="add-question">
    <h3>New Question and Answers</h3>
    <div class="row">
      <form @submit.prevent="saveQuestion" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="questionId" required>
            <label>Question ID#</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="questionName" required>
            <label>Question Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="answerA" required>
            <label>A</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="answerB" required>
            <label>B</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="answerC" required>
            <label>C</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="rightAnswer" required>
            <label>Set the right Answer</label>
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
  name: "add-question",
  data() {
    return {
      questionId: null,
      questionName: null,
      answerA: null,
      answerB: null,
      answerC: null,
      rightAnswer: null
    };
  },
  methods: {
    saveQuestion() {
      db.collection(`questions/${this.$route.params.question_id}/questions`)
        .add({
          questionId: this.questionId,
          questionName: this.questionName,
          answerA: this.answerA,
          answerB: this.answerB,
          answerC: this.answerC,
          rightAnswer: this.rightAnswer
        })
        .then(docRef => this.$router.push("/"))
        .catch(error => console.log(err));
    }
  }
};
</script>