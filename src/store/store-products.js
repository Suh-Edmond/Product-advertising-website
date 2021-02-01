import Vue from 'vue'
import { uid } from 'quasar'
const state  = {
products:{
    "ID1":{
        
        product_name:'TV',
        price:9990,
        quantity:56,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis falsestrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        condition:'None',
        service:false,
        in_stock:true,
        published:false,
        discount:true
      },
       "ID2":{
        
        product_name:'TV',
        price:9990,
        quantity:56,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis falsestrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        condition:'None',
        service:false,
        in_stock:true,
        published:false,
        discount:true
      },
       "ID3":{
        
        product_name:'TV',
        price:9990,
        quantity:56,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis falsestrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        condition:'None',
        service:false,
        in_stock:true,
        published:false,
        discount:true
      },
      "ID4":{
        
        product_name:'TV',
        price:9990,
        quantity:56,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis falsestrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        condition:'None',
        service:false,
        in_stock:true,
        published:false,
        discount:true
      },
       "ID5":{
        
        product_name:'TV',
        price:9990,
        quantity:56,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis falsestrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        condition:'None',
        service:false,
        in_stock:true,
        published:false,
        discount:true
      },
      "ID6":{
        
        product_name:'TV',
        price:9990,
        quantity:56,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis falsestrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        condition:'None',
        service:false,
        in_stock:true,
        published:false,
        discount:true
      },
       "ID7":{
        
        product_name:'TV',
        price:9990,
        quantity:56,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis falsestrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        condition:'None',
        service:false,
        in_stock:true,
        published:false,
        discount:true
      },
       "ID8":{
        
        product_name:'TV',
        price:9990,
        quantity:56,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis falsestrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        condition:'None',
        service:false,
        in_stock:true,
        published:false,
        discount:true
      },
       "ID9":{
        
        product_name:'TV',
        price:9990,
        quantity:56,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis falsestrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        condition:'None',
        service:false,
        in_stock:true,
        published:false,
        discount:true
      },
       "ID10":{
        
        product_name:'TV',
        price:9990,
        quantity:56,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis falsestrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        condition:'None',
        service:false,
        in_stock:true,
        published:false,
        discount:true
      },
       "ID11":{
        
        product_name:'TV',
        price:9990,
        quantity:56,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis falsestrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        condition:'None',
        service:false,
        in_stock:true,
        published:false,
        discount:true
      },
      "ID12":{
        
        product_name:'TV',
        price:9990,
        quantity:56,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis falsestrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        condition:'None',
        service:false,
        in_stock:true,
        published:false,
        discount:true
      },
     "ID13":{
        product_name:'Camera',
        price:9990,
        quantity:56,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis falsestrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        condition:'None',
        service:true,
        in_stock:true,
        published:false,
        discount:true
      },
   }
}

const mutations = {
     SET_PRODUCT:(state, payload) => {
       Vue.set(state.products, payload.id, payload.product)
     },
     UPDATE: (state, payload) => {
        Object.assign(state.products[payload.id], payload.updated)
     },
     DELETE:(state, id) => {
       Vue.delete(state.products, id)
     }
}

const actions = {
  addProduct:({commit}, product) => {
   let prod_id =uid()
   let payload = {
     id:prod_id,
     product:product
   }
    commit('SET_PRODUCT', payload)
  },
  updateProduct:({commit}, payload) => {
  // console.log(payload.id)
  commit("UPDATE", payload)
  },
  delete:({commit}, id) => {
    commit('DELETE', id)
  }
}

const getters = {
   products:(state) => {
     return state.products
   }
}

export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}