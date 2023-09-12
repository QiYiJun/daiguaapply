<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>微信小程序类</el-breadcrumb-item>
      <el-breadcrumb-item>七彩虹商城</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <div class='tips'>七彩虹商城</div>
      <div class="teach">
        <el-button type="primary"
                   @click="teachDialogVisible = true">查看教程</el-button>
      </div>

      <el-form :model="SkyColorForm"
               :rules="SkyColorRules"
               ref="SkyColorRef"
               label-width="128px">
        <el-form-item label="Authorization"
                      prop="authorization">
          <el-input v-model="SkyColorForm.authorization"
                    placeholder='authorization示例(一整个authorization复制粘贴就对了): Bearer eyJhbGciOixxxxxx'></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">立即创建</el-button>
          <el-button @click="resetForm('SkyColorRef')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-dialog title="教程"
               :visible.sync="teachDialogVisible"
               width="50%">
      <span class="title">
        Authorization的获得:
      </span>
      <span>打开并授权登录"七彩虹商城"小程序</span>
      <span>抓取链接示例: "https://interface.skycolorful.com/api/Banner/BannerList"</span>

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
  name: 'SkyColor',
  data () {
    return {
      teachDialogVisible: false,
      SkyColorForm: {
        authorization: ''
      },
      SkyColorRules: {
        authorization: [
          {
            required: true,
            message: '请输入Authorization',
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
