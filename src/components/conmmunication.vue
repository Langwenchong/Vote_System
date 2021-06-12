<template>
  <div id="conmmunication">
    <div id="l-main">
      <div id="menu"></div>
      <div class="main">
        <div id="head">
          <div id="name">
            <div class="imgBx">
              <img :src="$route.query.logo" />
            </div>
            <div class="info">
              <b>{{$route.query.title}}</b>
              <div class="status">{{$route.query.status}}</div>
            </div>
          </div>
          <div id="h-nav">
            <el-tooltip class="item" effect="dark" content="视频会议" placement="bottom">
              <el-button>
                <i class="bx bx-camera-movie"></i>
              </el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="添加群成员" placement="bottom">
              <el-button>
                <i class="bx bx-user-plus"></i>
              </el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="退出该群" placement="bottom">
              <el-button>
                <i class="bx bx-log-out-circle"></i>
              </el-button>
            </el-tooltip>
          </div>
        </div>
        <div id="talk">
          <div class="t-main">
            <div class="t-box" v-for="(el,i) in arr" :key="i">
              <div class="person">
                <div class="avatar">
                  <img :src="el.avatar" />
                </div>
                <span class="name">{{el.name}}</span>
                <div class="status">{{el.status}}</div>
              </div>
              <p class="message">{{el.message}}</p>
            </div>
          </div>
        </div>
        <div id="mk" class="animate__animated animate__fadeInUp">
          <div class="markdown">
            <Markdown />
          </div>
        </div>
      </div>
    </div>
    <div id="r-nav" class="animate__animated animate__fadeInRight">
      <el-tooltip class="item" effect="dark" content="搜索" placement="left">
        <el-button>
          <i class="bx bx-search-alt"></i>
        </el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="置顶" placement="left">
        <el-button>
          <i class="bx bxs-pin"></i>
        </el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="设置" placement="left">
        <el-button>
          <i class="bx bxs-cog"></i>
        </el-button>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import Markdown from "vue-meditor";
import { MarkdownPro } from "vue-meditor";
import { MarkdownPreview } from "vue-meditor";
export default {
  name: "conmmunication",
  beforeUpdate() {
    this.arr = this.$route.query.mesData;
  },
  data() {
    return {
      arr: ""
    };
  },
  components: {
    Markdown
  }
};
</script>

<style scoped>
#conmmunication {
  width: 100%;
  min-height: 100px;
  /* background: #000; */
}
#conmmunication #r-nav {
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 48px;
  background: #f5f6f7;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#conmmunication #r-nav .item {
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
  margin-top: 10px;
  font-size: 22px;
}
#conmmunication #l-main {
  position: relative;
  width: calc(100% - 48px);
}
#conmmunication #l-main #menu {
  position: absolute;
  width: calc(100% - 17px);
  height: 100%;
  right: 0;
  top: 0;
  background: orange;
  display: none;
}
#conmmunication #l-main .main {
  padding-left: 16px;
  width: 100%;
  min-height: 300px;
  /* background: blue; */
  display: flex;
  flex-direction: column;
}
#conmmunication #l-main .main #head {
  width: 100%;
  height: 68px;
  background: #fff;
  border-bottom: 1px solid #e1e4e8;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#conmmunication #l-main .main #head #name {
  margin-left: 20px;
  /* width: 180px; */
  height: 100%;
  /* background: pink; */
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
}
#conmmunication #l-main .main #head #name .imgBx {
  border-radius: 50%;
  border: 1px solid #3370ff;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
}
#conmmunication #l-main .main #head #name .imgBx img {
  width: 24px;
}
#conmmunication #l-main .main #head #name .info {
  padding-left: 5px;
  height: 60%;
  /* width: calc(100% - 50px); */
  /* background: pink; */
  display: flex;
  /* align-items: center; */
  flex-direction: column;
}
#conmmunication #l-main .main #head #name .info .status {
  display: flex;
  width: 30px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 12px;
  height: 20px;
  color: #3370ff;
  background-color: #e1eaff;
  margin-left: 5px;
  /* text-align: center; */
}
#conmmunication #l-main .main #head #h-nav {
  margin-right: 45px;
  width: 120px;
  height: 100%;
  /* background: green; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#conmmunication #l-main .main #head #h-nav .item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  background: transparent;
  border: none;
  font-size: 26px;
}
#conmmunication #l-main .main #talk {
  width: 100%;
  height: 400px;
  background: transparent;
  overflow-y: auto;
}
#conmmunication #l-main .main #talk .t-main {
  width: 100%;
  /* height: 1000px; */
  /* background:yellow; */
}
#conmmunication #l-main .main #talk .t-main .t-box {
  margin-top: 20px;
  width: 90%;
  margin-left: 20px;
  /* height: 200px; */
  /* background:#3370ff; */
}
#conmmunication #l-main .main #talk .t-main .t-box .person {
  width: 50%;
  height: 60px;
  /* background: green; */
  display: flex;
  align-items: center;
}
#conmmunication #l-main .main #talk .t-main .t-box .person .name {
  font-size: 14px;
  line-height: 12px;
  color: #595b5a;
  margin-left: 5px;
}
#conmmunication #l-main .main #talk .t-main .t-box .person .status {
  /* width: 20px; */
  height: 26px;
  line-height: 12px;
  font-size: 12px;
  border-radius: 5px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3370ff;
  background-color: #e1eaff;
  margin-left: 5px;
}
#conmmunication #l-main .main #talk .t-main .t-box .person .avatar {
  border-radius: 50%;
  border: 1px solid #222;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#conmmunication #l-main .main #talk .t-main .t-box .person .avatar img {
  width: 32px;
}
#conmmunication #l-main .main #talk .t-main .t-box .message {
  margin-left: 50px;
  padding: 10px 20px;
  border-radius: 8px;
  line-height: 16px;
  background: #eff0f1;
  font-size: 16px;
  width:300px;
}
#conmmunication #l-main .main #mk {
  position: fixed;
  width: 1072px;
  height: 250px;
  overflow: hidden;
  bottom: 0;
  right: 48px;
}
#conmmunication #l-main .main #mk .markdown {
  position: relative;
  overflow-y: auto;
}
#conmmunication #l-main .main #mk .markdown-toolbars {
  position: fixed !important;
  bottom: 160px !important;
  /* top:0px; */
}
</style>