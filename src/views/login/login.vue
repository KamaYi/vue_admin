<template>
  <el-form
    :model="ruleForm2"
    :rules="rules2"
    ref="ruleForm2"
    label-position="left"
    label-width="0px"
    class="demo-ruleForm login-container"
  >
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;text-align: center;">
      <el-button type="primary" @click.native.prevent="submitForm('ruleForm2')">登录</el-button>
      <el-button @click.native.prevent="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import { requestLogin } from "@/api/api"; //统一调用请求
import { rightPhoneNumber } from "@/config/utils"; //调用公共方法

export default {
  data() {
    var validateAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.ruleForm2.checkAccount !== "") {
          // this.$refs.ruleForm2.validateField("checkAccount");
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          // this.$refs.ruleForm2.validateField("checkPass");//此处判断数据类型
        }
        callback();
      }
    };
    return {
      ruleForm2: {
        account: "admin",
        checkPass: "123456"
      },
      rules2: {
        account: [{ validator: validateAccount, trigger: "blur" }],
        checkPass: [{ validator: validatePass, trigger: "blur" }]
      },
      checked: false
    };
  },
  created() {},
  components: {},
  computed: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let loginParams = {
            username: this.ruleForm2.account,
            password: this.ruleForm2.checkPass
          };
          requestLogin(loginParams).then(data => {
            if (!data.success) {
              //验证成功，根据返回信息进行不同角色进行权限的分配
              this.$store.dispatch("login", true);
              this.$store.dispatch(
                "token",
                "327423jksjaddjhashdssakhkhsdasdasdhjasdjkasjdjskad"
              );
              this.$router.push({
                path: "/home"
              });
            } else {
              this.$message({
                message: data.message,
                type: "error"
              });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
}
</style>
