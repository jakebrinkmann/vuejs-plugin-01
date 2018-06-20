// Main Entrypoint of VueJS app
import Vue from 'vue'
import UserPop from './UserPop.vue'

// Define a plugin
export default {
    install(Vue, options) {
        Vue.component('user-pop', UserPop)
    }
}
