import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import firebase from "firebase";


var config = {
    apiKey: "AIzaSyAAVOQck76mBLZmUna67EHQXPjheb95W7M",
    authDomain: "ryota-firstproject.firebaseapp.com",
    databaseURL: "https://ryota-firstproject-default-rtdb.firebaseio.com",
    projectId: "ryota-firstproject",
    storageBucket: "ryota-firstproject.appspot.com",
    messagingSenderId: "601681180049",
    appId: "1:601681180049:web:62724ac48d3a1920009630",
    measurementId: "G-1F5J20XYK0"
};

//Firebaseの初期化
var fireapp;
try {
    firebase.initializeApp(config);
} catch (error) {
    console.log(error.message);
}
export default fireapp;

//ステート初期化
const initial = {
    login:false,
    username:'(click here!)',
    email:'',
    data:[],
    items:[]
}

//レデューサー(ダミー)
function fireReducer(state = intitial, action) {
    switch (action.type) {
        //ダミー
        case 'UPDATE_USER':
        return state;
        //デフォルト
        default:
            return state;
    }
}

//initStore関数
export function initStore(state = initial){
    return createStore(fireReducer, state, applyMiddleware(thunkMiddleware))
}