import Vuex from 'vuex';
import socket from '../plugins/socket';

const createStore = () =>{

    return new Vuex.Store({
        state:{
            city : "default city",
            allfloors : {floor1 :0,floor2:0,floor3:0,floor4:0},
            floor1 : 0,
            floor2 : 0,
            floor3 : 0,
            floor4 : 0
        },
        mutations : {
            setCountry(state,name){
                state.country = name;
            },
            SOCKET_CONNECT(state, status) {
                console.log('SOCKET_CONNECT ',status);
            },
            SOCKET_CONNECTION_NOTIFICATION(state,data){
                console.log("SOCKET_CONNECTION_NOTIFICATION data ",data)
            },
            SOCKET_ALLFLOORS(state,data){
                console.log("SOCKET_ALLFLOORS data ",data)
                state.allfloors = data.data;
            },
            SOCKET_FLOOR1(state,data){
                console.log("SOCKET_FLOOR1 data ",data)
                state.floor1 = data.data;
            },
            SOCKET_FLOOR2(state,data){
                console.log("SOCKET_FLOOR2 data ",data)
                state.floor2 = data.data;
            },
            SOCKET_FLOOR3(state,data){
                console.log("SOCKET_FLOOR3 data ",data)
                state.floor3 = data.data;
            },
            SOCKET_FLOOR4(state,data){
                console.log("SOCKET_FLOOR4 data ",data)
                state.floor4 = data.data;
            },
            SOCKET_DISCONNECT(state, status) {
                console.log('SOCKET_DISCONNECT ',status);
            }
        },
        actions:{
            setACountry(VueContext,name){
                VueContext.commit("setCountry",name);
            }
        },
        getters: {
            getCountry(state){
                return state.country;
            },
            getAllFloors(state){
                return state.allfloors;
            },
            getFloor1(state){
                return state.floor1;
            },
            getFloor2(state){
                return state.floor2;
            },
            getFloor3(state){
                return state.floor3;
            },
            getFloor4(state){
                return state.floor4;
            }
        }
    });

};

export default createStore;