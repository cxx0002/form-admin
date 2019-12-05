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
        <p class="report-value">407,216</p>
      </div>
      <div class="r2">
        <p class="report-name">总点击量</p>
        <p class="report-value">5,358</p>
      </div>
      <div class="r3">
        <p class="report-name">总分成收入</p>
        <p class="report-value">
          2,005.06
          <span>元</span>
        </p>
      </div>
      <div class="r3">
        <p class="report-name">总千次展示收益</p>
        <p class="report-value">
          4.92
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
    <div class="rect"></div>
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
          <td>2019-12-04</td>
          <td>
            <p>快小说阅读器(iOS)</p>
            <span>ID 1109594869</span>
          </td>

          <td style="width:200px"></td>
          <td>118,000</td>
          <td>1,454</td>
          <td>572.17 元</td>
          <td>4.85 元</td>
          <td>1.23%</td>
        </tr>
        <tr>
          <td>2019-12-04</td>
          <td>
            <p>快小说阅读器(iOS)</p>
            <span>ID 1109594869</span>
          </td>

          <td style="width:200px"></td>
          <td>118,000</td>
          <td>1,454</td>
          <td>572.17 元</td>
          <td>4.85 元</td>
          <td>1.23%</td>
        </tr>
        <tr>
          <td>2019-12-04</td>
          <td>
            <p>快小说阅读器(iOS)</p>
            <span>ID 1109594869</span>
          </td>

          <td style="width:200px"></td>
          <td>118,000</td>
          <td>1,454</td>
          <td>572.17 元</td>
          <td>4.85 元</td>
          <td>1.23%</td>
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
  color: #000;
}
.rect {
  margin: 0 auto;
  border: 1px solid #eee;
  width: 1044px;
  height: 300px;
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
  background: #f5f7f9;
  border: 1px solid #ccc ;
  border-top: none;
}
th {
  padding: 22px !important;
}
td {
  padding: 22px !important;
}
thead {
  border: none !important;
  background: #f5f7f9 !important;
}
tbody tr {
  border-bottom: 1px solid #ccc;
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