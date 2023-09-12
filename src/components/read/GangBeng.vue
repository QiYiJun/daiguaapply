<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>微信阅读类</el-breadcrumb-item>
      <el-breadcrumb-item>钢蹦阅读</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <div class='tips'>钢蹦阅读</div>
      <div class="teach">
        <el-button type="primary"
                   @click="teachDialogVisible = true">查看教程</el-button>
      </div>

      <el-form :model="GangBengForm"
               :rules="GangBengRules"
               ref="GangBengRef"
               label-width="128px">
        <el-form-item label="WxPusher_UID"
                      prop="wxpusher_uid">
          <el-input v-model="GangBengForm.wxpusher_uid"
                    placeholder='wxpusher_uid示例: UID_xxxxxxxxxx'></el-input>
        </el-form-item>
        <el-form-item label="Cookie"
                      prop="cookie">
          <el-input v-model="GangBengForm.cookie"
                    placeholder='cookie示例(一整个cookie复制粘贴就对了): gfsessionid=o-0fIvxxxxxxx; zzbb_info=xxxxxxx'></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">立即创建</el-button>
          <el-button @click="resetForm('GangBengRef')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-dialog title="教程"
               :visible.sync="teachDialogVisible"
               width="50%">
      <span class="title">
        wxpusher_uid的获得:
      </span>
      <span>订阅wxpusher, 右下角"我的"-"我的UID"</span>
      <span>请点击下方的"获取二维码"按钮, 订阅我们的wxpusher服务</span>
      <span>应用与主题都需要订阅, 这样你才可以收到我们的消息推送</span>
      <span class="title">
        Cookie的获得:
      </span>
      <span>抓取域名"2488240.ceu."下的 cookie 完整复制下来</span>

      <el-dialog title="WxPusher二维码"
                 :visible.sync="QRCodeDialogVisible"
                 width="50%"
                 append-to-body>
        <div class="qrcode">
          <div class="apply">
            <span>应用订阅</span>
            <img src="https://wxpusher.zjiecode.com/api/qrcode/t7FOPpPdgpNJf6N0iC5XecNgjAJn7NFWxQC00OGDOzkRHmiAdX2fXSTcSZ1Uqoy0.jpg">
          </div>
          <div class="theme">
            <span>主题订阅</span>
            <img src="https://wxpusher.zjiecode.com/api/qrcode/M9hDGdw6KCEZvElBASAEH0eQZXcN66mCkC8zX8448SPtrcSbGL74hTRAzz4KdV6o.jpg">
          </div>
        </div>
        <span slot="footer"
              class="dialog-footer">
          <el-button type="primary"
                     @click="QRCodeDialogVisible = false">关闭</el-button>
        </span>
      </el-dialog>

      <span slot="footer"
            class="dialog-footer">
        <el-button type="success"
                   @click="QRCodeDialogVisible = true">获取二维码</el-button>
        <el-button type="primary"
                   @click="teachDialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'GangBeng',
  data () {
    return {
      teachDialogVisible: false,
      QRCodeDialogVisible: false,
      GangBengForm: {
        wxpusher_uid: '',
        cookie: ''
      },
      GangBengRules: {
        wxpusher_uid: [
          {
            required: true,
            message: '请输入WxPusher_UID',
            trigger: 'blur'
          }
        ],
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
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.tips {
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

.qrcode {
  display: flex;
  justify-content: center;
  text-align: center;
}

.qrcode img {
  display: block;
  width: 200px;
}
</style>
