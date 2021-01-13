import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import Dashboard from './views/Dashboard.vue'
import Purchaising from './views/Purchaising.vue';
import Logistics from './views/Logistics.vue';
import FramePreparation from './views/FramePreparation.vue';
import SensorsPreparation from './views/SensorsPreparation.vue';
import EnginePreparation from './views/EnginePreparation.vue';
import BatteryPreparation from './views/BatteryPreparation.vue';
import BikeConstruction from './views/BikeConstruction.vue';
import AppDevAndMaintenance from './views/AppDevAndMaintenance.vue';
import QualityAssurance from './views/QualityAssurance.vue';
import Sales from './views/Sales.vue';
import PageNotFound from './views/PageNotFound.vue';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'LandingPage',
        component: LandingPage,
        meta: {
            visible: true,
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            visible: true,
        }
    },
    {
        path: '/purchaising',
        name: 'Purchaising',
        component: Purchaising,
        meta: {
            visible: true,
        }
    },
    {
        path: '/logistics',
        name: 'Logistics',
        component: Logistics,
        meta: {
            visible: true,
        }
    },
    {
        path: '/framePreparation',
        name: 'FramePreparation',
        component: FramePreparation,
        meta: {
            visible: true,
        }
    },
    {
        path: '/sensorsPreparation',
        name: 'SensorsPreparation',
        component: SensorsPreparation,
        meta: {
            visible: true,
        }
    },
    {
        path: '/enginePreparation',
        name: 'EnginePreparation',
        component: EnginePreparation,
        meta: {
            visible: true,
        }
    },
    {
        path: '/batteryPreparation',
        name: 'BatteryPreparation',
        component: BatteryPreparation,
        meta: {
            visible: true,
        }
    },
    {
        path: '/bikeConstruction',
        name: 'BikeConstruction',
        component: BikeConstruction,
        meta: {
            visible: true,
        }
    },
    {
        path: '/appDevAndMaintenance',
        name: 'AppDevAndMaintenance',
        component: AppDevAndMaintenance,
        meta: {
            visible: true,
        }
    },
    {
        path: '/qualityAssurance',
        name: 'QualityAssurance',
        component: QualityAssurance,
        meta: {
            visible: true,
        }
    },
    {
        path: '/sales',
        name: 'Sales',
        component: Sales,
        meta: {
            visible: true,
        }
    },
    {
        path: '*',
        name: 'PageNotFound',
        component: PageNotFound,
        meta: {
            visible: true,
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router