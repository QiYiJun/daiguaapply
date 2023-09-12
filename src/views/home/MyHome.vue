<template>
  <el-container>
    <el-header height='64px'>呆瓜Apply-自动化任务解放双手</el-header>
    <el-container>
      <el-aside width="200px">
        <sidebar-menu :menulist="menulist"></sidebar-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SidebarMenu from '../home/childComps/SidebarMenu'

export default {
  name: 'MyHome',
  components: {
    SidebarMenu
  },
  data () {
    return {
      menulist: [
        {
          id: 1,
          name: 'APP类',
          childern: [
            {
              id: 101,
              name: '酷狗音乐',
              path: 'kugou'
            },
            {
              id: 102,
              name: '酷我音乐',
              path: 'kuwo'
            }
          ]
        },
        {
          id: 2,
          name: '微信阅读类',
          childern: [
            {
              id: 201,
              name: '钢蹦',
              path: 'gangbeng'
            },
            {
              id: 202,
              name: '小阅阅',
              path: 'xiaoyueyue'
            },
            {
              id: 203,
              name: '人人帮',
              path: 'renrenbang'
            }
          ]
        },
        {
          id: 3,
          name: '微信小程序类',
          childern: [
            {
              id: 301,
              name: '卡亨星球',
              path: 'kraft'
            },
            {
              id: 302,
              name: '七彩虹商城',
              path: 'skycolor'
            }
          ]
        }
      ]
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped>
.el-container {
  height: 100%;
}

.el-header {
  background-color: #222;
  color: #ccc;
  text-align: center;
  font-weight: bold;
  font-size: 32px;
  line-height: 64px;
}

.el-aside {
  background-color: #333744;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #eaedf1;
  color: #333;
}

span {
  font-size: 16px;
}
</style>
