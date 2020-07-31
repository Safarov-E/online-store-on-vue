import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from '../components/ProductsList'
import Cart from '../components/Cart'
import E404 from '../components/E404'

Vue.use(VueRouter)

const routes = [
    {
        path: '/products',
        component: ProductList
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '*',
        component: E404
    }
]

export const router = new VueRouter({
    routes,
    mode: 'history'
})