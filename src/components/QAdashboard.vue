<template>
  <div id="qadashboard">
    <h2>Questions and Answers</h2>
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Questions</h4>
      </li>
      <li v-for="question in questions" v-bind:key="question.id" class="collection-item">
        <div class="chip">{{question.questionId}}</div>
        {{question.questionName}} - {{question.rightAnswer}}
        <button
          @click="deleteQuestion(question.questionId)"
          class="secondary-content btn red"
        >
          <i class="fa fa-trash"></i>
        </button>
        <router-link
          class="secondary-content left"
          v-bind:to="{name: 'edit-qaquestion', params: {question_id: questionId, questionId: question.questionId}}"
        >
          <i class="fa fa-eye"></i>
        </router-link>
      </li>
    </ul>

    <div class="fixed-action-btn">
      <router-link
        v-bind:to="{name: 'add-question', params: {question_id: questionId}}"
        class="btn-floating btn-large red"
      >
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "qadashboard",
  data() {
    return {
      questions: [],
      questionId: null
    };
  },
  created() {
    this.questionId = this.$route.params.question_id;
    db.collection(`questions/${this.$route.params.question_id}/questions`)
      .orderBy("questionId")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            questionId: doc.data().questionId,
            questionName: doc.data().questionName,
            rightAnswer: doc.data().rightAnswer
          };
          this.questions.push(data);
        });
      });
  },

  methods: {
    deleteQuestion(id) {
      console.log("clicke", id);
      if (confirm("Are you sure")) {
        db.collection(`questions/${this.questionId}/questions`)
          .where("questionId", "==", id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push("/");
            });
          });
      }
    }
  }
};
</script>

<style scoped>
.left {
  padding-left: 5px;
}
</style>