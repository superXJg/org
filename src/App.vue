<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Org
      :obj="obj"
    />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Org from './components/org/org.vue'
export default {
  data: ()=> {
    return {
      obj: {
          id: 0,
          label: "XXX科技有限公司",
          children: [
            {
              id: 2,
              label: "产品研发部",
              children: [
                {
                  id: 5,
                  label: "研发-前端"
                },
                {
                  id: 6,
                  label: "研发-后端"
                },
                {
                  id: 9,
                  label: "UI设计"
                },
                {
                  id: 10,
                  label: "产品经理"
                }
              ]
            },
            {
              id: 3,
              label: "销售部",
              children: [
                {
                  id: 7,
                  label: "销售一部"
                },
                {
                  id: 8,
                  label: "销售二部"
                }
              ]
            },
            {
              id: 4,
              label: "财务部"
            },
            {
              id: 9,
              label: "HR人事"
            }
          ]
        }
      }
  },
  name: 'app',
  components: {
    // HelloWorld,
    Org
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
