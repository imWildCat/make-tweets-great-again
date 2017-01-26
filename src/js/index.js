import App from './components/App.vue';
import Element from 'element-ui';
import Vue from 'vue';
import store from './store'

Vue.use(Element);

new Vue({
    el: '#app',
    store,
    render: h => h(App)
});
