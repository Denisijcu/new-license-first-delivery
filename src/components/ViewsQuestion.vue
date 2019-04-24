<template>
  <div id="view-question">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{sectionId}}</h4>
      </li>
      <li class="collection-item">Title: {{title}}</li>
      <li class="collection-item">Review: {{review}}</li>
    </ul>
    <router-link to="/" class="btn grey">Back</router-link>
    <button @click="deleteQuestion" class="btn red">Delete</button>
    <router-link
      v-bind:to="{name: 'qadashboard',params: {sectionId:question_id}}"
      class="btn green"
    >Add Questions and Answers</router-link>

    <div class="fixed-action-btn">
      <router-link
        v-bind:to="{name: 'edit-question', params: {sectionId: question_id}}"
        class="btn-floating btn-large red"
      >
        <i class="material-icons">mode_edit</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "view-question",
  data() {
    return {
      sectionId: null,
      title: null,
      review: null
    };
  },
  beforeRouteEnter(to, from, next) {
    //this.sectionId = to.params.question_id;
    db.collection("questions")
      .where("sectionId", "==", to.params.question_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.sectionId = doc.data().sectionId;
            vm.title = doc.data().title;
            vm.review = doc.data().review;
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
          });
        });
    },
    deleteQuestion() {
      if (confirm("Are you sure")) {
        db.collection("questions")
          .where("sectionId", "==", this.$route.params.question_id)
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

 