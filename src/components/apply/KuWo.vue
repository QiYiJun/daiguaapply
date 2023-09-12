<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>APP类</el-breadcrumb-item>
      <el-breadcrumb-item>酷狗音乐</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div class='tips'>酷我音乐</div>
      <div class="teach">
        <span>"我的"-"做任务赚钱"</span><br>
        <span>
          <img src="../../assets/img/kuwo.png">
        </span><br>
        <span>抓取链接示例: "https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/everydaymusic/doListen?xxxxxxxxxxxxxxxxxxx"</span>
      </div>
      <el-form :model="KuWoForm"
               :rules="KuWoRules"
               ref="KuWoRef"
               label-width="70px">
        <el-form-item label="Ids"
                      prop="ids">
          <el-input v-model="KuWoForm.ids"
                    placeholder='ids示例(三个id少一个都不行): loginUid=123123&loginSid=123123&appUid=123123'></el-input>
        </el-form-item>
        <el-form-item label="Cookies"
                      prop="cookies">
          <el-input v-model="KuWoForm.cookies"
                    placeholder='cookies示例(一整个cookies复制粘贴就对了): user=xxxxxxx,......rom=xxxxxx'></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">立即创建</el-button>
          <el-button @click="resetForm('KuWoRef')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'KuWo',
  data () {
    return {
      KuWoForm: {
        ids: '',
        cookies: ''
      },
      KuWoRules: {
        ids: [
          {
            required: true,
            message: '请输入Ids',
            trigger: 'blur'
          }
        ],
        cookies: [
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
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.tips {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 25px;
}

.teach {
  margin-bottom: 25px;
}

span img {
  width: 200px;
}
</style>
