import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from '../components/ProductsList'
import Cart from '../components/Cart'

Vue.use(VueRouter)

const routes = [
    {
        path: '/products',
        component: ProductList
    },
    {
        path: '/cart',
        component: Cart
    }
]

export const router = new VueRouter({
    routes,
    mode: 'history'
})