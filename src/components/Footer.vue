    <template>
  <div id="Footer">
    <footer class="section black white-text center">
      <p>South Florida Safety Program Copyright &copy;2019</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {
    goHome() {
      console.log("clicked ");
      this.$router.go({ path: this.$router.path });
      this.$router.push("/about");
    }
  }
};
</script>
    