<template>
	<div>
        <div class="position"><a href="admin_home.html">首页</a> > <span>房屋管理</span></div>
        <div class="admin_titleDiv">
            <p class="title">每日数据统计</p>
            <p class="subTitle">每日新增项目</p>
        </div>
        <div class="content admin_content">
            <div class="admin_flowDistribution">
                <div class="absTitleBar"></div>
                <div id="admin_flowDistribution"></div>
            </div>
            <div id="subsidiary"></div>
        </div>
	</div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  created(){
  },
  mounted() {
    
      console.log("vue, wanchengshishuhua")
      this.init();
  },

  methods: {
    init() {
      var admin_flowDistribution = echarts.init(
        document.getElementById("admin_flowDistribution")
      );
      var admin_flowDistributionOption = {
        title: [
          {
            text: "出入数量",
            left: "40px",
            top: "0",
            textStyle: {
              fontSize: 16,
              fontWeight: "normal",
              color: "#fff"
            }
          },
          {
            text: "2018-06-02~2018-07-08",
            right: "15%",
            textStyle: {
              color: "#c1c1c1",
              fontStyle: "normal",
              fontWeight: "200",
              fontSize: 14
            }
          }
        ],
        tooltip: {
          trigger: "axis",
          show: true,
          axisPointer: {
            lineStyle: {
              color: "#4394FA",
              width: 2
            }
          },
          extraCssText: "padding:10px;background:#4394FA;text-align:left;",
          formatter: function(params) {
            // 数据格式
            // var relVal = '2016-06-22 15:20'+"<br/>";
            var today = new Date();
            var y = today.getFullYear();
            var m = today.getMonth() + 1;
            var d = today.getDate();
            var h = today.getHours();
            var min = today.getMinutes();
            s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);

            function checkTime(i) {
              if (i < 10) {
                i = "0" + i;
              }
              return i;
            }

            var relVal =
              y +
              "-" +
              m +
              "-" +
              d +
              "&nbsp;" +
              h +
              ":" +
              min +
              ":" +
              s +
              "<br/>";
            for (var i = 0; i < params.length; i++) {
              relVal +=
                params[i].seriesName + " : " + params[i].value + "&nbsp;";
            }
            return relVal;
          }
        },
        legend: {
          data: ["临停", "固定"],
          icon: "emptyCircle",
          right: "20px",
          top: "0",
          textStyle: {
            color: "#79889f"
          }
        },
        grid: {
          top: "13%",
          left: "2%",
          right: "4%",
          bottom: "4%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2018-05-17",
            "2018-05-17",
            "2018-05-17",
            "2018-05-17",
            "2018-05-17",
            "2018-05-17",
            "2018-05-17",
            "2018-05-17",
            "2018-05-17",
            "2018-05-17"
          ],
          nameTextStyle: {
            color: "#ccc",
            lineHeight: 50
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: ["#ccc"]
            }
          },
          axisLine: {
            lineStyle: {
              color: ["#3a5e75"],
              width: 1
            }
          },
          axisLabel: {
            color: "#ccc"
          }
        },
        yAxis: {
          type: "value",
          nameTextStyle: {
            color: "#ccc"
          },
          axisLabel: {
            formatter: function(value) {
              return Math.floor(value / 2);
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#3a5e75"]
            }
          },
          axisLine: {
            lineStyle: {
              color: "#ccc",
              width: 0
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: "临停",
            type: "line",
            smooth: "true",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210, 90, 230, 210],
            areaStyle: {
              shadowColor:
                "linear-gradient(to bottom, rgba(28,125,250,.7), rgba(28,125,250,.3))"
            }
          },
          {
            name: "固定",
            type: "line",
            smooth: "true",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310, 290, 330, 310],
            areaStyle: {
              shadowColor:
                "linear-gradient(to bottom, rgba(83,215,105,.7), rgba(83,215,105,.3))"
            }
          }
        ],
        color: ["#1c7dfa", "#53d769"]
      };
      admin_flowDistribution.setOption(admin_flowDistributionOption);

      var subsidiary = echarts.init(document.getElementById("subsidiary"));
      var subsidiaryOption = {
        tooltip: {
          trigger: "axis",
          show: true,
          axisPointer: {
            lineStyle: {
              color: "#4394FA",
              width: 2
            }
          },
          extraCssText: "padding:10px;background:#4394FA;text-align:left;",
          formatter: function(params) {
            // 数据格式
            // var relVal = '2016-06-22 15:20'+"<br/>";
            var today = new Date();
            var y = today.getFullYear();
            var m = today.getMonth() + 1;
            var d = today.getDate();
            var h = today.getHours();
            var min = today.getMinutes();
            s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);

            function checkTime(i) {
              if (i < 10) {
                i = "0" + i;
              }
              return i;
            }

            var relVal =
              y +
              "-" +
              m +
              "-" +
              d +
              "&nbsp;" +
              h +
              ":" +
              min +
              ":" +
              s +
              "<br/>";
            for (var i = 0; i < params.length; i++) {
              relVal +=
                params[i].seriesName + " : " + params[i].value + "&nbsp;";
            }
            return relVal;
          }
        },
        grid: {
          top: 0,
          left: "-3%",
          right: 0,
          bottom: 0,
          containLabel: true
        },
        xAxis: {
          show: false,
          type: "category",
          boundaryGap: false,
          data: [
            "2018-05-17",
            "2018-05-17",
            "2018-05-17",
            "2018-05-17",
            "2018-05-17",
            "2018-05-17",
            "2018-05-17",
            "2018-05-17",
            "2018-05-17",
            "2018-05-17"
          ],
          nameTextStyle: {
            color: "#ccc",
            lineHeight: 50
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: ["#ccc"]
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: ["#3a5e75"],
              width: 1
            }
          },
          axisLabel: {
            show: false,
            color: "#ccc"
          }
        },
        yAxis: {
          show: false,
          type: "value"
        },
        series: [
          {
            name: "临停",
            type: "line",
            smooth: "true",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210, 90, 230, 210],
            areaStyle: {
              shadowColor:
                "linear-gradient(to bottom, rgba(28,125,250,.7), rgba(28,125,250,.3))"
            }
          },
          {
            name: "固定",
            type: "line",
            smooth: "true",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310, 290, 330, 310],
            areaStyle: {
              shadowColor:
                "linear-gradient(to bottom, rgba(83,215,105,.7), rgba(83,215,105,.3))"
            }
          }
        ],
        color: ["#1c7dfa", "#53d769"]
      };
      subsidiary.setOption(subsidiaryOption);
    }
  }
};
</script>
	
<style scoped>
@import url("../common/css/home.css");
</style>