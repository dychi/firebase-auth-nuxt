<template>
  <v-layout>
    <v-container>
      <v-card>
        <v-card-title>Login</v-card-title>
        <v-card-text>
          Card Text
          <p id="firebaseui-auth-container">firebaseui-auth-container</p>
        </v-card-text>
      </v-card>
    </v-container>
  </v-layout>
</template>

<script>
import { auth, authProvider } from '~/plugins/firebase'
const firebaseui = require('firebaseui')
require('firebaseui/dist/firebaseui.css')

export default {
  data() {
    return {
      ui: undefined,
      uiConfig: undefined,
    }
  },
  mounted() {
    this.ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)
    const uiConfig = {
      signInOptions: [
        {
          provider: authProvider.Email,
          requireDisplayName: true,
        },
      ],
      callbacks: {
        // Nuxtのローカルサーバーで起こるCORSエラーのためこのように設定。本番環境では不要
        signInSuccessWithAuthResult: (authResult) => {
          window.location.href = '/'
          return false // falseを設定するとsignInSuccessUrlにはリダイレクトしない
        },
      },
      signInSuccessUrl: '/',
      signInFlow: 'popup',
    }
    this.ui.start('#firebaseui-auth-container', uiConfig)
  },
}
</script>
