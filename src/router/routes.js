
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },//loads all products been advertised
      {paht:'/home', component: () => import('pages/Home.vue')},
      {path:'/home/user/products', component: () =>import('pages/UserProduct.vue')},
      {path:'/home/user/products/{id}', component: () => import('pages/ProductDetails.vue')},
      {path:'/home/user/products/{id}/edit', component: () => import('pages/EditProduct.vue')},
      {path:'/home/user/product/add', component: () => import('pages/AddProduct.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
