import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyA8ir9Rvej6mTXiA2gEF3FiU_7Fl0dyogA",
    authDomain: "meddoctoria.firebaseapp.com",
    projectId: "meddoctoria",
    storageBucket: "meddoctoria.appspot.com",
    messagingSenderId: "514264343812",
    appId: "1:514264343812:web:4d9819d7982b4de965dc51",
    measurementId: "G-ZZKHS4CJGL"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

//usuario

export async function Registro(nome: string, email: string, password: string, genero: string){
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const currentUser = firebase.auth().currentUser

        const db = firebase.firestore()
        db.collection('users')
        .doc(currentUser?.uid)
        .set({
            nome: nome,
            genero: genero,
            email: currentUser?.email,
            created_at: firebase.firestore.FieldValue.serverTimestamp()
        })
    } catch (error) {
        console.log(error)
    }
}

export async function Login(email: string, password: string){
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
        console.log(error)
    }
}

export async function EsqueciSenha(email: string){
    try {
        await firebase.auth().sendPasswordResetEmail(email)
    } catch (error) {
        console.log(error)
    }
}

//Google

export async function AuthGoogleProvider(){
    
}