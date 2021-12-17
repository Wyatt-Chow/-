<template>
  <div class="sidebar-content">
    <div class="header-title">
      <img src="../../assets/images/czt.png" alt="">
      <span>长株潭商贸信息物流平台</span>
    </div>
    <div class="sidebar-menu">
      <el-menu
        router
        mode="horizontal"
        :default-active="$route.path"
        background-color="transparent"
      >
        <el-menu-item index="home">首页</el-menu-item>
        <el-menu-item index="logisticTransport">物流运输</el-menu-item>
        <el-menu-item index="publicInformation">公共信息服务</el-menu-item>
        <el-menu-item index="logisticsBusiness">物流商务服务</el-menu-item>
        <el-menu-item index="e-government">电子政务</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Sidebar",
  data() {
    return {};
  },
  methods: {},
  computed: { ...mapState(["system"]), ...mapGetters(["displayMenu"]) }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/variables.scss";
.sidebar-content {
  display: flex;
  justify-content: space-between;
  background-color: rgba(128, 128, 126, 0.7);
  .header-title{
    display: flex;
    img{
      width: 50px;
      height: 60px;
      margin: 0 10px;
    }
      span{
        line-height: 61px;
        color: white;
        font-size: 20px;
      }
  }
  .sidebar-menu {
    .el-menu{
      background-color: transparent;
    }
    .el-menu--horizontal > .el-menu-item{
      color: white;
    }
  }
}
</style>
