<template>
  <div id="dashBoard">
    <div id="l-list" class="animate__animated animate__fadeIn">
      <div id="tot">
        <div id="title">总览</div>
        <div id="container">
          <div class="card">
            <div class="icon">
              <i class="bx bxs-file"></i>
            </div>
            <div class="info">
              <div class="num">{{wenjuan}}</div>
              <div class="what">
                <i>调查问卷</i>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="icon">
              <i class="bx bxs-notepad"></i>
            </div>
            <div class="info">
              <div class="num">{{dati}}</div>
              <div class="what">
                <i>理论答题</i>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="icon">
              <i class="bx bxs-notepad"></i>
            </div>
            <div class="info">
              <div class="num">{{toupiao}}</div>
              <div class="what">
                <i>大众投票</i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="main">
        <div id="toolbar">
          <div class="search">
            <el-input placeholder="你想找点什么?..." v-model="input" clearable></el-input>
            <el-button class="search-icon" icon="el-icon-search" circle></el-button>
          </div>
          <div class="tools">
            <el-row>
              <el-button type="success" plain @click="create()">Create</el-button>
            </el-row>
          </div>
        </div>
        <div id="list">
          <transition-group appear>
            <div v-for="(el,i) in Arr" :key="el.id" class="box" @click="settings">
              <div class="left">
                <b>{{el.name}}</b>
                <div class="status">
                  <div class="point" v-state="el.status"></div>
                  <span>{{el.status}}</span>
                </div>
              </div>
              <div class="right">
                <el-popconfirm
                  confirm-button-text="好的"
                  cancel-button-text="不用了"
                  icon="el-icon-info"
                  icon-color="red"
                  title="你确认要删除这个选项框？"
                  @confirm="del(el.id)"
                >
                  <el-button slot="reference" @confirm="del(i)" class="item">删除</el-button>
                </el-popconfirm>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
    <div id="r-menu">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
export default {
  name: "dashBoard",
  computed: {
    wenjuan() {
      var sum = 0;
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i].status === "问卷调查") sum++;
      }
      return sum;
    },
    dati() {
      var sum = 0;
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i].status === "理论答题") sum++;
      }
      return sum;
    },
    toupiao() {
      var sum = 0;
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i].status === "大众投票") sum++;
      }
      return sum;
    },
    Arr() {
      let temp = [];
      for (let i = 0; i < this.arr.length; i++) {
        let sen = this.arr[i].name + this.arr[i].status;
        if (sen.search(this.input) != -1) {
          temp.push(this.arr[i]);
        }
        // console.log(temp);
      }
      return temp;
    }
  },
  data() {
    return {
      input: "",
      arr: [
        {
          id: 1,
          name: "大学GPA平均调查",
          status: "问卷调查"
        },
        {
          id: 2,
          name: "大学平均月消费水平调查",
          status: "问卷调查"
        },
        {
          id: 3,
          name: "中国地质大学宿舍是否引入空调",
          status: "大众投票"
        },
        { id: 4, name: "形势与政策答题", status: "理论答题" },
        { id: 5, name: "大学自我颜值评价调查", status: "问卷调查" },
        { id: 6, name: "校园食堂菜价是够过高", status: "大众投票" },
        { id: 7, name: "大学学习状况自我评价调查", status: "问卷调查" },
        {
          id: 8,
          name: "《青年大学习》课后题",
          status: "理论答题"
        },
        { id: 9, name: "军训服装样式选定", status: "大众投票" },
        { id: 10, name: "大学GPA平均调查", status: "问卷调查" },
        { id: 11, name: "大学平均月消费水平调查", status: "问卷调查" },
        { id: 12, name: "中国地质大学宿舍是否引入空调", status: "大众投票" },
        { id: 13, name: "形势与政策答题", status: "理论答题" },
        { id: 14, name: "大学自我颜值评价调查", status: "问卷调查" },
        { id: 15, name: "心理健康测试", status: "理论答题" },
        { id: 16, name: "校园食堂菜价是够过高", status: "大众投票" },
        { id: 17, name: "大学学习状况自我评价调查", status: "问卷调查" },
        { id: 18, name: "《青年大学习》课后题", status: "理论答题" },
        { id: 19, name: "军训服装样式选定", status: "大众投票" },
        {
          id: 20,
          name: "心理健康测试",
          status: "理论答题"
        }
      ]
    };
  },
  directives: {
    state: function(el, binding) {
      if (binding.value === "问卷调查") {
        el.style.backgroundColor = "#f34b7d";
      } else if (binding.value === "大众投票") {
        el.style.backgroundColor = "#41b883";
      } else if (binding.value === "理论答题") {
        el.style.backgroundColor = "#f1e05a";
      } else if (binding.value === "待编辑") {
        el.style.backgroundColor = "#996699";
      }
    }
  },
  methods: {
    del(id) {
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i].id === id) {
          console.log(id);
          this.arr.splice(i, 1);
        }
      }
      this.$message({
        message: "删除成功✔️,后台日志已清空有关数据并捕捉本次操作",
        type: "success"
      });
    },
    create() {
      var maxid = -1;
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i].id > maxid) {
          maxid = this.arr[i].id;
        }
      }
      maxid = maxid + 1;
      this.arr.unshift({
        id: maxid,
        name: "待编辑标题",
        status: "待编辑"
      });
      console.log(maxid);
      this.$message({
        message: "创建成功✔️,后台日志已捕捉您的本次操作",
        type: "success"
      });
    },
    settings() {
      this.$router.push("settings");
    }
  }
};
</script>

<style scoped>
#dashBoard {
  width: 100%;
  min-height: 400px;
  /* background: pink; */
  display: flex;
  justify-content: space-between;
}
#dashBoard #l-list {
  background: #f8f9fa !important;
  font-family: "NSimSun";
  left: 78px;
  position: fixed;
  width: 35%;
  height: 100%;
  /* background: green; */
  border-right: 1px solid #e1e4e8;
  display: flex;
  flex-direction: column;
}
#dashBoard #l-list #tot {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 150px;
  /* background: green; */
}
#dashBoard #l-list #tot #title {
  font-weight: 700 !important;
  font-size: 1.5rem;
  margin-left: 20px;
  margin-top: 10px;
}
#dashBoard #l-list #tot #container {
  width: 100%;
  height: calc(100% - 40px);
  /* background: pink; */
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#dashBoard #l-list #tot #container .card {
  width: 31%;
  height: 100%;
  background-color: rgba(23, 162, 184, 0.9);
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
#dashBoard #l-list #tot #container .card:last-child {
  background-color: rgba(40, 167, 69, 0.9);
}
#dashBoard #l-list #tot #container .card .icon {
  margin-top: 10px;
  font-size: 70px;
  color: rgba(0, 0, 0, 0.1);
}
#dashBoard #l-list #tot #container .card .info {
  width: 40%;
  /* background:yellow; */
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
#dashBoard #l-list #tot #container .card .info .num {
  font-size: 2rem;
  font-weight: 700;
}
#dashBoard #l-list #tot #container .card .info .what {
  opacity: 0.5;
}
#dashBoard #l-list #main {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: calc(100% - 150px);
  /* background:red; */
}
#dashBoard #l-list #main #toolbar {
  margin: 0 auto;
  width: 100%;
  height: 48px;
  /* background: pink; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* justify-content: space-between; */
}
#dashBoard #l-list #main #toolbar .search {
  margin-left: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
#dashBoard #l-list #main #toolbar .search .search-icon {
  margin-left: 5px;
}
#dashBoard #l-list #main #toolbar .tools {
  margin-right: 5px;
  /* margin-left:10px; */
  /* width: 200px; */
  height: 100%;
  /* background: green; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 15px;
}
#dashBoard #l-list #main #list {
  width: 100%;
  height: calc(100% - 78px);
  display: flex;
  overflow-y: auto;
  /* background: pink; */
}
#dashBoard #l-list #main #list span {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
}
#dashBoard #l-list #main #list .box {
  margin-top: 10px;
  width: 95%;
  height: 48px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0px rgb(0 0 0 / 10%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 0.5s;
}
#dashBoard #l-list #main #list .box:hover {
  background: #dee0e3;
}
#dashBoard #l-list #main #list .box .left {
  padding-left: 10px;
  width: 80%;
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */
  font-size: 10px;
}
#dashBoard #l-list #main #list .box .left b {
  font-size: 1rem;
  display: flex;
  align-items: center;
  width: 70%;
  text-overflow: clip;
}
#dashBoard #l-list #main #list .box .left .status {
  display: flex;
  align-items: center;
}
#dashBoard #l-list #main #list .box .left .status .point {
  width: 10px;
  height: 10px;
  margin-right: 8px;
  border-radius: 50%;
  display: inline-block;
}
#dashBoard #l-list #main #list .box .right .item {
  transform: scale(70%);
  border-radius: 15px;
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
#dashBoard #r-menu {
  margin-left: 35%;
  width: 65%;
  min-height: 300px;
  /* background: #000; */
}
</style>