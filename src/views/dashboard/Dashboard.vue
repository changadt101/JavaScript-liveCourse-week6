<template>
  <div>
    <h2>歡迎來到後台管理頁面</h2>

    <div id="nav">
      <router-link to="/admin/products">後台產品列表</router-link> |
      <router-link to="/admin/coupons">優惠券列表</router-link> |
      <router-link to="/admin/orders">訂單列表</router-link> |
      <router-link to="/admin/pictures">圖片儲存列表</router-link> |
      <router-link to="/">返回前台頁面</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>
