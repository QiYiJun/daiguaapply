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
        <el-button type="primary"
                   @click="teachDialogVisible = true">查看教程</el-button>
      </div>

      <el-form :model="KuWoForm"
               :rules="KuWoRules"
               ref="KuWoRef"
               label-width="128px">
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

    <el-dialog title="教程"
               :visible.sync="teachDialogVisible"
               width="50%">
      <span class="title">
        酷我音乐任务入口:
      </span>
      <span>请点击下方的"任务入口"按钮查看详情</span>
      <span class="title">
        Ids和Cookies的获得:
      </span>
      <span>抓取链接: "https://integralapi.kuwo.cn/api/v1/online/sign/new/boxRenew?xxxxxx"</span>
      <span>Ids在链接中, Cookies在请求头里的, 复制完整的cookies即可</span>

      <el-dialog title="任务入口"
                 :visible.sync="imgDialogVisible"
                 width="50%"
                 append-to-body>
        <div class="apply">
          <span>"我的"-"做任务赚钱"</span>
          <img src="../../assets/img/kuwo.png">
        </div>
        <span slot="footer"
              class="dialog-footer">
          <el-button type="primary"
                     @click="imgDialogVisible = false">关闭</el-button>
        </span>

      </el-dialog><span slot="footer"
            class="dialog-footer">
        <el-button type="success"
                   @click="imgDialogVisible = true">任务入口</el-button>
        <el-button type="primary"
                   @click="teachDialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'KuWo',
  data () {
    return {
      teachDialogVisible: false,
      imgDialogVisible: false,
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
.el-input {
  width: 60%;
}

.tips {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 25px;
}

.teach {
  margin-bottom: 25px;
}

.title {
  font-weight: bold;
  font-size: 20px;
}

span {
  padding: 5px 0;
  display: block;
}

.apply {
  text-align: center;
}

.apply img {
  width: 200px;
}
</style>
