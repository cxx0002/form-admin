<template>
  <div id="app">
    <div class="header"></div>
    <div class="main">
      <div class="nav">
          <li>查询数据</li>
          <li>添加数据</li>
      </div>
      <router-view class="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
#app {
  font-family:'Microsoft YaHei' !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
}
.header {
  height: 50px;
  background: #2a7afb;
}
.main {
  display: flex;
}
.content {
  flex: 1;
  padding: 0 40px;
}
.nav{
  min-width: 160px;
  border-right: 1px solid #eee;
  height: 1000px
}
.size-160 {
    width: 160px!important;
    text-align: left;
    border-radius: 0px !important;
    font-size: 14px;
    height: 34px;
    margin-right: 10px;
    padding-top: 7px;
    border-color: #e0e0e0 !important;
    font-weight: 400
}
.btn-100 {
    width: 100px!important;
    border-radius: 0 !important;
    background: #3185fc !important;
    border: none;
    margin-left: 10px;
}
.btn-120 {
    width: 120px!important;
    background: none;
    border-radius: 0 !important;
    color:#2a2d33;
    margin-left: 10px;
    font-weight: 400;
    border-color: #d5d5d6;
}
.btn-default {
    color: #2a2d33;
    background-color: #fff;
    border-color: #d5d5d6;
    box-shadow: none;
}
li{
  list-style: none;
}

</style>
