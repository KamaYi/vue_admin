<template>
  <el-col :span="24" class="header">
    爱房logo
    <span @click="handleOpenClose()">操作侧边栏</span>
  </el-col>
</template>

<script>
  import {
    mapState,
    mapActions
  } from 'vuex'
  export default {
    data() {
      return {}
    },
    mounted() {

    },
    props: [],
    computed: {},
    methods: {
      handleOpenClose(){
        this.$store.dispatch('isShow');
      }
    },

  }

</script>

<style lang="scss" scoped>
  @import '../../assets/scss/mixin';
</style>
