import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '~/firebase.config'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const authProvider = {
  Email: firebase.auth.EmailAuthProvider.PROVIDER_ID,
}

export const auth = firebase.auth()
