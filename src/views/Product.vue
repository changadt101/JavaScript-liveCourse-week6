<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>

    <h2>單一產品頁面</h2>

    <h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      isLoading: false,
      fullPage: true,
    };
  },
  created() {
    // 屬性 $route
    // 方法 $router
    this.isLoading = true;

    const { id } = this.$route.params;

    this.$http.get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((res) => {
        this.product = res.data.data;
        this.isLoading = false;
      });
  },
};
</script>
