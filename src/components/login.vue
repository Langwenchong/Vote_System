<template>
  <div id="login">
    <input
      type="text"
      class="form-control"
      name="username"
      v-model="username"
      placeholder="Email Address"
    />
    <input
      type="password"
      class="form-control"
      name="password"
      v-model="password"
      placeholder="Password"
      required
    />
    <label class="checkbox">
      <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" />
      Remember Me
    </label>
    <button class="btn btn-lg btn-primary btn-block" @click="login">Login</button>
    <router-link to="register" id="link">Register now!</router-link>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (this.username === "pengpenglang" && this.password === "123456") {
        this.$router.push("/Console/account");
      } else {
        this.$message.error("账号或者密码错误,请重新输入！");
      }
    }
  },
  mounted(){
    var obj={
      id:"1"
    }
    const url=`http://172.23.147.201:8080/api/test/add`;
    const settings={
      method:"post",
      // mode: "no-cors",
      headers:{
        "Content-type":"application:/x-www-form-urlencoded:charset=UTF-8"
      },
      body:JSON.stringify(obj)
    }
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })
  }
};
</script>

<style scoped>
#link {
  margin: 20px auto;
  color: #333;
  font-size: 0.95rem;
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
  background: #009966;
}
</style>