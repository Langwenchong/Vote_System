<template>
  <div id="Container">
    <div class="main">
      <div
        class="wrapper"
      >
        <form class="form-signin">
          <h2 class="form-signin-heading text-center">Vote System</h2>
          <transition mode="out-in">
            <router-view></router-view>
          </transition>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Container",
  mounted() {
    $(".main").circleMagic({
      radius: 9,
      density: 0.03,
      color: "random",
      clearOffset: 0.3
    });
  }
};
</script>

<style scoped>
#Container {
  background: #eee;
  height: 100%;
  width: 100%;
  overflow: hidden;
  /* background: pink; */
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.main {
  width: 98%;
  height: 98%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  z-index: 1;
  margin: 80px;
  transition: 0.5s;
}
.wrapper:hover {
  box-shadow: 0 2px 4px 0px rgb(0 0 0 / 10%), 0 4px 8px 0px rgb(0 0 0 / 10%),
    0 8px 16px 0px rgb(0 0 0 / 10%);
}
.form-signin {
  max-width: 380px;
  min-width: 350px;
  margin: 0 auto;
  background-color: #fff;
  padding: 15px 40px 50px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}
</style>