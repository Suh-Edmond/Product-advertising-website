
const routes = [
  
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '',
        redirect:'/home', 
        component: () => import('pages/Index.vue'),
        name:"MarketProducts"
      },
      {
        path:'/products/:id', 
        component: () => import('pages/ProductDetails.vue'),
        name:"ProductDetails"
      },
      {
        path:'/login',
        component: ()=> import('pages/Register.vue'),
      }
      
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
