<template>
    <div class="home">
        <div class="home-1" v-show="isShow">
            <div class="home-title">
                <h3>长株潭综合服务平台</h3>
                <h5>以物流促融合</h5>
            </div>
            <div class="home-btn">
                <el-button type="primary">供给资源 <i class="el-icon-right"></i></el-button>
                <el-button type="primary">数据服务<i class="el-icon-right"></i></el-button>
                <el-button type="primary">政务服务<i class="el-icon-right"></i></el-button>
            </div>
        </div>
        <div class="login" v-show="!isShow">
            <div class="login-title">
                <span>用户登录</span>
            </div>
            <div class="login-nameInfo" style="margin-top: 40px">
                <span>用户名</span>
                <el-input v-model="input" clearable prefix-icon="el-icon-user-solid"  placeholder="请输入用户名"></el-input>
            </div>
            <div class="login-nameInfo" style="margin-top: 20px">
                <span>密码</span>
                <el-input v-model="input" clearable prefix-icon="el-icon-unlock" placeholder="请输入密码" show-password></el-input>
            </div>
            <div class="login-btn">
                <el-button @click="loginBtn">立即登录</el-button>
            </div>
            <div class="login-other">
                <span>没有账号？<a href="">免费注册</a></span>
                <span>忘记密码？</span>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                radio: "",
                input: '123',
                isShow: false
            };
        },
        methods: {
            loginBtn() {
                this.isShow = true
            }
        },
        mounted: function () {
        }
    };
</script>
<style lang="scss" scoped>
    .home {
        .home-title {
            position: absolute;
            left: 50%;
            top: 40%;
            color: white;
            transform: translate(-50%, -50%);

            h3 {
                font-size: 50px;
                letter-spacing: 7px;
            }

            h5 {
                font-size: 35px;
                text-align: center;
                letter-spacing: 7px;
            }
        }

        .home-btn {
            width: 700px;
            position: absolute;
            top: 60%;
            left: 25%;
            display: flex;
            justify-content: space-between;

            .el-button {
                font-size: 18px;
            }

            .el-button--primary {
                width: 150px;
                height: 50px;
            }
        }

        .login {
            width: 360px;
            height: 360px;
            background-color: rgba(51, 158, 244, 0.7);
            padding: 20px 10px;
            border-radius: 20px;
            position: absolute;
            left: 60px;
            top: 50%;
            transform: translate(0%, -50%);

            .login-title {
                text-align: center;
                font-size: 26px;
                color: white;
            }

            .login-nameInfo {
                display: flex;

                span {
                    width: 70px;
                    height: 40px;
                    line-height: 40px;
                }
               /deep/ .el-icon-user-solid{
                    margin-right: 50px;
                }
            }

            .login-btn {
                margin: 20px 0 0 100px;
                .el-button{
                    width: 200px;
                    font-size: 18px;
                    background-color: #66b6f7;
                    border-color: #66b6f7;
                    color: white;
                }
            }
            .login-other{
                display: flex;
                margin: 10px 0 0 60px;
                justify-content: space-between;
                span{
                    color: #C0C4CC;
                    a{
                        color: blue;
                    }
                }
            }
        }
    }
</style>
