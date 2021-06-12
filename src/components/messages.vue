<template>
  <div id="messages">
    <div id="l-nav" class="animate__animated animate__fadeInLeft">
      <ul id="create" v-show="showbutton" class="animate__animated animate__fadeIn">
        <li class="box">
          <i class="bx bx-group"></i>
          <span>创建群组</span>
        </li>
        <li class="box">
          <i class="bx bx-user-plus"></i>
          <span>添加好友</span>
        </li>
        <li class="box">
          <i class="bx bx-folder-plus"></i>
          <span>创建文档</span>
        </li>
        <li class="box">
          <i class="bx bx-message-alt-add"></i>
          <span>加入会议</span>
        </li>
      </ul>
      <div id="top-nav">
        <div id="note">
          <el-badge :value="12" class="item">
            <el-button size="small">评论</el-button>
          </el-badge>
          <el-badge :value="1" class="item" type="primary">
            <el-button size="small">通知</el-button>
          </el-badge>
          <el-badge :value="2" class="item" type="warning">
            <el-button size="small">回复</el-button>
          </el-badge>
        </div>
        <div id="tool">
          <i class="bx bx-plus" @click="toggle()"></i>
        </div>
      </div>
      <div id="list">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <!-- <i class='bx bx-message'></i> -->
              <span>更早</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(item,i) in arr"
                :index="i"
                :key="i"
                class="item"
                @click="goIn(i)"
              >
                <div class="avatar">
                  <img :src="item.avatar" />
                </div>
                <div class="info">
                  <div class="box-header">
                    <div class="name">
                      <span>{{item.name}}</span>
                      <p class="status">
                        <b>{{item.status}}</b>
                      </p>
                    </div>
                    <div class="date">{{item.lastdate}}</div>
                  </div>
                  <div class="box-info">
                    <p>{{item.lastmes}}</p>
                  </div>
                </div>
              </el-menu-item>
              <!-- <el-menu-item index="2">选项2</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
    </div>
    <div id="r-main">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
export default {
  name: "messages",
  methods: {
    toggle() {
      this.showbutton = !this.showbutton;
    },
    goIn(i) {
      this.$router.push({
        path: "conmmunication",
        query: {
          logo: this.arr[i].avatar,
          title: this.arr[i].name,
          status: this.arr[i].status,
          mesData: this.arr[i].mesData
        }
      });
    }
  },
  data() {
    return {
      showbutton: false,
      arr: [
        {
          name: "官方小助手",
          avatar: "../../static/images/助手.png",
          status: "官方",
          lastdate: "昨天",
          lastmes: "小主人，有什么需要我帮助您的吗？",
          mesData: [
            {
              avatar: "../../static/images/助手.png",
              name: "小助手阿花",
              status: "Robot",
              message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nam incidunt, eos beatae amet porro quod nisi commodi, corrupti dolorem repudiandae quibusdam, fugiat corporis pariatur inventore nihil placeat explicabo? Cupiditate?"
            },
            {
              avatar: "../../static/images/助手.png",
              name: "小助手阿花",
              status: "Robot",
              message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nam incidunt, eos beatae amet porro quod nisi commodi, corrupti dolorem repudiandae quibusdam, fugiat corporis pariatur inventore nihil placeat explicabo? Cupiditate?"
            },
            {
              avatar: "../../static/images/助手.png",
              name: "小助手阿花",
              status: "Robot",
              message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nam incidunt, eos beatae amet porro quod nisi commodi, corrupti dolorem repudiandae quibusdam, fugiat corporis pariatur inventore nihil placeat explicabo? Cupiditate?"
            },
            {
              avatar: "../../static/images/助手.png",
              name: "小助手阿花",
              status: "Robot",
              message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nam incidunt, eos beatae amet porro quod nisi commodi, corrupti dolorem repudiandae quibusdam, fugiat corporis pariatur inventore nihil placeat explicabo? Cupiditate?"
            },
            {
              avatar: "../../static/images/助手.png",
              name: "小助手阿花",
              status: "Robot",
              message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nam incidunt, eos beatae amet porro quod nisi commodi, corrupti dolorem repudiandae quibusdam, fugiat corporis pariatur inventore nihil placeat explicabo? Cupiditate?"
            },
            {
              avatar: "../../static/images/助手.png",
              name: "小助手阿花",
              status: "Robot",
              message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nam incidunt, eos beatae amet porro quod nisi commodi, corrupti dolorem repudiandae quibusdam, fugiat corporis pariatur inventore nihil placeat explicabo? Cupiditate?"
            }
          ]
        },
        {
          name: "心理健康测试1群",
          avatar: "../../static/images/团队.png",
          status: "团队",
          lastdate: "4月17日",
          lastmes: "老师：请还没有提交心理测试问卷的同学尽快提交！",
          mesData: [
            {
              avatar: "../../static/images/文艺大叔.png",
              name: "Mr.茂密森林",
              status: "老师",
              message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nam incidunt, eos beatae amet porro quod nisi commodi, corrupti dolorem repudiandae quibusdam, fugiat corporis pariatur inventore nihil placeat explicabo? Cupiditate?"
            },
            {
              avatar: "../../static/images/女孩.png",
              name: "小翠",
              status: "班花",
              message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nam incidunt, eos beatae amet porro quod nisi commodi, corrupti dolorem repudiandae quibusdam, fugiat corporis pariatur inventore nihil placeat explicabo? Cupiditate?"
            },
            {
              avatar: "../../static/images/忍者.png",
              name: "塔塔开",
              status: "学生",
              message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nam incidunt, eos beatae amet porro quod nisi commodi, corrupti dolorem repudiandae quibusdam, fugiat corporis pariatur inventore nihil placeat explicabo? Cupiditate?"
            }
          ]
        },
        {
          name: "2019ACM训练群",
          avatar: "../../static/images/团队.png",
          status: "团队",
          lastdate: "6月6日",
          lastmes: "杨浩忠：今年银川站必须哪一个金牌！",
          mesData: [
            {
              avatar: "../../static/images/宇航员.png",
              name: "许周样",
              status: "小公举",
              message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nam incidunt, eos beatae amet porro quod nisi commodi, corrupti dolorem repudiandae quibusdam, fugiat corporis pariatur inventore nihil placeat explicabo? Cupiditate?"
            },
            {
              avatar: "../../static/images/女孩.png",
              name: "小红",
              status: "菜弱",
              message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nam incidunt, eos beatae amet porro quod nisi commodi, corrupti dolorem repudiandae quibusdam, fugiat corporis pariatur inventore nihil placeat explicabo? Cupiditate?"
            },
            {
              avatar: "../../static/images/忍者.png",
              name: "塔塔开",
              status: "cf2000+",
              message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nam incidunt, eos beatae amet porro quod nisi commodi, corrupti dolorem repudiandae quibusdam, fugiat corporis pariatur inventore nihil placeat explicabo? Cupiditate?"
            }
          ]
        },
        {
          name: "天津大学考研群③群",
          avatar: "../../static/images/团队.png",
          status: "组织",
          lastdate: "6月12日",
          lastmes: "夏天学长：901考研资料特惠现在仅卖299.9一套",
          mesData: [
            {
              avatar: "../../static/images/文艺大叔.png",
              name: "夏天学长",
              status: "Robot",
              message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nam incidunt, eos beatae amet porro quod nisi commodi, corrupti dolorem repudiandae quibusdam, fugiat corporis pariatur inventore nihil placeat explicabo? Cupiditate?"
            },
            {
              avatar: "../../static/images/女孩.png",
              name: "阿花",
              status: "22软工",
              message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nam incidunt, eos beatae amet porro quod nisi commodi, corrupti dolorem repudiandae quibusdam, fugiat corporis pariatur inventore nihil placeat explicabo? Cupiditate?"
            },
          ]
        },
        {
          name: "西北工业大学夺牌小队",
          avatar: "../../static/images/金牌.png",
          status: "团体",
          lastdate: "6月12日",
          lastmes: "曹胜华：明天就要去打比赛了，好紧张呜呜呜",
          mesData: [
            {
              avatar: "https://pengpenglang.vip/img/avatar.jpg",
              name: "小鹏鹏",
              status: "队长",
              message:
                "明天就要去打比赛了，大佬们我好慌咋办，不会打铁吧！！"
            },
            {
              avatar: "../../static/images/宇航员.png",
              name: "曹胜华",
              status: "cf2000+",
              message:
                "你可是队长，你怂个撒子哦🙃~"
            },
          ]
        }
      ]
    };
  }
};
</script>


<style scoped>
#messages {
  width: 100%;
  display: flex;
  overflow-x: hidden;
  min-height: 300px;
  /* background:#000; */
}
#messages #l-nav {
  position: relative;
  width: 22%;
  background: #fff;
  position: fixed;
  height: 100%;
  left: 78px;
  top: 0;
  border-right: 1px solid #e1e4e8;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
#messages #l-nav #create {
  margin: 0;
  padding: 0;
  list-style: none;
  background: #222;
  border-radius: 6px;
  color: #fff;
  width: 170px;
  height: 200px;
  position: absolute;
  top: 50px;
  right: 10px;
  z-index: 2;
}
#messages #l-nav #create .box {
  cursor: pointer;
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0 22%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background:#fff; */
  transition: 0.5s;
}
#messages #l-nav #create .box i {
  font-size: 22px;
}
#messages #l-nav #create .box:hover {
  background-color: hsla(0, 0%, 100%, 0.1);
}
#messages #l-nav #top-nav {
  width: 100%;
  height: 55px;
  /* background: pink; */
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#messages #l-nav #top-nav #note {
  /* background: green; */
  width: 75%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#messages #l-nav #top-nav #tool {
  height: 35px;
  width: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* font-weight: 300; */
  font-size: 24px;
  color: #595b5a;
  transition: 0.5s;
  border: 1px solid #e1e4e8;
}
#messages #l-nav #top-nav #tool:hover {
  border: 1px solid #3370ff;
  color: #3370ff;
}
#messages #l-nav #list {
  width: 100%;
}
#messages #l-nav #list .el-menu-vertical-demo {
  border-right: none;
}
#messages #l-nav #list .item {
  transition: 0.5s;
  margin: 0;
  padding: 0 !important;
  padding-left: 15px !important;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  /* background:pink; */
}
#messages #l-nav #list .item .avatar {
  width: 42px;
  height: 42px;
  /* background:red; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  /* color:yellow; */
  border: 1px solid #3370ff;
}
#messages #l-nav #list .item .avatar img {
  width: 28px;
}
#messages #l-nav #list .item .info {
  width: calc(95% - 42px);
  height: 100%;
  /* background:green; */
  display: flex;
  flex-direction: column;
}
#messages #l-nav #list .item .info .box-header {
  box-sizing: border-box;
  width: 100%;
  height: 55%;
  /* margin-top:15px; */
  /* background:#3370ff; */
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: #333;
}
#messages #l-nav #list .item .info .box-header .name {
  width: 70%;
  height: 100%;
  /* background:red; */
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
}
#messages #l-nav #list .item .info .box-header .name .status {
  box-sizing: border-box;
  margin-left: 5px;
  height: 20px;
  /* width:30px; */
  line-height: 20px;
  /* overflow: hidden; */
  font-size: 6px;
  color: #3370ff;
  background-color: #e1eaff;
}
#messages #l-nav #list .item .info .box-header .date {
  align-self: center;
  box-sizing: border-box;
  line-height: 16px;
  font-size: 12px;
  width: 50px;
  margin-right: 10px;
  /* height:100%; */
  /* background:grey; */
  color: #8f959e;
}
#messages #l-nav #list .item .info .box-info p {
  overflow: hidden;
  text-overflow: ellipsis !important;
  line-height: 16px;
  /* text-align: start; */
}
#messages #l-nav #list .item .info .box-info {
  width: 100%;
  height: 45%;
  /* margin-bottom:50px; */
  /* background:yellow; */
  /* text-overflow: ellipsis */
}
#messages #r-main {
  margin-left: calc(22%);
  width: 78%;
  min-height: 200px;
  /* background:#000; */
}
</style>