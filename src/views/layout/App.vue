<template>
  <div class="app">
    <BodyTop />
    <BodyMain/>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BodyTop from "./BodyTop.vue";
import BodyMain from "./BodyMain.vue";
import Footer from "./Footer.vue";
export default {
  name: "App",
  data() {
    return {
      userName: ""
    };
  },
  computed: mapState(["system"]),
  methods: {},
  components: { Footer, BodyTop, BodyMain }
};
</script>
<style lang="scss">
@import "../../assets/css/variables.scss";
.app {
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-image: url("../../assets/images/home.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
