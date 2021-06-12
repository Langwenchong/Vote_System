<template>
  <div id="register">
    <input type="text" class="form-control" name="username" v-model="name" placeholder="Email Address" />
    <input type="password" class="form-control" name="password" v-model="password1" placeholder="Password" required />
    <input type="password" class="form-control" name="password-again" v-model="password2" placeholder="Password Again" required />
    <button class="btn btn-lg btn-primary btn-block" @click="register">Register</button>
    <router-link to="login" id="link">Sigin in</router-link>
  </div>
</template>

<script>
export default {
  name: "register",
  date(){
    return{
      name:"",
      password1:"",
      password2:""
    }
  },
  methods:{
    register(){
      if(this.name==="pengpenglang"){
        this.$message({
          message: '名称/邮箱账号已经被别人注册~',
          type: 'warning'
        });
      }
      else if(this.password1!=this.password2){
        this.$message.error("两次输入的密码不同，请重新输入！");
      }
      else if(name===""){
        this.$message.error("请填写注册账号邮箱！");
      }
      else if(password1===""||password2===""){
        this.$message.error("请填写密码！");
      }
      else{
        this.$router.push("/Console");
      }
    }
  }
};
</script>

<style scoped>
#link{
    margin: 20px auto;
    color:#333;
    font-size:.95rem;
}
.checkbox {
  margin-bottom: 30px;
}
input[type="text"],
input[type="password"] {
  margin-bottom: 10px;
}
.form-control {
  padding: 10px;
}
button {
    transition:.3s;
  background: #fe7300;
}
</style>