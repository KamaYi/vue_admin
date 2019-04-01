<template>
  <div>
    <el-upload
      class="avatar-uploader"
      :action="actionAddress"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :on-progress="uploadImageProcess"
      accept=".jpeg,.png">
      <img v-if="imageUrl && imageFlag == false" :src="imageUrl" class="avatar">
      <i v-else-if="imageFlag == false" class="el-icon-plus avatar-uploader-icon"></i>
      <el-progress v-if="imageFlag == true" type="circle" :percentage="imageUploadPercent" style="position:absolute;"></el-progress>
    </el-upload>
  </div>
</template>

<script>
  //此处是element-ui的原生上传
  import lrz from 'lrz' //图片压缩插件
  import {imgBaseUrl} from '../../config/env.js'

  export default {
    data() {
      return {
        imageUrl: '',
        actionAddress:'',
        imageFlag:false,
        imageUploadPercent:0,
      };
    },
    props:{
      parentName:String,//对应的类型带上便于理解
      catchData:Function
    },
    mounted(){
      this.actionAddress = imgBaseUrl;
    },
    methods: {
      handleAvatarSuccess(res, file) {
        // this.imageUrl = URL.createObjectURL(file.raw);
        this.imageFlag = false;
        this.imageUploadPercent = 0;
        this.imageUrl = res.data.data;
        this.catchData(this.imageUrl)
      },
      //进度条
      uploadImageProcess(event, file, fileList) {
        this.imageFlag = true;
        this.imageUploadPercent = file.percentage.toFixed(0) * 1;
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 6;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
          return false;
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
          return false;
        }
        lrz(file,{quality:0.5}).then(rst => {
          console.log(rst)
          // this.imageUrl = rst.base64
          return rst.file;
          //成功时执行

        }).catch(error => {
          console.log(error)

          //失败时执行

        }).always(() => {

          console.log('sfsffssffssfsffsfsfsfsfs')
          //不管成功或失败，都会执行

        })

      }
    }
  }

</script>

<style>
.avatar-uploader {
    width: 178px;
    height: 178px;
}
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 178px;
    height: 178px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .video-avatar {
    width: 400px;
    height: 200px;
  }

</style>
