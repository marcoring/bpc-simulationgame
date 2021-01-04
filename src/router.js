import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import LandingPage from './views/LandingPage.vue';
import Dashboard from './views/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: LandingPage
    },
    {
        path: '/dashboard',
        component: Dashboard
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router