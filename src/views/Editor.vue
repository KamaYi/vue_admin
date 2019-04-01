<template>
  <div id="father" style="height:150px;">
    <wang-editor :catchData="catchData"></wang-editor>
  </div>
</template>

<script>
  import WangEditor from '../components/common/WangEditor'
  export default {
    data() {
      return {
        content: "",
      }
    },
    methods: {
      catchData(value) {
        this.content = value //在这里接受子组件传过来的参数，赋值给data里的参数
      }
    },
    mounted() {
      // this.$axios.get('/api/getRoom')
      //   .then(function (response) {
      //     console.log(response);
      //   })
    },
    components: {
      WangEditor
    },
  }

</script>
