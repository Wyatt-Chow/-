<template>
  <div class="footer">
      <div class="footer-top">
        <span>服务条款</span>
        <span class="login-s">版权声名</span>
        <span class="login-s">更新日志</span>
        <span class="login-s">意见反馈</span>
        <span class="login-s">联系我们</span>
        <span class="login-s">关于我们</span>
      </div>
      <div class="footer-bottom">
        <span>长株潭信息服务平台2021</span>
      </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/css/variables.scss";
.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  font-size: 14px;
  background: #000;
  line-height: $--top-height;
  padding: 0 12px;
  height: $--top-height;
  color: #444;
  border-top: 1px solid #d2d6de;
  .footer-top{
    width: 100%;
    height: 25px;
    line-height:35px;
    text-align: center;
    color: white;
    cursor: pointer;
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
  .footer-bottom{
    width: 100%;
    height: 25px;
    line-height: 25px;
    text-align: center;
    color: white;
  }
}
</style>
