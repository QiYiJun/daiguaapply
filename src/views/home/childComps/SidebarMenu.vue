<template>
  <el-menu default-active="2"
           class="el-menu-vertical-demo"
           background-color="#333744"
           text-color="#fff"
           active-text-color="#409bff"
           unique-opened
           router>
    <el-submenu :index="item.id + ''"
                v-for="item in menulist"
                :key="item.id">
      <template slot="title">
        <span>{{item.name}}</span>
      </template>
      <el-menu-item :index="subitem.path"
                    v-for="subitem in item.childern"
                    :key="subitem.id">{{subitem.name}}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'SidebarMenu',
  props: {
    menulist: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.el-menu {
  border-right: none;
}
</style>
