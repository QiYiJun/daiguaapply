<template>
  <div>
    <el-form ref="form"
             :model="form"
             label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'KuGou',
  data () {
    return {}
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped>

</style>
