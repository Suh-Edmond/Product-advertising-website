
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/Index.vue'),
        name:"MarketProducts"
      },//loads all products been advertised
      {
        path:'/home', 
        component: () => import('pages/Home.vue'),
        name:"Home"
      },
      {
        path:'/home/user/products', 
        component: () =>import('pages/UserProduct.vue'),
        name:"UserProduct"
      },
      {
        path:'/home/user/products/:id', 
        component: () => import('pages/ProductDetails.vue'),
        name:"ProductDetails"
      },
      
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
