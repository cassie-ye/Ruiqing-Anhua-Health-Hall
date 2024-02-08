<template>
  <div class="wrapper">
    <!-- 分享到其他平台 -->
    <div class="share">
      <p>分享到：</p>
      <span
        style="color: #43c624"
        @click="open"
        class="iconfont icon-weixin"
      ></span>
      <a
        style="color: #ff5f5f"
        :href="`https://service.weibo.com/share/share.php?title=${goods_content.title}`"
        class="iconfont icon-xinlang"
      ></a>
      <a
        style="color: #1f91ff"
        :href="`https://connect.qq.com/widget/shareqq/index.html?url=https%3A%2F%2Ffkscyybjp06.icoc.bz%2Fnd.jsp%3F_sc%3D2%26id%3D4&pics=http%3A&title=%E3%80%90%E9%87%91%E5%88%9A%E7%89%87%E5%92%8C%E8%82%BE%E5%AE%9D%E7%89%87%E7%A9%B6%E7%AB%9F%E9%82%A3%E4%B8%AA%E5%A5%BD%EF%BC%9F+-+%E7%BD%91%E7%AB%99%E6%A8%A1%E6%9D%BF%E2%80%94%E5%8C%BB%E8%8D%AF%E4%BF%9D%E5%81%A5%E5%93%81%E3%80%91`"
        class="iconfont icon-qq"
      ></a>
      <a
        style="color: #fc2431"
        :href="`https://www.xiaohongshu.com/explore?gt_ki=663716332239&gt_ui=47635956&gt_pi=306565984&gt_uni=8311752746&gt_ci=79969445951&gt_mt=1&gt_dt=0&gt_of=nm&gt_cpi=0&gt_kw=%E5%B0%8F%E7%BA%A2%E4%B9%A6%E5%AE%98%E6%96%B9%E7%BD%91%E9%A1%B5%E7%89%88%E5%85%A5%E5%8F%A3&utm_source=baidu_sem&m_source=baidusem&bd_vid=10527735752075872352`"
        class="iconfont icon-xiaohongshu"
      ></a>
      <a
        style="color: #06c714"
        href="https://www.douban.com/"
        class="iconfont icon-doubanwang"
      ></a>
      <a
        style="color: #3385ff"
        href="https://tieba.baidu.com/"
        class="iconfont icon-baidutieba"
      ></a>
    </div>
    <el-dialog title="微信分享" :visible.sync="dialogVisible" width="30%">
      <div class="er">
        <div class="text">
          打开微信"扫一扫"，打开网页后点击屏幕右上角分享按钮
        </div>
        <img src="@/assets/weixinma.png" alt="" />
      </div>
    </el-dialog>
    <div class="command">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">产品详情</el-menu-item>
        <el-menu-item index="2">产品评论(0)</el-menu-item>
      </el-menu>
    </div>
    <div class="one" v-show="activeIndex === '1'">
      <ul>
        <li>
          <div class="one_left">分类：</div>
          <div class="one_right">{{ goods_content.parentType }}</div>
        </li>
        <li>
          <div class="one_left">功效：</div>
          <div class="one_right">{{ goods_content.efficacy }}</div>
        </li>
        <li>
          <div class="one_left">生产地：</div>
          <div class="one_right">{{ goods_content.yieldly }}</div>
        </li>
        <li>
          <div class="one_left"></div>
          <div class="one_right"></div>
        </li>
      </ul>
    </div>
    <div class="two" v-show="activeIndex === '2'">
      <div class="rate">
        产品评星：<el-rate
          style="padding-left: 10px"
          v-model="value"
          :texts="texts"
          show-text=""
          text-color="#4ab344"
          :colors="colors"
        >
        </el-rate>
      </div>
      <div class="nickname">
        昵称：
        <el-input
          id="input1"
          style="width: 170px; height: 40px; padding-left: 10px"
          v-model="input"
          clearable
        >
        </el-input>
      </div>
      <div class="comment_content">
        评论内容：
        <el-input
          style="width: 900px; padding-left: 10px"
          type="textarea"
          :rows="6"
          placeholder="暂无评论，快来发表吧~"
          v-model="textarea"
        >
        </el-input>
      </div>
      <div class="verifyCode">
        验证码：
        <el-input
          id="input2"
          :rows="4"
          style="width: 170px; padding-left: 10px"
          v-model="input2"
          clearable
        >
        </el-input>
        <img :src="code" @click="verifyCodeRef" alt="" />
      </div>
      <div class="uploadPic">
        上传图片：
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <p>(可上传5张图片，每张不超过5M，支持格式jpg，jpeg，bmp，png，gif)</p>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </div>
      <div class="submit_comment">
        <el-button
          style="
            width: 160px;
            height: 40px;
            padding-top: 12px;
            background-color: #4ab344;
            font-size: 15px;
          "
          type="success"
          >提交评论</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { getGoodsByIdAPI } from "@/apis/goods";
export default {
  data() {
    return {
      goods_content: {},
      activeIndex: "1",
      dialogVisible: false,
      dialogImageUrl: "",
      dialogVisibleToLogin: false,
      input: "",
      input2: "",
      textarea: "",
      code: "",
      value: 0,
      texts: ["差", "一般", "好", "非常好"],
      colors: ["#99A9BF", "#F7BA2A", "#FF9900", "#FF7043"],
    };
  },
  methods: {
    // 调用接口 通过商品Id获取商品详情
    async getGoodsById(id) {
      const { data: res } = await getGoodsByIdAPI(id);
      // 给当前商品对象信息赋值
      this.goods_content = res[0];
    },
    open() {
      this.dialogVisible = true;
      // console.log('csioc')
    },
    handleSelect(index) {
      this.activeIndex = index;
    },
    verifyCodeRef() {
      // code 可以随便写
      this.code =
        "http://127.0.0.1:8801/health/api/verifyCode/getVerifyCode?code=" +
        Math.random();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible_pic = true;
    },
  },
  created() {
    // 获取路由上的goods_id参数并且发起请求
    this.getGoodsById(this.$route.query.goods_id);
  },
};
</script>

<style lang="less" scoped>
.share {
  padding-left: 20px;
  width: 100%;
  height: 50px;
  margin-top: 25px;
  margin-bottom: 25px;
  // background-color: lemonchiffon;
  // margin-left: 70%;
  display: flex;
  // justify-content: center;
  color: #585858;
  align-items: center;
  .iconfont {
    padding-left: 3px;
    font-size: 23px;
  }
}
.command {
  width: 100%;
  height: 63px;
  padding-left: 1px;
  // background-color: palegoldenrod;
  .el-menu-demo {
    // border: 1px solid #eee;
    .el-menu-item {
      border: 1px solid #eee;
      width: 160px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #666666;
    }
    .is-active {
      color: #4ab344;
      border-top: 6px solid #4ab344;
    }
  }
}
.one {
  width: 100%;
  height: 200px;
  // margin-top: 30px;

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      border: 1px solid #eee;
      width: 50%;
      height: 50%;
      display: flex;
      .one_left {
        width: 23%;
        height: 100%;
        background-color: #f0f9eb;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #585858;
        font-size: 15px;
      }
      .one_right {
        width: 77%;
        height: 100%;
        background-color: #fff;
        display: flex;
        align-items: center;
        color: #585858;
        padding-left: 20px;
        font-size: 15px;
      }
    }
  }
}
.two {
  // margin-top: 40px;
  width: 100%;
  height: 620px;
  background-color: #fff;
  padding-left: 50px;
  padding-top: 60px;
  .rate {
    display: flex;
  }
  .nickname {
    display: flex;
    align-items: center;
    padding-left: 30px;
    margin-top: 35px;
    /deep/ #input1 {
      height: 60px;
    }
  }
  .comment_content {
    display: flex;
    align-items: center;
    margin-top: 45px;
  }
  .verifyCode {
    display: flex;
    align-items: center;
    padding-left: 12px;
    margin-top: 25px;
    /deep/ #input2 {
      height: 60px;
    }
    img {
      padding-left: 10px;
    }
  }
  .uploadPic {
    display: flex;
    // justify-content: center;
    align-items: center;
    margin-top: 25px;
    p {
      color: #aeaeae;
      font-size: 12px;
      padding-left: 15px;
    }
    /deep/ .el-upload {
      margin-left: 10px;
      width: 55px;
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    /deep/ .el-upload .el-upload-dragger {
      // width: 10px
    }
  }
  .submit_comment {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
}
// el-dialog
.el-dialog__wrapper {
  // 修改dialog的宽
  /deep/.el-dialog {
    margin-top: 100px !important;
    width: 32% !important;
    .el-dialog__header {
      height: 61px;
      border-bottom: 1px solid #eee;
      // 叉叉按钮的盒子大小
      .el-dialog__headerbtn {
        // font-size: 30px;
      }
      // 叉叉的颜色
      .el-icon-close:before {
        font-size: 23px;
        // color: red;
        // 若此时 display 为 none 时，那么此时的右上角的 X 就会被隐藏；
        // display: none;
      }
    }
    .el-dialog__body {
      height: 415px;
      .er {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 180px;
          margin-top: 22px;
        }
        .text {
          margin-top: 20px;
          margin-bottom: 30px;
        }
      }
    }
  }
  /deep/.el-dialog {
    width: 500px;
    height: 200px;
    border-radius: 10px;
    background-color: #fff;
    top: 150px;
  }
  /deep/.el-dialog__footer {
    margin-top: -350px;
  }
}
</style>