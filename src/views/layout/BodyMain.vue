<template>
  <div class="body-main">
    <div class="content">
      <div class="content-view">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BodyMain",
  data() {
    return {};
  },
  methods: {},
  computed: mapState(["system"]),
};
</script>
<style lang="scss">
@import "../../assets/css/variables.scss";
.body-main {
  width: 100%;
  position: absolute;
  left: 0;
  top: 111px;
  bottom: 50px;
  .content {
    .content-view {
      padding: 6px;
    }
  }
}
</style>
