<template>
  <el-scrollbar>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isShow"
      router="router"
    >
      <router-link :to="'/layout'">
        <el-menu-item index="1">
          <i class="el-icon-setting"></i>
          <span slot="title">首页</span>
        </el-menu-item>
      </router-link>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">嵌套路由</span>
        </template>
        <el-submenu index="2-1">
          <span slot="title">嵌套路由1</span>
          <el-menu-item index="/nested/menu1">嵌套路由1-1</el-menu-item>
          <el-menu-item index="/nested/menu2">嵌套路由1-2</el-menu-item>
          <el-menu-item index="/nested/menu3">嵌套路由1-3</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-scrollbar>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["isShow"])
  },
  mounted(){
    this.$store.dispatch('isShow');
  },
  methods: {
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scope>
  .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
