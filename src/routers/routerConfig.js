import React from 'react';
import Loadable from "react-loadable";


const Loading = () => {
    return <div>
        <img src={require('../img/loading.jpg')} alt="" />
    </div>
}
const Home = Loadable({
    loader: () => import('../views/home'),
    loading: Loading
})
const Shop = Loadable({
    loader: () => import('../views/shop'),
    loading: Loading
})
const My = Loadable({
    loader: () => import('../views/my'),
    loading: Loading
})
const Classify = Loadable({
    loader: () => import('../views/classify'),
    loading: Loading
})
const Discover = Loadable({
    loader: () => import('../views/discover'),
    loading: Loading
})
const Attention = Loadable({
    loader: () => import('../views/attention'),
    loading: Loading
})
const Find = Loadable({
    loader: () => import('../views/find'),
    loading: Loading
})

const routers = [{
    path: "/shop",
    component: Shop,
}, {
    path: "/classfiy",
    component: Classify
},
{
    path: "/home",
    component: Home,
}, {
    path: "/my",
    component: My
},
{
    path: "/discover",
    component: Discover,
    children: [{
        path: "/discover/find",
        component: Find
    }, {
        path: "/discover/attention",
        component: Attention
    }, {
        path: "/discover",
        redirect: "/discover/attention"
    }]
},
{
    path: "/",
    redirect: "/home"

}]
export default routers