<template>
  <div class="header-top">
    <div class="body-top">
      <div class="body-top-btn" @click="hiddenSidebar">
        <div class="contact-way">
          <span>客服服务热线</span>
          <i class="el-icon-phone" style="margin-right: 5px; margin-left: 5px"></i>
          <span>888—XXX</span>
        </div>
        <div class="login">
          <span>登录</span>
          <span class="login-s">注册</span>
        </div>
      </div>
      <div class="right">
        <el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
      </div>
    </div>
    <Sidebar />
  </div>

</template>

<script>
import { mapState } from "vuex";
import Menu from "@/menu/index";
import Sidebar from "./Sidebar.vue";
export default {
  name: "BodyTop",
  data() {
    return {
      input: '',
      menu: Menu,
      userName: "Admin"
    };
  },
  methods: {
    hiddenSidebar() {
      this.$store.commit("HIDE_SIDEBAR_TOGGLE");
    },

    logout() {}
  },
  components: {Sidebar},
  computed: mapState(["system"])
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/variables.scss";
.header-top{
    height: 111px;
  .body-top {
    width: 100%;
    display: flex;
    height: 50px;
    background-color: rgba(128, 128, 126, 0.7);
    z-index: 10;
    border-bottom: 2px solid #c0c4cc;
    .body-top-btn {
      overflow: hidden;
      height: $--top-height;
      display: flex;
      text-align: center;
      line-height: $--top-height;
      cursor: pointer;
      padding: 0 14px;
      color: #fff;
      .login{
        margin-left: 10px;
        .login-s {
          &::before {
            content: '';
            display: inline-block;
            width: 1px;
            height: 16px;
            background-color: #c3c3c3;
            margin: 0 10px;
          }
        }
      }
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      vertical-align: middle;
      .el-input{
        margin-top: 7.5px;
        width: 300px;
        margin-right: 50px;
      }
      ::v-deep .el-input__inner{
        height: 35px;
        border-radius: 18px;
      }
      /deep/ .el-input__suffix{
        margin: 0 10px;
      }
    }
  }
}


</style>
