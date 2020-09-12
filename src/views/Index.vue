<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>

    <h2>首頁</h2>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      isLoading: false,
      fullPage: true,
    };
  },
  created() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>
