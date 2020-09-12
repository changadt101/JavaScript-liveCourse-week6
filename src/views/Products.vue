<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>

    <h2>這裡是產品頁</h2>

    <table>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.origin_price }}</td>
        <td>
          <!-- 動態連結、動態路由 -->
          <a href="#" @click.prevent="goPage(item)">進入頁面</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      isLoading: false,
      fullPage: true,
    };
  },
  methods: {
    goPage(item) {
      this.$router.push(`/product/${item.id}`);
    },
  },
  created() {
    this.isLoading = true;

    this.$http.get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.products = res.data.data;
        this.isLoading = false;
      });
  },
};
</script>
