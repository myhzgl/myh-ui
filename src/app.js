import Vue from 'vue'
import Button from './components/Button/button.vue'

Vue.component('m-button',Button)
new Vue({
    el: '#app',
    data: {
        message: 'mess'
    }
})