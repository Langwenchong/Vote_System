<template>
  <div id="checkbox">
    <div class="left">
      <div class="top">
        <b>{{index+1}}.[多选题]&nbsp;分数:{{num}}分&nbsp;是否必做:{{isNec?"是":"否"}}&nbsp;选项乱序:{{isRan?"是":"否"}}&nbsp;</b>
      </div>
      <div class="bottom">
        <textarea class="item" v-focus placeholder="请输入题目信息" v-model="title" />
        <div class="choices">
          <transition-group appear>
            <div class="choice" v-for="(el,i) in arr" :key="el.id">
              <span>选项{{i+1}}:</span>
              <div class="op">
                <el-input
                  class="box"
                  type="input"
                  clearable
                  placeholder="请输入内容"
                  v-model="arr[i].value"
                ></el-input>
                <el-popconfirm
                  confirm-button-text="好的"
                  cancel-button-text="不用了"
                  icon="el-icon-info"
                  icon-color="red"
                  title="这是一段内容确定删除吗？"
                  @confirm="del(el.id)"
                >
                  <el-button slot="reference" class="confirm">删除</el-button>
                </el-popconfirm>
              </div>
            </div>
          </transition-group>
          <el-button round @click="add">添加选项</el-button>
        </div>
      </div>
    </div>
    <div class="right">
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <div class="switch">
        <div>
          <span>是否必做</span>
          <el-switch v-model="isNec" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </div>
        <div>
          <span>选项乱序</span>
          <el-switch v-model="isRan" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </div>
      </div>
      <div class="point">
        <span>题目分数:&nbsp;</span>
        <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkbox",
  props: {
    index: Number
  },
  updated() {
    var updatedata = {
      title: this.title,
      isNec: this.isNec,
      isRan: this.isRan,
      point: this.num,
      choices: this.arr
    };
    this.$emit("Updatedata", updatedata, this.index, 1);
  },
  methods: {
    del(id) {
      if (this.arr.length > 2) {
        for (let i = 0; i < this.arr.length; i++) {
          if (this.arr[i].id === id) {
            // console.log(id);
            this.arr.splice(i, 1);
          }
        }
      } else {
        this.$message({
          showClose: true,
          message: "不能再删除了，多选题至少要有两个选项！",
          type: "warning"
        });
      }
    },
    add() {
      var tmp = 0;
      if (this.arr.length > 0) tmp = this.arr[this.arr.length - 1].id + 1;
      else tmp = 1;
      this.arr.push({
        id: tmp,
        value: ""
      });
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  data() {
    return {
      num: 2,
      title: "",
      isNec: true,
      isRan: true,
      arr: [
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
    };
  }
};
</script>

<style scoped>
#checkbox {
  width: 100%;
  /* height: 200px; */
  /* background: pink; */
  display: flex;
}
#checkbox .right {
  width: 40%;
  min-height: 200px;
  padding-top: 20px;
  /* background: black; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
#checkbox .right .switch {
  margin-top: 60px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}
#checkbox .right .upload-demo {
  transform: scale(90%);
}
#checkbox .right .point {
  display: flex;
  /* justify-content: space-between */
  align-items: center;
  margin-top: 15px;
}
#checkbox .left {
  display: flex;
  flex-direction: column;
  width: 60%;
  min-height: 100px;
  /* background: red; */
}
#checkbox .left .top {
  font-family: "NSimSun";
  width: 100%;
  height: 48px;
  /* background: green; */
}
#checkbox .left .bottom {
  width: 100%;
  display: flex;
  flex-direction: column;
  /* height: 200px; */
  /* background: grey; */
}
#checkbox .left .bottom .item {
  opacity: 0.8;
  border-radius: 5px;
  padding: 5px;
  resize: none;
  min-height: 120px;
  width: 90%;
}
#checkbox .left .bottom .choices {
  position: relative;
}
#checkbox .left .bottom .choices .choice {
  margin-top: 5px;
  width: 100%;
  margin-bottom: 5px;
}
#checkbox .left .bottom .choices .choice .op {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#checkbox .left .bottom .choices .choice .op .confirm {
  transform: scale(70%);
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