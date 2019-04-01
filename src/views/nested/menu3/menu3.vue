<template>
  <div style="padding:30px;">
    <breadcrumb></breadcrumb>
  </div>
</template>
<script>
import Breadcrumb from "@/components/Breadcrumb/index";
export default {
  data() {
    return {
      show: true
    };
  },
  components: {
    Breadcrumb
  }
};
</script>
<style lang="scss">

</style>