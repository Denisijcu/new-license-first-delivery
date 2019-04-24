<template>
  <div id="edit-question">
    <h3>Edit Question and Answers</h3>
    <div class="row">
      <form @submit.prevent="updateQuestion" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input disabled type="text" v-model="questionId" required>
            <label class="active">Question ID#</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="questionName" required>
            <label class="active">Question Name</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="answerA" required>
            <label class="active">A</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="answerB" required>
            <label class="active">B</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="answerC" required>
            <label class="active">C</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="rightAnswer" required>
            <label class="active">Set right Answer</label>
          </div>
        </div>

        <button type="submit" class="btn">Submit</button>

        <router-link
          v-bind:to="{name: 'qadashboard',params: {sectionId:question_id}}"
          class="btn grey"
        >Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "qaquestion",
  data() {
    return {
      questionId: null,
      title: null,
      duration: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection(`questions/${to.params.question_id}/questions`)
      .where("questionId", "==", to.params.questionId)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.questionId = doc.data().questionId;
            vm.questionName = doc.data().questionName;
            vm.answerA = doc.data().answerA;
            vm.answerB = doc.data().answerB;
            vm.answerC = doc.data().answerC;
            vm.rightAnswer = doc.data().rightAnswer;
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db.collection(`questions/${to.params.question_id}/questions`)
        .where("questionId", "==", to.params.questionId)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log("Nada", doc.data());

            this.questionId = doc.data().questionId;
            this.questionName = doc.data().questionName;
            this.answerA = doc.data().answerA;
            this.answerB = doc.data().answerB;
            this.answerC = doc.data().answerC;
            this.rightAnswer = doc.data().rightAnswer;
          });
        });
    },
    updateQuestion() {
      db.collection(`questions/${this.$route.params.question_id}/questions`)
        .where("questionId", "==", this.$route.params.questionId)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                questionId: this.questionId,
                questionName: this.questionName,
                answerA: this.answerA,
                answerB: this.answerB,
                answerC: this.answerC,
                rightAnswer: this.rightAnswer
              })
              .then(() => {
                this.$router.push({
                  name: "qadashboard"
                });
              });
          });
        });
    }
  }
};
</script>