import Vue from 'vue'
import VueSocketio from 'vue-socket.io-extended';
import socket from './socket';
export default ({ store, redirect }) => {
    Vue.use(VueSocketio, socket, { store });
} 