// src/plugins/vuetify.js

import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

const theme = {
    primary: '#4E9455',
    /* green as logo */
    secondary: '#4E9356,',
    accent: '#9FE3AC',
    error: '#4E9455',
    info: '#4E9455',
    success: '#4E9455',
    warning: '#4E9455',
};

export default new Vuetify({
    theme: {
        themes: {
            light: theme,
            dark: theme,
        },
    },
});