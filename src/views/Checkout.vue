<template>
  <div>
    <h2>這裡是結帳頁面</h2>
    <button @click="goPage()">確認並進行結帳</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    goPage() {
      this.$router.push('/checkoutFinish');
    },
  },
};
</script>
