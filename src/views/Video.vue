<template>
  <div>
    <upload-video :parentName="parentName" :catchData="catchData"></upload-video>
  </div>
</template>

<script>
  import UploadVideo from '../components/common/UploadVideo.vue'
  export default {
    data() {
      return {
        parentName:'TheVideo',
        videoUrl:''
      }
    },
    components:{
      UploadVideo
    },
    mounted() {
    },
    methods: {
      catchData(value) {
        this.videoUrl = value;
        console.log( this.videoUrl )
      }
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
