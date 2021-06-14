<template>
  <div id="votebox">
    <div class="left">
      <div class="top">
        <b>{{index+1}}.[投票]&nbsp;分数:{{num}}分&nbsp;是否必做:{{isNec?"是":"否"}}&nbsp;选项乱序:{{isRan?"是":"否"}}&nbsp;</b>
      </div>
      <div class="bottom">
        <textarea class="item" v-focus placeholder="请输入待投票提议" v-model="title" />
        <div class="switch">
          <div>
            <span>是否必做</span>
            <el-switch
              v-model="isNec"
              active-color="rgba(23, 162, 184, 0.9)"
              inactive-color="#ff4949"
            ></el-switch>
          </div>
          <div>
            <span>选项乱序</span>
            <el-switch
              v-model="isRan"
              active-color="rgba(23, 162, 184, 0.9)"
              inactive-color="#ff4949"
            ></el-switch>
          </div>
        </div>
        <div class="point">
          <span>题目分数:&nbsp;</span>
          <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "votebox",
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
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
    this.$emit("Updatedata", updatedata, this.index, 5);
  },
  methods: {
    del(id) {
      if (this.arr.length > 1) {
        for (let i = 0; i < this.arr.length; i++) {
          if (this.arr[i].id === id) {
            // console.log(id);
            this.arr.splice(i, 1);
          }
        }
      } else {
        this.$message({
          showClose: true,
          message: "不能再删除了，单选题至少要有一个选项！",
          type: "warning"
        });
      }
    },
    add() {
      var tmp = 0;
      tmp = this.arr[this.arr.length - 1].id + 1;
      this.arr.push({
        id: tmp,
        value: ""
      });
    }
  },
  data() {
    return {
      num: 2,
      title: "",
      isNec: true,
      isRan: true
    };
  }
};
</script>

<style scoped>
#votebox {
  width: 100%;
  /* height: 200px; */
  /* background: pink; */
  display: flex;
}
#votebox .right {
  width: 40%;
  min-height: 200px;
  padding-top: 20px;
  /* background: black; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
#votebox .left .switch {
  margin-top: 20px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}
#votebox .right .upload-demo {
  transform: scale(90%);
}
#votebox .left .point {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
#votebox .left {
  display: flex;
  flex-direction: column;
  width: 60%;
  min-height: 100px;
  /* background: red; */
}
#votebox .left .top {
  font-family: "NSimSun";
  width: 100%;
  height: 48px;
  /* background: green; */
}
#votebox .left .bottom {
  width: 100%;
  display: flex;
  flex-direction: column;
  /* height: 200px; */
  /* background: grey; */
}
#votebox .left .bottom .item {
  opacity: 0.8;
  border-radius: 5px;
  padding: 5px;
  resize: none;
  min-height: 80px;
  width: 90%;
}
</style>