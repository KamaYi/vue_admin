<template>
  <div>
    <upload-image :parentName="parentName" :catchData="catchData"  ref="image"></upload-image>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="textarea">
    </el-input>
  </div>
</template>

<script>
  import UploadImage from '../components/common/UploadImage.vue'

  export default {
    data() {
      return {
        parentName:'ThePicture',
        textarea:''
      };
    },
    components:{
      UploadImage
    },
    mounted(){
    },
    methods: {
      catchData(value) {//接收子组件的返回参数
        this.imageUrl = value //在这里接受子组件传过来的参数，赋值给data里的参数
      }
    },
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
