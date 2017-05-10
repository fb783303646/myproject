<template>
<div class="loginbox"  >
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2"  label-width="0px">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
     
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import { requestLogin } from '../api/api';
  export default {
    data() {
      return {
        logining: false,
        ruleForm2: {
          account: 'admin',
          checkPass: '123456'
        },
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
    created(){
       sessionStorage.clear();
    },
    methods: {
      
      handleSubmit2(ev) {
  

        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {

            this.logining = true;

            let loginParams = { username: this.ruleForm2.account, password:this.ruleForm2.checkPass };
            let sessionId = {};

            requestLogin(loginParams).then(data => {
              this.logining = false;

              let { msg, code, result } = data;

              if (code !== 200) {

                this.$message({
                  message: msg,
                  type: 'error'
                });

              } else {

                sessionId = {
                  id:result.id,
                  name:result.username
                }
                console.log(result);
                sessionStorage.setItem("sessionId",JSON.stringify(sessionId))
                
                this.$router.push({ path: '/add' });

              }

            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped lang="scss">
 .loginbox{margin: 100px auto 0 auto;width: 360px;padding: 20px;box-shadow: 2px 2px 5px #eee;}
</style>