import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/Index.vue'),
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('../views/Products.vue'),
      },
      { // 動態路由
        path: '/product/:id',
        name: 'Product',
        component: () => import('../views/Product.vue'),
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/Cart.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
      },
      {
        path: '/checkout',
        name: 'Checkout',
        component: () => import('../views/Checkout.vue'),
      },
      {
        path: '/checkoutFinish',
        name: 'CheckoutFinish',
        component: () => import('../views/CheckoutFinish.vue'),
      },
    ],
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'BackendProducts',
        component: () => import('../views/dashboard/Products.vue'),
      },
      {
        path: 'coupons',
        name: 'BackendCoupons',
        component: () => import('../views/dashboard/Coupons.vue'),
      },
      {
        path: 'orders',
        name: 'BackendOrders',
        component: () => import('../views/dashboard/Orders.vue'),
      },
      {
        path: 'pictures',
        name: 'BackendPictures',
        component: () => import('../views/dashboard/Pictures.vue'),
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
