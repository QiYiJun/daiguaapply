<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>微信小程序类</el-breadcrumb-item>
      <el-breadcrumb-item>卡亨星球</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <div class='tips'>卡亨星球</div>
      <div class="teach">
        <el-button type="primary"
                   @click="teachDialogVisible = true">查看教程</el-button>
      </div>

      <el-form :model="KraftHeinzForm"
               :rules="KraftHeinzRules"
               ref="KraftHeinzRef"
               label-width="128px">
        <el-form-item label="Token_1"
                      prop="token_1">
          <el-input v-model="KraftHeinzForm.token_1"
                    placeholder='注意看教程, 别填错了, 黑号可不要赖我'></el-input>
        </el-form-item>
        <el-form-item label="Token_2"
                      prop="token_2">
          <el-input v-model="KraftHeinzForm.token_2"
                    placeholder='注意看教程, 别填错了, 黑号可不要赖我'></el-input>
        </el-form-item>
        <el-form-item label="Phone"
                      prop="phone">
          <el-input v-model="KraftHeinzForm.phone"
                    placeholder='电话号码'></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">立即创建</el-button>
          <el-button @click="resetForm('KraftHeinzRef')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-dialog title="教程"
               :visible.sync="teachDialogVisible"
               width="50%">
      <span class="title">
        Token_1和Token_2的获得:
      </span>
      <span>点击"我的"-"积分商城"</span>
      <span>Token
        _1 抓取链接示例: "https://kraftheinzcrm.kraftheinz.net.cn/crm/public/index.php/api/v1/getUserInfo"</span>
      <span>Token
        _2 抓取链接示例: "https://inspiration.kraftheinz.net.cn/inspiration/web/?s=/api/track/index"</span>
      <span>复制请求头中的token, 分别粘贴到对应的Token输入框中</span>
      <span class="title">
        Phone的获得:
      </span>
      <span>你告诉我你拿不到你手机号码???</span>

      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="teachDialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'KraftHeinz',
  data () {
    return {
      teachDialogVisible: false,
      KraftHeinzForm: {
        token_1: '',
        token_2: '',
        phone: ''
      },
      KraftHeinzRules: {
        token_1: [
          {
            required: true,
            message: '请输入Token_1',
            trigger: 'blur'
          }
        ],
        token_2: [
          {
            required: true,
            message: '请输入Token_2',
            trigger: 'blur'
          }
        ],
        phone: [
          {
            required: true,
            message: '请输入Phone',
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
</style>
