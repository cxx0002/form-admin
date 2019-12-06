<template>
  <div class="search">
    <div class="head">
      <!-- Single button -->
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-default dropdown-toggle size-160"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          广告位类型
          <span class="bs-caret">
            <span class="caret"></span>
          </span>
        </button>
        <ul class="dropdown-menu">
          <li>
            <a href="#">Action</a>
          </li>
          <li>
            <a href="#">Another action</a>
          </li>
          <li>
            <a href="#">Something else here</a>
          </li>
          <li role="separator" class="divider"></li>
          <li>
            <a href="#">Separated link</a>
          </li>
        </ul>
      </div>
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-default dropdown-toggle size-160"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          媒体
          <span class="bs-caret">
            <span class="caret"></span>
          </span>
        </button>
        <ul class="dropdown-menu">
          <li>
            <a href="#">Action</a>
          </li>
          <li>
            <a href="#">Another action</a>
          </li>
          <li>
            <a href="#">Something else here</a>
          </li>
          <li role="separator" class="divider"></li>
          <li>
            <a href="#">Separated link</a>
          </li>
        </ul>
      </div>

      <div class="btn-group">
        <button
          type="button"
          class="btn btn-default dropdown-toggle size-160"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          广告位
          <span class="bs-caret">
            <span class="caret"></span>
          </span>
        </button>
        <ul class="dropdown-menu">
          <li>
            <a href="#">Action</a>
          </li>
          <li>
            <a href="#">Another action</a>
          </li>
          <li>
            <a href="#">Something else here</a>
          </li>
          <li role="separator" class="divider"></li>
          <li>
            <a href="#">Separated link</a>
          </li>
        </ul>
      </div>
      <input type="text" style="width:240px" />
      <a class="btn btn-primary btn-100">查询</a>
      <a class="btn btn-primary btn-120" style="margin-left:120px">下载报告</a>
    </div>

    <div class="report">
      <div class="r1">
        <p class="report-name">总展现量</p>
        <p class="report-value">1,296,724</p>
      </div>
      <div class="r2">
        <p class="report-name">总点击量</p>
        <p class="report-value">20,202</p>
      </div>
      <div class="r3">
        <p class="report-name">总分成收入</p>
        <p class="report-value">
         52,727.22
          <span>元</span>
        </p>
      </div>
      <div class="r3">
        <p class="report-name">总千次展示收益</p>
        <p class="report-value">
           2.61
          <span>元</span>
        </p>
      </div>
      <div class="r3">
        <p class="report-name">总点击率</p>
        <p class="report-value">
          1.32
          <span>%</span>
        </p>
      </div>
    </div>
    <div class="qushi">数据走势</div>
    <div class="rect" id="report"></div>
    <div class="rectTitle">
      <div>
        <i class="glyphicon glyphicon-ok"></i>
        <span>广告展示数</span>
      </div>
      <div>
        <i class="glyphicon glyphicon-ok"></i>
        <span>预计收益</span>
      </div>
      <div>
        <i></i>
        <span>点击量</span>
      </div>
      <div>
        <i></i>
        <span>千次展示收益</span>
      </div>
      <div>
        <i></i>
        <span>点击率</span>
      </div>
    </div>
    <table class="table">
      <caption class="qushi">数据报表</caption>
      <thead>
        <tr class="tt">
          <th style="color:#3185fc">
            日期
            <span class="caret flag-sort"></span>
          </th>
          <th>媒体</th>
          <th style="width:200px"></th>
          <th style="color:#3185fc">
            广告展示量
            <span class="caret flag-sort"></span>
          </th>
          <th style="color:#3185fc">
            点击量
            <span class="caret flag-sort"></span>
          </th>
          <th style="color:#3185fc">
            预计收入
            <span class="caret flag-sort"></span>
          </th>
          <th>千次展示收益</th>
          <th>点击率</th>
        </tr>
      </thead>
      <tbody>
         <tr>
          <td>2019-12-05</td>
          <td>
            <p>蓝奏云(H5)</p>
            <span>ID 1110065650</span>
          </td>

          <td style="width:200px"></td>
          <td>1,296,724</td>
          <td>20,202</td>
          <td>52,727.22元</td>
          <td> 2.61元</td>
          <td>1.56%</td>
        </tr>
        <tr>
          <td>2019-12-05</td>
          <td>
            <p>蓝奏云(H5)</p>
            <span>ID 1110065650</span>
          </td>

          <td style="width:200px"></td>
          <td>1,296,724</td>
          <td>20,202</td>
          <td>52,727.22元</td>
          <td> 2.61元</td>
          <td>1.56%</td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let myChart = echarts.init(document.getElementById("report"));
      let option = {
        title: {
          text: ""
        },
        color: ["#3158fc", "#4caf50"],
        tooltip: {
          trigger: "axis"
        },
        // legend: {
        //   data: ["邮件营销", "联盟广告"]
        // },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "7%",
          top: "3%"
          // containLabel: true
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["2019/12/01", "2019/12/02", "2019/12/03", "2019/12/04"],
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            show: true,
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
            type: "value",
            splitLine: {
              show: true,

              lineStyle: {
                color: "#eeeeee"
              }
            },
            axisLabel: {
              textStyle: {
                color: "#3158fc"
              }
            }
          }
        ],
        series: [
          {
            symbol: "none",
            name: "邮件营销",
            smooth: true, //这个是把线变成曲线
            type: "line", //这个是展示数据的类型，是柱状图还是折线图，饼状图
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            symbol: "none",
            name: "联盟广告",
            smooth: true, //这个是把线变成曲线
            type: "line", //这个是展示数据的类型，是柱状图还是折线图，饼状图
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>
<style scoped>
.head {
  margin-top: 20px;
  display: flex;
  color: #bbb;
}
.bs-caret {
  float: right;
  color: #ccc;
}
.report {
  display: flex;
  height: 94px;
  padding: 15px 20px 20px;
  margin-top: 10px;
  background: #f5f7f9;
  justify-content: space-between;
}
.report-name {
  color: #646870;
  padding-bottom: 5px;
  margin: 0;
}
.report-value {
  color: #000;
  font-size: 28px;
}
.report-value span {
  margin-left: 5px;
  font-size: 14px;
}
.r1 {
  padding: 0 15px 0 0;
}
.r2 {
  padding-left: 20px;
}
.bth {
  padding-top: 36px !important;
}
.qushi {
  font-weight: 600;
  margin: 15px 0;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
}
.rect {
  margin: 0 auto;
  width: 100%;
  height: 260px;
}
.rectTitle {
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
}
.rectTitle > div {
  padding: 20px;
  position: relative;
}
.rectTitle > div > span {
  vertical-align: middle;
}
.rectTitle > div > i {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid #eee;
  position: absolute;
  top: 22px;
  left: -1px;
  border-radius: 3px;
  font-weight: 100;

  color: #fff;
  font-size: 5px;
}
.rectTitle > div:nth-of-type(1) > i {
  background: #5173fa;
  padding: 1px;
}
.rectTitle > div:nth-of-type(2) > i {
  background: #4caf50;
  padding: 1px;
}
.table-text-id {
  font-size: 12px;
  color: #999;
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.tt {
  background: #f4f6f8 !important;
  border: 1px solid rgb(218, 215, 215);
}
th {
  padding: 18px !important;
}
td {
  padding: 20px !important;
}
thead {
  border: none !important;
  background: #f4f6f8 !important;
}

tbody tr {
  border-bottom: 1px solid #ccc !important;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
  font-size: 14px;
}
tbody tr td p {
  width: 90px !important;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0 !important;
}
tbody tr td span {
  font-size: 12px;
  color: #999;
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
tbody tr td:nth-of-type(3),
tbody tr td:nth-of-type(4),
tbody tr td:nth-of-type(5),
tbody tr td:nth-of-type(6) {
  text-align: right;
  padding-right: 100px !important;
}
</style>