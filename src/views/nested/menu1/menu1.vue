<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData()">
        <div class="card-panel-icon-wrapper">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-paixing"></use>
          </svg>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">111111</div>
          <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData()">
        <div class="card-panel-icon-wrapper">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-paixing"></use>
          </svg>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">222222222</div>
          <count-to :start-val="0" :end-val="81212" :duration="3000" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData()">
        <div class="card-panel-icon-wrapper">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-paixing"></use>
          </svg>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">33333333</div>
          <count-to :start-val="0" :end-val="9280" :duration="3200" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData()">
        <div class="card-panel-icon-wrapper">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-paixing"></use>
          </svg>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">444444444444</div>
          <count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from "vue-count-to";

export default {
  components: {
    CountTo
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit("handleSetLineChartData", type);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  .card-panel-col {
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
    // &:hover {
    //   .card-panel-icon-wrapper {
    //     color: #fff;
    //   }
    // }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>
