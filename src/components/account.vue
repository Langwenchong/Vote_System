<template>
  <div id="account">
    <div id="l-main">
      <div id="contributions" class="animate__animated animate__fadeIn">
        <div id="calendar"></div>
      </div>
      <div id="progress">
        <div class="box">
          <p id="Minute_Num" style="color: black;">问卷正确率:</p>
          <div id="first" class="bar orange active"></div>
        </div>
        <div class="box">
          <p id="Hour_Num" style="color: black;">问卷得分率:</p>
          <div id="second" class="bar red active" data-percent></div>
        </div>
        <div class="box">
          <p id="Day_Num" style="color: black;">投票有效贡献率:</p>
          <div id="third" class="bar mint active" data-percent></div>
        </div>
        <div class="box">
          <p id="Date_Num" style="color: black;">投票从众率:</p>
          <div id="fourth" class="bar lila active" data-percent></div>
        </div>
      </div>
      <div id="pin">
        <h6>Pinned</h6>
        <div id="pin-container">
          <div class="pin-box animate__animated animate__flipInX" v-for="box in arr" :key="box.id">
            <div class="title">
              <span>
                <i class="bx bxs-book-bookmark"></i><b>{{box.title}}</b>
              </span>
              <i class="bx bx-dialpad"></i>
            </div>
            <p class="info">
                {{box.subtitle}}
            </p>
            <div id="status">
                <div class="point" v-state="box.class"></div><span>{{box.class}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="r-bar" class="animate__animated animate__fadeInRight">
      <div id="avatar">
        <div id="imgBx">
          <img :src="avatar" />
          <div id="status">
            <p id="icon" :title="status">👨‍🎓</p>
          </div>
        </div>
      </div>
      <div id="info">
        <div id="me">
          <h2>{{name}}</h2>
          <p id="subtitle">「 {{subtitle}} 」</p>
          <div id="friends">
            <span class="tag">
              <i class="bx bx-group"></i>
              <b>{{followers}}</b> followers
            </span>
            <span class="tag">
              <i class="bx bx-group"></i>
              <b>{{following}}</b> following
            </span>
          </div>
          <div id="other-info">
            <span class="tag">
              <i class="bx bx-building-house"></i>
              {{address}}
            </span>
            <span class="tag">
              <i class="bx bxs-graduation"></i>
              {{grade}}
            </span>
            <span class="tag">
              <i class="bx bx-link"></i>
              <a :href="link">{{link}}</a>
            </span>
          </div>
          <div id="highlight">
            <b>Achievements</b>
            <div id="ach">
              <img v-for="(item,i) in achs" :key="i" :src="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "account",
  directives: {
    state: function(el, binding) {
      if (binding.value === "问卷调查") {
        el.style.backgroundColor = "#f34b7d";
      } else if (binding.value === "大众投票") {
        el.style.backgroundColor = "#41b883";
      } else if (binding.value === "理论答题") {
        el.style.backgroundColor = "#f1e05a";
      }
    }
  },
  mounted() {
    setTimeout(function() {
      var temp1 = document.getElementById("first");
      temp1.style.width = "63%";
      var temp2 = document.getElementById("second");
      temp2.style.width = "42%";
      var temp3 = document.getElementById("third");
      temp3.style.width = "51%";
      var temp4 = document.getElementById("fourth");
      temp4.style.width = "53%";
    }, 100);
    setTimeout(function(){
        $('#account').css("overflow-x","visible");
    },2000)
    let myChart = echarts.init(document.getElementById("calendar"));
    let option = {
      title: {
        top: 0,
        text: "",
        left: "left",
        textStyle: {
          color: "#3C4858"
        }
      },
      tooltip: {
        padding: 10,
        backgroundColor: "#555",
        borderColor: "#777",
        borderWidth: 1,
        formatter: function(obj) {
          var value = obj.value;
          return (
            '<div style="font-size: 14px;">' +
            value[0] +
            "：" +
            value[1] +
            "</div>"
          );
        }
      },
      visualMap: {
        show: true,
        showLabel: true,
        categories: [0, 1, 2, 3, 4],
        calculable: true,
        inRange: {
          symbol: "rect",
          color: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"]
        },
        itemWidth: 12,
        itemHeight: 12,
        orient: "horizontal",
        left: "center",
        bottom: 0
      },
      calendar: [
        {
          left: "center",
          range: ["2020-06-09", "2021-06-09"],
          cellSize: [13, 13],
          splitLine: {
            show: false
          },
          itemStyle: {
            width: "1.88679%",
            height: "15px",
            color: "#EEEEEE",
            borderColor: "#FFF",
            borderWidth: 2
          },
          yearLabel: {
            show: false
          },
          monthLabel: {
            nameMap: "cn",
            fontWeight: "lighter",
            fontSize: 12
          },
          dayLabel: {
            show: true,
            formatter: "{start}  1st",
            fontWeight: "lighter",
            nameMap: ["日", " ", " ", "三", " ", " ", "六"],
            fontSize: 12
          }
        }
      ],
      series: [
        {
          type: "heatmap",
          coordinateSystem: "calendar",
          calendarIndex: 0,
          data: [
            ["2020-06-09", 0],
            ["2020-06-10", 0],
            ["2020-06-11", 0],
            ["2020-06-12", 0],
            ["2020-06-13", 0],
            ["2020-06-14", 0],
            ["2020-06-15", 0],
            ["2020-06-16", 0],
            ["2020-06-17", 0],
            ["2020-06-18", 0],
            ["2020-06-19", 0],
            ["2020-06-20", 0],
            ["2020-06-21", 0],
            ["2020-06-22", 0],
            ["2020-06-23", 0],
            ["2020-06-24", 0],
            ["2020-06-25", 0],
            ["2020-06-26", 0],
            ["2020-06-27", 0],
            ["2020-06-28", 0],
            ["2020-06-29", 0],
            ["2020-06-30", 0],
            ["2020-07-01", 0],
            ["2020-07-02", 0],
            ["2020-07-03", 0],
            ["2020-07-04", 1],
            ["2020-07-05", 2],
            ["2020-07-06", 1],
            ["2020-07-07", 1],
            ["2020-07-08", 3],
            ["2020-07-09", 2],
            ["2020-07-10", 2],
            ["2020-07-11", 2],
            ["2020-07-12", 1],
            ["2020-07-13", 1],
            ["2020-07-14", 1],
            ["2020-07-15", 1],
            ["2020-07-16", 2],
            ["2020-07-17", 1],
            ["2020-07-18", 3],
            ["2020-07-19", 4],
            ["2020-07-20", 1],
            ["2020-07-21", 1],
            ["2020-07-22", 2],
            ["2020-07-23", 2],
            ["2020-07-24", 0],
            ["2020-07-25", 2],
            ["2020-07-26", 0],
            ["2020-07-27", 1],
            ["2020-07-28", 1],
            ["2020-07-29", 1],
            ["2020-07-30", 1],
            ["2020-07-31", 1],
            ["2020-08-01", 0],
            ["2020-08-02", 0],
            ["2020-08-03", 1],
            ["2020-08-04", 0],
            ["2020-08-05", 2],
            ["2020-08-06", 1],
            ["2020-08-07", 0],
            ["2020-08-08", 0],
            ["2020-08-09", 1],
            ["2020-08-10", 1],
            ["2020-08-11", 2],
            ["2020-08-12", 1],
            ["2020-08-13", 0],
            ["2020-08-14", 1],
            ["2020-08-15", 0],
            ["2020-08-16", 2],
            ["2020-08-17", 1],
            ["2020-08-18", 1],
            ["2020-08-19", 1],
            ["2020-08-20", 0],
            ["2020-08-21", 0],
            ["2020-08-22", 0],
            ["2020-08-23", 1],
            ["2020-08-24", 1],
            ["2020-08-25", 1],
            ["2020-08-26", 1],
            ["2020-08-27", 1],
            ["2020-08-28", 1],
            ["2020-08-29", 1],
            ["2020-08-30", 1],
            ["2020-08-31", 1],
            ["2020-09-01", 1],
            ["2020-09-02", 1],
            ["2020-09-03", 1],
            ["2020-09-04", 1],
            ["2020-09-05", 1],
            ["2020-09-06", 1],
            ["2020-09-07", 1],
            ["2020-09-08", 1],
            ["2020-09-09", 1],
            ["2020-09-10", 1],
            ["2020-09-11", 1],
            ["2020-09-12", 1],
            ["2020-09-13", 0],
            ["2020-09-14", 0],
            ["2020-09-15", 1],
            ["2020-09-16", 1],
            ["2020-09-17", 1],
            ["2020-09-18", 0],
            ["2020-09-19", 1],
            ["2020-09-20", 1],
            ["2020-09-21", 1],
            ["2020-09-22", 1],
            ["2020-09-23", 1],
            ["2020-09-24", 1],
            ["2020-09-25", 0],
            ["2020-09-26", 0],
            ["2020-09-27", 0],
            ["2020-09-28", 0],
            ["2020-09-29", 0],
            ["2020-09-30", 1],
            ["2020-10-01", 1],
            ["2020-10-02", 1],
            ["2020-10-03", 0],
            ["2020-10-04", 1],
            ["2020-10-05", 1],
            ["2020-10-06", 0],
            ["2020-10-07", 1],
            ["2020-10-08", 1],
            ["2020-10-09", 0],
            ["2020-10-10", 0],
            ["2020-10-11", 1],
            ["2020-10-12", 0],
            ["2020-10-13", 0],
            ["2020-10-14", 1],
            ["2020-10-15", 1],
            ["2020-10-16", 1],
            ["2020-10-17", 1],
            ["2020-10-18", 1],
            ["2020-10-19", 1],
            ["2020-10-20", 1],
            ["2020-10-21", 1],
            ["2020-10-22", 0],
            ["2020-10-23", 1],
            ["2020-10-24", 1],
            ["2020-10-25", 1],
            ["2020-10-26", 0],
            ["2020-10-27", 1],
            ["2020-10-28", 0],
            ["2020-10-29", 0],
            ["2020-10-30", 0],
            ["2020-10-31", 0],
            ["2020-11-01", 1],
            ["2020-11-02", 1],
            ["2020-11-03", 1],
            ["2020-11-04", 0],
            ["2020-11-05", 1],
            ["2020-11-06", 1],
            ["2020-11-07", 1],
            ["2020-11-08", 0],
            ["2020-11-09", 1],
            ["2020-11-10", 0],
            ["2020-11-11", 0],
            ["2020-11-12", 1],
            ["2020-11-13", 1],
            ["2020-11-14", 0],
            ["2020-11-15", 1],
            ["2020-11-16", 0],
            ["2020-11-17", 1],
            ["2020-11-18", 0],
            ["2020-11-19", 0],
            ["2020-11-20", 0],
            ["2020-11-21", 1],
            ["2020-11-22", 0],
            ["2020-11-23", 0],
            ["2020-11-24", 1],
            ["2020-11-25", 1],
            ["2020-11-26", 1],
            ["2020-11-27", 0],
            ["2020-11-28", 1],
            ["2020-11-29", 1],
            ["2020-11-30", 1],
            ["2020-12-01", 1],
            ["2020-12-02", 1],
            ["2020-12-03", 1],
            ["2020-12-04", 0],
            ["2020-12-05", 0],
            ["2020-12-06", 1],
            ["2020-12-07", 0],
            ["2020-12-08", 1],
            ["2020-12-09", 1],
            ["2020-12-10", 1],
            ["2020-12-11", 0],
            ["2020-12-12", 0],
            ["2020-12-13", 0],
            ["2020-12-14", 1],
            ["2020-12-15", 1],
            ["2020-12-16", 0],
            ["2020-12-17", 1],
            ["2020-12-18", 0],
            ["2020-12-19", 0],
            ["2020-12-20", 0],
            ["2020-12-21", 0],
            ["2020-12-22", 0],
            ["2020-12-23", 0],
            ["2020-12-24", 0],
            ["2020-12-25", 0],
            ["2020-12-26", 0],
            ["2020-12-27", 0],
            ["2020-12-28", 0],
            ["2020-12-29", 0],
            ["2020-12-30", 1],
            ["2020-12-31", 0],
            ["2021-01-01", 1],
            ["2021-01-02", 0],
            ["2021-01-03", 1],
            ["2021-01-04", 1],
            ["2021-01-05", 0],
            ["2021-01-06", 1],
            ["2021-01-07", 0],
            ["2021-01-08", 0],
            ["2021-01-09", 0],
            ["2021-01-10", 1],
            ["2021-01-11", 0],
            ["2021-01-12", 1],
            ["2021-01-13", 0],
            ["2021-01-14", 0],
            ["2021-01-15", 0],
            ["2021-01-16", 0],
            ["2021-01-17", 0],
            ["2021-01-18", 0],
            ["2021-01-19", 1],
            ["2021-01-20", 0],
            ["2021-01-21", 1],
            ["2021-01-22", 1],
            ["2021-01-23", 0],
            ["2021-01-24", 0],
            ["2021-01-25", 0],
            ["2021-01-26", 0],
            ["2021-01-27", 0],
            ["2021-01-28", 0],
            ["2021-01-29", 0],
            ["2021-01-30", 0],
            ["2021-01-31", 0],
            ["2021-02-01", 0],
            ["2021-02-02", 0],
            ["2021-02-03", 1],
            ["2021-02-04", 0],
            ["2021-02-05", 0],
            ["2021-02-06", 1],
            ["2021-02-07", 0],
            ["2021-02-08", 0],
            ["2021-02-09", 0],
            ["2021-02-10", 0],
            ["2021-02-11", 0],
            ["2021-02-12", 0],
            ["2021-02-13", 0],
            ["2021-02-14", 0],
            ["2021-02-15", 0],
            ["2021-02-16", 0],
            ["2021-02-17", 0],
            ["2021-02-18", 0],
            ["2021-02-19", 0],
            ["2021-02-20", 0],
            ["2021-02-21", 0],
            ["2021-02-22", 0],
            ["2021-02-23", 0],
            ["2021-02-24", 0],
            ["2021-02-25", 1],
            ["2021-02-26", 0],
            ["2021-02-27", 0],
            ["2021-02-28", 0],
            ["2021-03-01", 0],
            ["2021-03-02", 1],
            ["2021-03-03", 0],
            ["2021-03-04", 0],
            ["2021-03-05", 0],
            ["2021-03-06", 0],
            ["2021-03-07", 0],
            ["2021-03-08", 1],
            ["2021-03-09", 0],
            ["2021-03-10", 0],
            ["2021-03-11", 0],
            ["2021-03-12", 1],
            ["2021-03-13", 0],
            ["2021-03-14", 1],
            ["2021-03-15", 1],
            ["2021-03-16", 1],
            ["2021-03-17", 0],
            ["2021-03-18", 0],
            ["2021-03-19", 0],
            ["2021-03-20", 1],
            ["2021-03-21", 0],
            ["2021-03-22", 0],
            ["2021-03-23", 0],
            ["2021-03-24", 0],
            ["2021-03-25", 1],
            ["2021-03-26", 0],
            ["2021-03-27", 0],
            ["2021-03-28", 0],
            ["2021-03-29", 0],
            ["2021-03-30", 1],
            ["2021-03-31", 1],
            ["2021-04-01", 0],
            ["2021-04-02", 0],
            ["2021-04-03", 1],
            ["2021-04-04", 1],
            ["2021-04-05", 1],
            ["2021-04-06", 0],
            ["2021-04-07", 0],
            ["2021-04-08", 0],
            ["2021-04-09", 0],
            ["2021-04-10", 1],
            ["2021-04-11", 1],
            ["2021-04-12", 1],
            ["2021-04-13", 0],
            ["2021-04-14", 1],
            ["2021-04-15", 0],
            ["2021-04-16", 0],
            ["2021-04-17", 0],
            ["2021-04-18", 0],
            ["2021-04-19", 0],
            ["2021-04-20", 1],
            ["2021-04-21", 0],
            ["2021-04-22", 0],
            ["2021-04-23", 0],
            ["2021-04-24", 0],
            ["2021-04-25", 1],
            ["2021-04-26", 0],
            ["2021-04-27", 0],
            ["2021-04-28", 1],
            ["2021-04-29", 0],
            ["2021-04-30", 0],
            ["2021-05-01", 0],
            ["2021-05-02", 0],
            ["2021-05-03", 0],
            ["2021-05-04", 1],
            ["2021-05-05", 0],
            ["2021-05-06", 1],
            ["2021-05-07", 1],
            ["2021-05-08", 0],
            ["2021-05-09", 1],
            ["2021-05-10", 0],
            ["2021-05-11", 0],
            ["2021-05-12", 1],
            ["2021-05-13", 0],
            ["2021-05-14", 0],
            ["2021-05-15", 1],
            ["2021-05-16", 0],
            ["2021-05-17", 1],
            ["2021-05-18", 0],
            ["2021-05-19", 0],
            ["2021-05-20", 0],
            ["2021-05-21", 0],
            ["2021-05-22", 1],
            ["2021-05-23", 0],
            ["2021-05-24", 1],
            ["2021-05-25", 0],
            ["2021-05-26", 0],
            ["2021-05-27", 0],
            ["2021-05-28", 0],
            ["2021-05-29", 0],
            ["2021-05-30", 0],
            ["2021-05-31", 0],
            ["2021-06-01", 0],
            ["2021-06-02", 0],
            ["2021-06-03", 0],
            ["2021-06-04", 0],
            ["2021-06-05", 1],
            ["2021-06-06", 1],
            ["2021-06-07", 1],
            ["2021-06-08", 0],
            ["2021-06-09", 0]
          ]
        }
      ]
    };
    myChart.setOption(option);
  },
  data() {
    return {
        arr:[
            {
                id:"1",
                class:"问卷调查",
                title:"大学GPA平均调查",
                subtitle:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum laboriosam voluptas distinctio, veniam quia aspernatur."
            },
            {
                id:"2",
                class:"问卷调查",
                title:"大学平均月消费水平调查",
                subtitle:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum laboriosam voluptas distinctio, veniam quia aspernatur."
            },
            {
                id:"3",
                class:"大众投票",
                title:"中国地质大学宿舍是否引入空调",
                subtitle:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum laboriosam voluptas distinctio, veniam quia aspernatur."
            },
            {
                id:"4",
                class:"理论答题",
                title:"形势与政策答题",
                subtitle:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum laboriosam voluptas distinctio, veniam quia aspernatur."
            },
            {
                id:"5",
                class:"问卷调查",
                title:"大学自我颜值评价调查",
                subtitle:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum laboriosam voluptas distinctio, veniam quia aspernatur."
            },
            {
                id:"6",
                class:"理论答题",
                title:"心理健康测试",
                subtitle:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum laboriosam voluptas distinctio, veniam quia aspernatur."
            },
            {
                id:"7",
                class:"大众投票",
                title:"校园食堂菜价是够过高",
                subtitle:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum laboriosam voluptas distinctio, veniam quia aspernatur."
            },
            {
                id:"8",
                class:"问卷调查",
                title:"大学学习状况自我评价调查",
                subtitle:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum laboriosam voluptas distinctio, veniam quia aspernatur."
            },
            {
                id:"9",
                class:"理论答题",
                title:"《青年大学习》课后题",
                subtitle:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum laboriosam voluptas distinctio, veniam quia aspernatur."
            },
            {
                id:"10",
                class:"大众投票",
                title:"军训服装样式选定",
                subtitle:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum laboriosam voluptas distinctio, veniam quia aspernatur."
            },
        ],
      achs: [
        "../../static/images/ach1.png",
        "../../static/images/ach2.png",
        "../../static/images/ach3.png"
      ],
      link: "https://pengpenglang.vip",
      grade: "2019级",
      address: "中国地质大学(北京校区)",
      status: "student",
      followers: "2.3k",
      following: "300",
      name: "Peng Peng Lang",
      subtitle: "保持热爱，奔赴山海",
      avatar: "https://pengpenglang.vip/img/avatar.jpg"
    };
  }
};
</script>

<style scoped>
#account {
  /* min-height: 1000px; */
  /* background:pink; */
  width: 100%;
  display: flex;
  overflow-x: hidden;
}
#r-bar {
  width: 30%;
  /* min-height: 300px; */
  /* background:yellow; */
  display: flex;
  flex-direction: column;
}
#l-main {
  /* background: #2188ff; */
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 70%;
  min-height: 200px;
}
#l-main #contributions {
  margin: 0 auto;
  width: 95%;
  margin-top: 70px;
  border: 1px solid #e1e4e8;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
#l-main #calendar {
  width: 100%;
  height: 230px;
  overflow: hidden;
}
#l-main #progress {
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left: 35px;
  margin-top: 20px;
}
#l-main #pin {
  margin: 20px auto;
  width: 95%;
}
#l-main #pin-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
#l-main #pin-container .pin-box {
  width: 47%;
  height: 130px;
  /* background: pink; */
  border-radius: 6px;
  border: 1px solid #e1e4e8;
  box-sizing: border-box;
  padding: 16px;
  margin-bottom:15px;
}
.point{
    width:10px;
    height:10px;
    margin-right: 8px;
    border-radius: 50%;
    display:inline-block;
}
#l-main #pin-container .pin-box .title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#l-main #pin-container .pin-box .title b{
    color:#0366d6;
    font-size:16px;
    line-height:20px;
    margin:0;
    padding:0;
}
#l-main #pin-container .pin-box .title i{
    margin-right:5px;
    color:#586069;
    font-size:18px;
}
#l-main #pin-container .pin-box .info{
    color:#586069;
    margin-top:8px;
    font-size:12px;
    margin-bottom: 5px;
}
#l-main #pin-container .pin-box .point span{
    font-size:10px;
}
@keyframes barberpole {
  from {
    background-position: 0% 0%;
  }

  to {
    background-position: 600px 0%;
  }
}
#l-main #progress .box {
  width: 45%;
  display: flex;
  align-items: center;
}
.box p {
  /* font-size:16px; */
  margin: 0;
  padding: 0;
}
.bar {
  height: 30px;
  width: 0;
  transition: width 1.2s ease-in-out;
  position: relative;
  margin: 0.5rem 0;
  border-radius: 8px;
  /* min-width: 0 !important; */
  margin-left: 10px;
}
.bar.mint {
  background-color: #14c3a2;
  background-image: repeating-linear-gradient(
    -45deg,
    #14c3a2,
    #14c3a2 30px,
    #22e8c3 30px,
    #22e8c3 60px
  );
  background-size: 600px 100%;
  animation: barberpole 12s linear infinite;
  border-bottom: 0.2rem solid #0d7e68;
}
.bar.red {
  background-color: #cf4647;
  background-image: repeating-linear-gradient(
    -45deg,
    #cf4647,
    #cf4647 30px,
    #da6e6f 30px,
    #da6e6f 60px
  );
  background-size: 600px 100%;
  animation: barberpole 12s linear infinite;
  border-bottom: 0.2rem solid #9f292a;
}
.bar.orange {
  background-color: #eb7b59;
  background-image: repeating-linear-gradient(
    -45deg,
    #eb7b59,
    #eb7b59 30px,
    #f09f87 30px,
    #f09f87 60px
  );
  background-size: 600px 100%;
  animation: barberpole 12s linear infinite;
  border-bottom: 0.2rem solid #dd481b;
}
.bar.lila {
  background-color: #524656;
  background-image: repeating-linear-gradient(
    -45deg,
    #524656,
    #524656 30px,
    #6d5d72 30px,
    #6d5d72 60px
  );
  background-size: 600px 100%;
  animation: barberpole 12s linear infinite;
  border-bottom: 0.2rem solid #2a242c;
}
.bar.gray {
  background-color: #595b5a;
  background-image: repeating-linear-gradient(
    -45deg,
    #595b5a,
    #595b5a 30px,
    #727574 30px,
    #727574 60px
  );
  background-size: 600px 100%;
  animation: barberpole 12s linear infinite;
  border-bottom: 0.2rem solid #333434;
}
.bar.active:after,
.bar.active:before {
  opacity: 1;
}
.bar:before {
  content: attr(data-skill);
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  height: 40px;
  font-style: italic;
  opacity: 0;
  transition: opacity 2s 0.6s;
}
#avatar {
  margin-top: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#imgBx {
  position: relative;
  width: 280px;
  height: 280px;
  background: #fff;
  border-radius: 50%;
  border: 1px solid #e1e4e8;
  /* overflow: hidden; */
  display: flex;
  justify-content: center;
  align-items: center;
}

#imgBx img {
  width: 200px;
  object-fit: cover;
  border-radius: 50%;
}
#imgBx #status {
  position: absolute;
  width: 38px;
  padding: 4px;
  height: 38px;
  overflow: hidden;
  bottom: 2px;
  right: 35px;
  border-radius: 50%;
  border: 1px solid #e1e4e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  z-index: 2;
  transition: 0.5s;
}
#status p {
  margin: 0px;
}
#icon {
  cursor: pointer;
  font-size: 24px;
  padding-right: 15px;
}
#info {
  margin-top: 10px;
  position: sticky;
  top: 40px;
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 200px;
  /* background:red; */
  align-items: center;
}
#me {
  width: 280px;
  /* height:100px; */
  /* background:pink; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
#me h2 {
  font-family: "Dancing Script", cursive;
  font-weight: 700;
}
#me #subtitle {
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  color: #586069;
}
#me #friends {
  width: 100%;
  height: 38px;
  /* background: green; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #e1e4e8;
}
#me #friends .tag {
  font-size: 14px;
  color: #333;
  transition: 0.5s;
}
#me #friends .tag:hover {
  color: #2188ff;
  cursor: pointer;
}
#other-info {
  margin-top: 10px;
  padding-bottom: 8px;
  width: 100%;
  /* height: 58px; */
  /* background: green; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  border-bottom: 1px solid #e1e4e8;
}
#me #other-info .tag {
  margin-top: 8px;
  margin-left: 8px;
  font-size: 18px;
  color: #333;
  transition: 0.5s;
}
a {
  color: #333;
}
#me #highlight {
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
#me #highlight b {
  margin-left: 20px;
}
#me #highlight #ach {
  margin-left: 20px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  /* justify-content: space-between */
}
#me #highlight #ach img {
  width: 40px;
  margin-left: 20px;
}
</style>