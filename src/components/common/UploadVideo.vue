<template>
  <div>
    <el-upload class="avatar-uploader el-upload--text" :action="actionAddress" :show-file-list="false" accept=".mp4"
      :on-success="handleVideoSuccess" :before-upload="beforeUploadVideo" :on-progress="uploadVideoProcess">
      <video v-if="this.showVideoPath !='' && videoFlag == false" :src="this.showVideoPath"
        class="avatar video-avatar" controls="controls">您的浏览器不支持视频播放</video>
      <i v-else-if="this.showVideoPath =='' && videoFlag == false" class="el-icon-plus avatar-uploader-icon"></i>
      <el-progress v-if="videoFlag == true" type="circle" :percentage="videoUploadPercent" style="margin-top:30px;"></el-progress>
      <el-button class="video-btn" slot="trigger" size="small" v-if="isShowUploadVideo" type="primary">选取文件</el-button>
    </el-upload>
    <P v-show="showErrorMsg" class="text">请保证视频格式正确，且不超过20M</P>
  </div>
</template>

<script>
  import {
    videoBaseUrl
  } from '../../config/env'
  export default {
    data() {
      return {
        actionAddress: '',
        company:'',
        isShowUploadVideo:false,
        videoFlag:false,
        videoUploadPercent:0,
        showVideoPath:'',
        showErrorMsg:false
      }
    },
    props:{
      parentName:String,
      catchData:Function
    },
    mounted() {
      this.actionAddress = videoBaseUrl;
    },
    methods: {
      //上传前回调
      beforeUploadVideo(file) {
        const isLt20M = file.size / 1024 / 1024 < 20;
        if (['video/mp4'].indexOf(file.type) == -1) { //'video/ogg', 'video/flv', 'video/avi', 'video/wmv', 'video/rmvb'
          this.$message.error('请上传正确的视频格式');
          return false;
        }
        if (!isLt20M) {
          this.$message.error('上传视频大小不能超过20MB哦!');
          return false;
        }
        this.isShowUploadVideo = false;
      },
      //进度条
      uploadVideoProcess(event, file, fileList) {
        this.videoFlag = true;
        this.videoUploadPercent = file.percentage.toFixed(0) * 1;
      },

      //上传成功回调
      handleVideoSuccess(res, file) {
        this.videoFlag = false;
        this.videoUploadPercent = 0;
        if (res.status) {
          this.showVideoPath = res.data.data;
          this.isShowUploadVideo = true;
          this.showErrorMsg = false;
          this.catchData(this.showVideoPath)
        } else {
          this.$message.error('视频上传失败，请重新上传！');
          this.isShowUploadVideo = false;
          this.showErrorMsg = true;
        }
      },
    }
  }

</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    width: 178px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
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
    height: 200px;
    width:100%;
  }

</style>
