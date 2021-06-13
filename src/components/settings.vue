<template>
  <div id="settings" class="animate__animated animate__fadeIn">
    <div id="form">
      <div class="title">基本信息</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择试卷形式">
            <el-option label="调查问卷" value="diaocha"></el-option>
            <el-option label="理论答题" value="dati"></el-option>
            <el-option label="大众投票" value="toupiao"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发布时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="限时答题" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <div class="block">
          <el-slider v-model="timevalue" show-input v-show="ruleForm.delivery"></el-slider>
        </div>
        <el-form-item label="答题人群" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="老师" name="type"></el-checkbox>
            <el-checkbox label="学生" name="type"></el-checkbox>
            <el-checkbox label="行政人员" name="type"></el-checkbox>
            <el-checkbox label="后勤人员" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="允许迟交" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="问卷介绍" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">保存信息</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <div class="title">事务日志</div>
      <div class="log">
        <div class="block">
          <el-timeline>
            <el-timeline-item timestamp="2021/6/1" placement="top">
              <el-card>
                <h4>创建该问卷</h4>
                <p>pengpenglang 提交于 2021/6/01 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2021/6/2" placement="top">
              <el-card>
                <h4>修改基本信息</h4>
                <p>pengpenglang 提交于 2021/6/02 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2021/6/18" placement="top">
              <el-card>
                <h4>编辑题目</h4>
                <p>pengpenglang 提交于 2021/6/18 20:46</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
      <div class="title">题目信息</div>
      <div class="log">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">{{'题目' + o +'题型:[单选题] 分值:[2分]'}}</div>
        </el-card>
        <el-button type="primary">编辑题目</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "settings",
  data() {
    return {
      timevalue: 60,
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入名称", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ],
        region: [{ required: true, message: "请选择类型", trigger: "change" }],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个调查群体",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择是否允许迟交", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写介绍内容", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const h = this.$createElement;
          this.$notify({
            title: "保存成功✔️",
            message: h("b", { style: "color: #333" }, "基础信息已保存成功！")
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


<style scoped>
#settings {
  width: 100%;
  min-height: 200px;
  /* background: pink; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
#settings #form {
  margin-top: 30px;
  width: 90%;
}
#settings #form .title {
  position: relative;
  font-family: "NSimSun";
  margin-top: 10px;
  margin-bottom: 30px;
  margin-left: 5%;
  font-size: 1.5rem;
  font-weight: 700;
}
.block {
  margin: 0 auto;
  width: 70%;
}
#settings #form .title::after {
  z-index: 0;
  content: "";
  position: absolute;
  top: 50%;
  right: 101%;
  width: 3%;
  height: 1px;
  background: #333;
}
#settings #form .title::before {
  z-index: 0;
  content: "";
  position: absolute;
  top: 50%;
  left: 120px;
  width: 90%;
  height: 1px;
  background: #333;
}
#settings #form .log {
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  /* justify-content: cente */
  align-items: center;
}
#settings #form .box-card {
  width: 90%;
  margin-bottom: 10px;
}
</style>