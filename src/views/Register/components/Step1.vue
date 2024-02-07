<template>
  <div class="step1">
    <!-- 输入手机号 -->
    <div class="phone">
      <!-- 中国 0086 -->
      <div class="china">
        中国 0086
        <i class="el-icon-arrow-down"></i>
      </div>
      <!-- 
        用户输入的手机号 
        鼠标失去焦点触发validatePhoneNumber方法
      -->
      <div class="usuallyUse">
        <input
          @blur="validatePhoneNumber"
          v-model="phoneNumber"
          type="text"
          placeholder="建议使用常用手机号"
          class="cursor"
        />
      </div>
    </div>
    <!-- 点击按钮进行验证 -->
    <div class="check">
      <button class="cursor" @click="openVcode" v-popover:popover>
        点击按钮进行验证
      </button>
    </div>
    <!-- 人机验证组件 -->
    <Vcode
      :imgs="[Img1, Img2, Img3, Img4]"
      :show="isShow"
      @success="onSuccess"
      @close="onClose"
    />
    <!-- 下一步 -->
    <div class="next">
      <button class="cursor" @click="next">下一步</button>
    </div>
  </div>
</template>

<script>
import Vcode from "vue-puzzle-vcode";
import Img1 from "@/assets/puzzle/1.jpg";
import Img2 from "@/assets/puzzle/2.jpg";
import Img3 from "@/assets/puzzle/3.jpg";
import Img4 from "@/assets/puzzle/4.jpg";
export default {
  components: {
    Vcode: Vcode,
  },
  data() {
    return {
      // 用户输入的手机号
      phoneNumber: "",
      // 记录手机号是否验证通过，只有验证通过才能触发人机验证弹窗
      isPhoneLegal: false,
      // 人机验证组件是否展示
      isShow: false,
      // 人机验证的图片数组
      Img1,
      Img2,
      Img3,
      Img4,
      // 记录人机验证是否通过，只有人机验证通过才能点击下一步生效
      isPuzzleLegal: false,
    };
  },
  methods: {
    // TODO1：手机号正则校验
    validatePhoneNumber() {
      // 手机号输入不能为空
      if (this.phoneNumber === "") {
        this.$message.error("手机号输入不能为空");
        return;
      }
      // 验证手机号格式是否正确
      const phoneRegex = /^[1][3-9]\d{9}$/;
      if (!phoneRegex.test(this.phoneNumber)) {
        this.$message.error("手机号格式不正确");
        return;
      }
      this.isPhoneLegal = true;
    },
    // TODO2: 点击按钮进行人机验证
    openVcode() {
      if (this.isPhoneLegal) {
        // 只有手机号验证通过后才能触发人机验证弹窗
        this.submit();
      }
    },
    // 触发人机验证
    submit() {
      this.isShow = true;
    },
    // 人机验证通过后，自动关闭弹窗
    onSuccess() {
      // 用isPuzzleLegal标识人机验证通过
      this.isPuzzleLegal = true;
      // 关闭弹窗
      this.isShow = false;
    },
    /* 
      关闭人机验证弹窗方法
      不要开启
      如果开启 就算验证不通过也能关闭弹窗
    */
    onClose() {
      //   this.isShow = false;
    },
    // TODO3: 点击下一步
    next() {
      if (this.isPuzzleLegal) {
        // 只有人机验证通过后才能点击下一步
        this.$emit("gotoSecond");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.step1 {
  width: 40%;
  height: 400px;
  //   background-color: pink;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.el-steps--horizontal {
  margin-left: 45px;
  width: 90%;
  height: 30px;
  // background-color: pink;
  margin-top: 50px;
}
.phone {
  width: 80%;
  height: 50px;
  //   background-color: skyblue;
  background-color: #fff;
  margin-top: 30px;
  display: flex;
  border: 1px solid #dddddd;
  .china {
    width: 30%;
    height: 100%;
    // background-color: aquamarine;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #666;
    border-right: 1px solid #dddddd;
    i {
      padding-left: 5px;
      padding-top: 3px;
    }
  }
  .usuallyUse {
    position: relative;
    width: 70%;
    height: 100%;
    input {
      width: 100%;
      height: 100%;
      padding-left: 20px;
      font-size: 16px;
    }
    // .el-icon-circle-check {
    //   color: #4ab344;
    //   font-size: 15px;
    //   position: absolute;
    //   top: 16px;
    //   right: -25px;
    // }
  }
}
.error {
  width: 50%;
  height: 25px;
  //   background-color: #fff;
  margin-left: -163px;
  display: flex;
  align-items: center;
  color: orange;
  p {
    font-size: 12px;
  }
  i {
    margin-right: 5px;
    padding-top: 2px;
    color: orange;
  }
}
.check {
  width: 80%;
  height: 50px;
  // background-color: skyblue;
  margin-top: 25px;
  display: flex;
  button {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: 1px solid #dddddd;
  }
}
.next {
  width: 80%;
  height: 50px;
  background-color: skyblue;
  margin-top: 50px;
  display: flex;
  button {
    width: 100%;
    height: 100%;
    background-color: #4ab344;
    border: 1px solid #4ab344;
    color: #fff;
    font-size: 16px;
  }
}
</style>