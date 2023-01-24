import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  apiKey: "AIzaSyAUwTth--AqmNmoXQ26D1LHMIRBIP_5m3E",
  authDomain: "bicicletas-a132d.firebaseapp.com",
  projectId: "bicicletas-a132d",
  storageBucket: "bicicletas-a132d.appspot.com",
  messagingSenderId: "834536499979",
  appId: "1:834536499979:web:a6218327a0843fd136d00e"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
