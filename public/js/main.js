import {initializeApp} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js"
import {getDatabase, set, ref, push, onValue} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBupj6zDwcw1qoPAwec9cEV6FK_gnHBwqA",
    authDomain: "smart-rooftop.firebaseapp.com",
    databaseURL: "https://smart-rooftop-default-rtdb.firebaseio.com",
    projectId: "smart-rooftop",
    storageBucket: "smart-rooftop.appspot.com",
    messagingSenderId: "297827364778",
    appId: "1:297827364778:web:b3dde726e829484db885d3",
    measurementId: "G-H4KZ9SVGBR"
})

const db = getDatabase(firebaseApp);
var cuacaRef = ref(db, 'Cuaca');
var servoRef = ref(db, 'Servo');
var posisiRef = ref(db, 'Posisi');

onValue(cuacaRef, (snapshot) => {
    var dataCuaca = snapshot.val();
    document.getElementById('cuaca').innerHTML = dataCuaca;
})

onValue(posisiRef, (snapshot) => {
    var dataPosisi = snapshot.val();
    document.getElementById('posisi').innerHTML = dataPosisi;
})

function setServoIn(){
    set(servoRef, 'in')
}

function setServoOut(){
    set(servoRef, 'out')
}

document.getElementById('servoIn').addEventListener('click', setServoIn);
document.getElementById('servoOut').addEventListener('click', setServoOut);


const getCurrentTimeDate = () => {
    let currentTimeDate = new Date();
    var hours = currentTimeDate.getHours();
    var minutes = currentTimeDate.getMinutes();
    var seconds = currentTimeDate.getSeconds();
    
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    hours = hours < 10 ? '0'+hours : hours;

    var currentTime = hours+' : '+minutes+' : '+seconds;
    document.getElementById('waktu').innerHTML = currentTime;
    setTimeout(getCurrentTimeDate, 500);
}
getCurrentTimeDate();