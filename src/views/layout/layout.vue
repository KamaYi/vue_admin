<template>
  <el-row class="container">
    <!-- 头部 -->
    <the-header></the-header>
    <!-- content -->
    <el-col :span="24" class="main">
      <!-- 侧边栏 -->
      <the-aside></the-aside>
      <section class="content-container" ref="viewhome">
        <transition name="fade-transform" mode="out-in">
          <router-view/>
        </transition>
        <back-to-top ref="mychild" @backToTopParent="backToTop"></back-to-top>
      </section>
    </el-col>
  </el-row>
</template>
<script>
import { ceshiPut, ceshiGet, ceshiDelete } from "@/api/api";
import { mapState, mapActions } from "vuex";
import TheHeader from "@/components/Header/index";
import TheAside from "@/components/Aside/index";
import Breadcrumb from "@/components/Breadcrumb/index";
import BackToTop from "@/components/BackToTop";
export default {
  data() {
    return {
      router: true
    };
  },
  components: {
    TheHeader,
    TheAside,
    Breadcrumb,
    BackToTop
  },
  mounted() {
    // ceshiPut({
    //   data1: '11111',
    //   data2: '22222'
    // }).then(data => {
    //   console.log(data);
    // });
    // ceshiGet({
    //   data1: '44444',
    //   data2: '55555'
    // }).then(data => {
    //   console.log(data);
    // });
    // ceshiDelete({
    //   data1: '7777',
    //   data2: '6666'
    // }).then(data => {
    //   console.log(data);
    // });
    this.$refs.viewhome.addEventListener("scroll", () => {
      this.visible = this.$refs.viewhome.scrollTop > 200;
      this.listerParent(this.visible);
    });
  },
  computed: {},
  methods: {
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    listerParent() {
      this.$refs.mychild.handleScroll(this.visible);
    },
    backToTop() {
      console.log("#45345345345");

      this.$refs.viewhome.scrollTop = 0;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/mixin";
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  .header {
    height: 60px;
    line-height: 60px;
    background: $color-primary;
    color: #fff;
  }
  .main {
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
    .menu-collapsed {
      flex: 0 0 60px;
      width: 60px;
    }
    .menu-expanded {
      flex: 0 0 230px;
      width: 230px;
    }
    .content-container {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      .breadcrumb-container {
        .title {
          width: 200px;
          float: left;
          color: #475669;
        }
        .breadcrumb-inner {
          float: right;
        }
      }
      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
}
</style>
