<template>
  <transition :name="transitionName">
    <div v-show="visible" :style="customStyle" class="back-to-ceiling rotate90" @click="backToTop">
      <i class="iconfont icon-fanhui"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BackToTop",
  data() {
    return {
      visible: false
    };
  },
  props: {
    customStyle: {
      type: Object,
      default: function() {
        return {
          right: "50px",
          bottom: "50px",
          width: "40px",
          height: "40px",
          "border-radius": "4px",
          "line-height": "45px",
          background: "#e7eaf1"
        };
      }
    },
    transitionName: {
      type: String,
      default: "fade"
    }
  },
  mounted(){
    console.log(this);
  },
  methods: {
    handleScroll(showStatus) {
      this.visible = showStatus;
      console.log(this.visible);
      
    },
    backToTop() {
      this.$emit("backToTopParent")
    }
  }
};
</script>

<style scoped>
.back-to-ceiling {
  position: fixed;
  display: inline-block;
  text-align: center;
  cursor: pointer;
}

.back-to-ceiling:hover {
  background: #d5dbe7;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.back-to-ceiling .Icon {
  fill: #9aaabf;
  background: none;
}

.rotate90 {
  transform: rotate(90deg) !important;
  z-index: 999;
}
</style>
