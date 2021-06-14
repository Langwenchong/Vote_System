<template>
  <div id="edit">
    <div id="r-menu" class="animate__animated animate__fadeInRight">
      <div class="title">基本信息</div>
      <div id="info">
        <div class="head">
          <span>名称:</span>
          <el-input class="input" placeholder="请输入内容" v-model="input" :disabled="true"></el-input>
        </div>
        <div class="subtitle">
          <span>提示:</span>
          <el-input
            class="input"
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="textarea"
            :disabled="true"
          ></el-input>
        </div>
        <div class="tot">
          <div id="container">
            <div class="card">
              <div class="icon">
                <i class="bx bxs-hourglass-bottom"></i>
              </div>
              <div class="info">
                <div class="num">{{sum}}</div>
                <div class="what">
                  <i>总分数</i>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="icon">
                <i class="bx bxs-edit-location"></i>
              </div>
              <div class="info">
                <div class="num">{{arr.length}}</div>
                <div class="what">
                  <i>题目数</i>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="icon">
                <i class="bx bxs-package"></i>
              </div>
              <div class="info">
                <div class="num">{{arr.length>0?(sum/arr.length).toFixed(1):0}}</div>
                <div class="what">
                  <i>平均分/题</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="title">编辑工具</div>
      <div class="btn-box">
        <div class="box" @click="create(0)">
          <span class="ripple"></span>
          <div class="content">
            <div class="icon">
              <i class="bx bxs-dice-1"></i>
            </div>
            <div class="info">
              <b>单选</b>
              <em class="small">有且仅有一个选项正确</em>
            </div>
          </div>
        </div>
        <div class="box" @click="create(1)">
          <span class="ripple"></span>
          <div class="content">
            <div class="icon">
              <i class="bx bxs-dice-2"></i>
            </div>
            <div class="info">
              <b>多选</b>
              <em class="small">可以有多个选项正确</em>
            </div>
          </div>
        </div>
        <div class="box" @click="create(2)">
          <span class="ripple"></span>
          <div class="content">
            <div class="icon">
              <i class="bx bxs-been-here"></i>
            </div>
            <div class="info">
              <b>判断</b>
              <em class="small">对一个断言进行判断</em>
            </div>
          </div>
        </div>
        <div class="box" @click="create(3)">
          <span class="ripple"></span>
          <div class="content">
            <div class="icon">
              <i class="bx bx-message-square-detail"></i>
            </div>
            <div class="info">
              <b>文本</b>
              <em class="small">对问题发表自己的见解</em>
            </div>
          </div>
        </div>
        <div class="box" @click="create(4)">
          <span class="ripple"></span>
          <div class="content">
            <div class="icon">
              <i class="bx bx-selection"></i>
            </div>
            <div class="info">
              <b>排序</b>
              <em class="small">给事物进行顺序编号</em>
            </div>
          </div>
        </div>
        <div class="box" @click="create(5)">
          <span class="ripple"></span>
          <div class="content">
            <div class="icon">
              <i class="bx bx-like"></i>
            </div>
            <div class="info">
              <b>投票</b>
              <em class="small">对某个问题投票</em>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="l-main" class="animate__animated animate__zoomIn">
      <div id="toolbar">
        <div class="left">
          <i class="bx bxs-cookie"></i>
          <span>背景颜色调节：</span>
          <el-color-picker v-model="color" size="mini" show-alpha :predefine="predefineColors"></el-color-picker>
        </div>
        <div class="right">
          <el-button class="item" type="primary" plain>保存并预览</el-button>
          <el-button class="item" type="success" plain>发布本篇调查</el-button>
        </div>
      </div>
      <div id="wrapper" :style="{'background':this.color}">
        <transition-group appear>
          <div class="box" v-for="(box,i) in arr" :key="box.id">
            <component :is="Mount(i)" :index="i" @Updatedata="Updatedata"></component>
            <el-button class="rubbish" type="danger" icon="el-icon-delete" circle @click="del(i)"></el-button>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import audiobox from "@/components/audiobox";
import checkbox from "@/components/checkbox";
import justifybox from "@/components/justifybox";
import textbox from "@/components/textbox";
import orderbox from "@/components/orderbox";
import votebox from "@/components/votebox";
export default {
  name: "edit",
  components: {
    audiobox,
    checkbox,
    justifybox,
    textbox,
    orderbox,
    votebox
  },
  methods: {
    Updatedata(obj, index, key) {
      // console.log("hello");
      // console.log(key)
      this.arr[index].data[key].point = obj.point;
      this.arr[index].data[key].title = obj.title;
      this.arr[index].data[key].isNec = obj.isNec;
      this.arr[index].data[key].isRan = obj.isRan;
      this.arr[index].data[key].choices = obj.choices;
    },
    del(i) {
      this.arr.splice(i, 1);
    },
    create(i) {
      var obj = {
        id: this.id,
        key: -1,
        data: [
          //单选
          {
            title: "",
            isNec: true,
            isRan: true,
            point: 2,
            //默认是4个选项
            choices: [
              {
                id: 1,
                value: ""
              },
              {
                id: 2,
                value: ""
              },
              {
                id: 3,
                value: ""
              },
              {
                id: 4,
                value: ""
              }
            ]
          },
          //多选

          {
            title: "",
            isNec: true,
            isRan: true,
            point: 2,
            //默认是4个选项
            choices: [
              {
                id: 1,
                value: ""
              },
              {
                id: 2,
                value: ""
              },
              {
                id: 3,
                value: ""
              },
              {
                id: 4,
                value: ""
              }
            ]
          },
          //判断

          {
            title: "",
            isNec: true,
            isRan: true,
            point: 2
          },
          //文本

          {
            title: "",
            point: 8,
            isNec: true,
            isRan: true
          },
          //排序

          {
            title: "",
            point: 6,
            isNec: true,
            isRan: true,
            //默认是2个选项
            choices: [
              {
                id: 1,
                value: ""
              },
              {
                id: 2,
                value: ""
              }
            ]
          },
          //投票

          {
            point: 2,
            title: "",
            isNec: true,
            isRan: true
          }
        ]
      };
      obj.key = i;
      this.arr.push(obj);
      this.id++;
      var s = ["单选", "多选", "判断", "文本", "排序", "投票"];
      this.$notify({
        title: "成功",
        message: "成功创建一个新的元素,类型为:[ " + s[obj.key] + " ]",
        type: "success"
      });
    }
  },
  mounted() {
    let box = document.querySelectorAll(".box");
    for (let i = 0; i < box.length; i++) {
      box[i].onmouseenter = function(event) {
        let ripple = box[i].querySelector(".ripple");
        ripple.classList.add("animation");
        ripple.style.width = this.offsetWidth + "px";
        ripple.style.height = this.offsetWidth + "px";
        ripple.style.top = -(this.offsetHeight - event.offsetY) + "px";
        ripple.style.left = -(this.offsetWidth / 2 - event.offsetX) + "px";
        setTimeout(function() {
          ripple.classList.remove("animation");
        }, 500);
      };
    }
  },
  data() {
    return {
      id: 1,
      arr: [],
      audio: "votebox",
      m_comps: [
        "audiobox",
        "checkbox",
        "justifybox",
        "textbox",
        "orderbox",
        "votebox"
      ],
      color: "#EAEAEF",
      predefineColors: [
        "#EAEAEF",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
        "rgba(255, 69, 0, 0.68)",
        "rgb(255, 120, 0)",
        "hsv(51, 100, 98)",
        "hsva(120, 40, 94, 0.5)",
        "hsl(181, 100%, 37%)",
        "#FFF",
        "#c7158577",
        "#FAF9DE",
        "#FFF2E2",
        "#FDE6E0",
        "#E3EDCD",
        "#DCE2F1",
        "#E9EBFE"
      ],
      input: "对大学生GPA的调查",
      textarea:
        "本调查不会泄露学生任何隐私信息，仅是针对GPA进行的一次保密性调查，请同学们如实回答问题"
    };
  },
  computed: {
    Mount(i) {
      return function(i) {
        return this.m_comps[this.arr[i].key];
      };
    },
    sum() {
      var tmp = 0;
      for (let i = 0; i < this.arr.length; i++) {
        // console.log(this.arr[i].data[this.arr[i].key].title);
        tmp += this.arr[i].data[this.arr[i].key].point;
      }
      return tmp;
    }
  }
};
</script>


<style scoped>
#edit {
  width: 100%;
  min-height: 300px;
  /* background: pink; */
}
#r-menu {
  z-index: 9;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  background: #11101d;
  /* border-left: 1px solid #e1e4e8; */
  /* background: #f5f6f7; */
}
#l-main {
  width: 70%;
  min-height: 200px;
  /* background: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
#l-main #toolbar {
  position: sticky;
  z-index: 2;
  top: 0px;
  width: 100%;
  height: 48px;
  background: #f5f6f7;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#l-main #toolbar .left {
  padding-left: 50px;
  width: 400px;
  height: 100%;
  /* background: green; */
  display: flex;
  align-items: center;
}
#l-main #toolbar .right {
  padding-right: 20px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 400px;
  height: 100%;
  /* background: green; */
}
#l-main #toolbar .right .item {
  margin-right: 10px;
}
#l-main #wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 93vh;
  position: relative;
}
#l-main #wrapper .box {
  /* margin-bottom: 16px; */
  position: relative;
  padding: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
  min-height: 300px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0px rgb(0 0 0 / 10%);
}
#l-main #wrapper .box .rubbish {
  transform: scale(50%);
  position: absolute;
  top: 5px;
  right: 5px;
}
#r-menu #info {
  /* padding-top: 30px; */
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* min-height: 300px; */
  /* background: green; */
}
#r-menu #info .head {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#r-menu #info .head .input {
  width: 80%;
}
#r-menu .title {
  position: relative;
  font-family: "NSimSun";
  margin-top: 10px;
  margin-bottom: 30px;
  /* margin-left: 5%; */
  font-size: 1.5rem;
  font-weight: 700;
}
#r-menu .title::after {
  z-index: 0;
  content: "";
  position: absolute;
  top: 50%;
  right: 120px;
  width: 120%;
  height: 1px;
  background: #fff;
}
#r-menu .title::before {
  z-index: 0;
  content: "";
  position: absolute;
  top: 50%;
  left: 120px;
  width: 120%;
  height: 1px;
  background: #fff;
}
#r-menu #info .subtitle {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
}
#r-menu #info .subtitle .input {
  width: 90%;
}
#r-menu #info .tot {
  width: 95%;
}
#r-menu .tot #container {
  margin-top: 20px;
  width: 100%;
  height: calc(100% - 40px);
  /* background: pink; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#r-menu .tot #container .card {
  width: 31%;
  height: 100%;
  background-color: #ff6666;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
#r-menu .tot #container .card:last-child {
  background-color: rgba(23, 162, 184, 0.9);
}
#r-menu .tot #container .card .icon {
  margin-top: 10px;
  font-size: 70px;
  color: rgba(0, 0, 0, 0.1);
}
#r-menu .tot #container .card .info {
  width: 40%;
  /* background:yellow; */
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
#r-menu .tot #container .card .info .num {
  font-size: 1.5rem;
  font-weight: 700;
}
#r-menu .tot #container .card .info .what {
  font-size: 12px;
  opacity: 0.5;
}
#r-menu .btn-box {
  width: 100%;
  display: flex;
  justify-content: space-around;
  /* align-items: flex-start; */
  flex-wrap: wrap;
}

#r-menu .box {
  cursor: pointer;
  position: relative;
  width: 40%;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  user-select: none;
  margin: 10px;
  transition: 0.5s;
  /* box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2); */
}
#r-menu .box:hover {
  transform: translateX(10px);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
}
#r-menu .box .content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#r-menu .box .content .icon {
  font-size: 60px;
  margin-top: 10px;
  /* font-size: 70px; */
  color: rgba(0, 0, 0, 0.1);
}
#r-menu .box .content .info {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#r-menu .box .content .info b {
  font-size: 1.2rem;
}
#r-menu .box .content .info .small {
  opacity: 0.5;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.5);
}
#r-menu .box:nth-of-type(1) {
  background: linear-gradient(150deg, rgb(251, 122, 8), rgb(240, 47, 31));
}

#r-menu .box:nth-of-type(2) {
  background: linear-gradient(150deg, rgb(241, 43, 84), rgb(237, 11, 125));
}

#r-menu .box:nth-of-type(3) {
  background: linear-gradient(150deg, rgb(65, 182, 73), rgb(125, 195, 65));
}

#r-menu .box:nth-of-type(4) {
  background: linear-gradient(150deg, rgb(5, 141, 239), rgb(22, 175, 194));
}

#r-menu .box:nth-of-type(5) {
  background: linear-gradient(150deg, rgb(134, 0, 255), rgb(103, 0, 255));
}

#r-menu .box:nth-of-type(6) {
  background: linear-gradient(150deg, rgb(209, 11, 148), rgb(113, 52, 178));
}

#r-menu .ripple {
  display: block;
  position: absolute;
  border-radius: 100%;
  background: rgba(255, 255, 255, 0.5);
  transform: scale(0);
}

#r-menu .animation {
  animation: ripple 0.5s ease-in;
}

@keyframes ripple {
  100% {
    transform: scale(3);
    opacity: 0;
  }
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.v-move {
  transition: all 1s ease;
}
.v-leave-active {
  position: absolute;
}
</style>