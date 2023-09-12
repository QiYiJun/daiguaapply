<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>APP类</el-breadcrumb-item>
      <el-breadcrumb-item>酷狗音乐</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div class='tips'>酷狗音乐脚本还在修改当中, 尚未能投入呆瓜Apply</div>
      <div class="teach">这里是教程-还没写-未能正常使用</div>
      <el-form :model="KugouForm"
               :rules="KugouRules"
               ref="KugouRef"
               label-width="70px"
               disabled>
        <el-form-item label="Cookie"
                      prop="cookie">
          <el-input v-model="KugouForm.cookie"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">立即创建</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'KuGou',
  data () {
    return {
      KugouForm: {
        cookie: ''
      },
      KugouRules: {
        cookie: [
          {
            required: true,
            message: '请输入Cookie',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped>
.el-input {
  width: 50%;
}

.tips {
  color: red;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 25px;
}

.teach {
  margin-bottom: 25px;
}
</style>
