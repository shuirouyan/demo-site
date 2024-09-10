<template>
  <el-container>
    <el-header height="80px" style="padding: 0;">
      <div class="header">教务系统学生管理</div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu class="aside" @select="selectFunc" default-active="1" :unique-opened="true">
          <el-sub-menu index="1">
            <template #title>
              <span>七年级</span>
            </template>
            <el-menu-item index="1">1班</el-menu-item>
            <el-menu-item index="2">2班</el-menu-item>
            <el-menu-item index="3">3班</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <span>八年级</span>
            </template>
            <el-menu-item index="4">1班</el-menu-item>
            <el-menu-item index="5">2班</el-menu-item>
            <el-menu-item index="6">3班</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <span>九年级</span>
            </template>
            <el-menu-item index="7">1班</el-menu-item>
            <el-menu-item index="8">2班</el-menu-item>
            <el-menu-item index="9">3班</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header height="80px" style="padding: 0; margin: 0;">
          <el-container class="subHeader">
            <div class="desc">{{ desc }}</div>
            <el-button @click="popMessage" style="width: 100px; height: 30px; margin: 20px;">新增记录</el-button>
          </el-container>
        </el-header>
        <el-main style="margin: 0; padding: 0;">
          <div class="content">
            <el-table :data="stus">
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="age" label="年龄"></el-table-column>
              <el-table-column prop="sex" label="性别"></el-table-column>
              <el-table-column prop="date" label="录入日期"></el-table-column>
            </el-table>
          </div>
        </el-main>
        <el-footer height="30px" class="footer">
          Vue框架搭建，ElementPlus组提供组件支持
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { ref, reactive, getCurrentInstance } from 'vue'
import { ElMessage } from 'element-plus'
export default {
  name: 'App',
  components: {

  },
  setup() {

    const { appContext } = getCurrentInstance()

    let desc = ref('七年级1班学生统计')
    let stus = reactive([{ name: '小王', age: 14, sex: '男', date: '2020年8月15号' },
    { name: '小李', age: 21, sex: '女', date: '2020年8月25号' },
    { name: '小秋', age: 18, sex: '女', date: '2020年4月21号' }])
    function selectFunc(index) {
      let st = ['七', '八', '九']
      let rank = st[Math.floor((index - 1) / 3)]
      desc.value = `${rank}年纪${((index - 1) % 3) + 1}班统计学生`
    }
    function popMessage() {
      let appStr = JSON.stringify({ "a": 1, "b": 2, 'time': new Date(), "msg": "该功能待完善" })
      ElMessage({ type: 'success', message: appStr, duration: 5000 }, appContext)
    }
    return { desc, stus, selectFunc, popMessage }
  },
  mounted() {
    let ctx = getCurrentInstance().appContext.app
    console.log('da:', new Date(), ' ctx:', ctx)

    ElMessage({
      type: "success",
      message: '加载完成'
    })

    // ctx.axios.get('/myApi/simpleWeather/query?city=杭州&key=aa6c8be7ab68b9417183d0daaf83e740').then((resp) => {
    //   console.log("resp.data:", resp.data)
    //   let data = resp.data.result
    //   ElMessage({
    //     message: `${data.city}实时天气:${data.realtime.info}`,
    //     type: 'success'
    //   })
    // }).catch((ex) => {
    //   alert(ex)
    // })

  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  font-size: 30px;
  line-height: 80px;
  background-color: #f1f1f1;
}

.aside {
  background-color: wheat;
  height: 600px;
}

.subHeader {
  background-color: cornflowerblue;
}

.desc {
  font-size: 25px;
  line-height: 80px;
  color: white;
  width: 800px;
}

.content {
  height: 410px;
}

.footer {
  background-color: dimgray;
  color: white;
  font-size: 17px;
  line-height: 30px;
}
</style>
