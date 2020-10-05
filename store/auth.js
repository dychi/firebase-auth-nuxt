// import { auth } from '~/plugins/firebase'

// const LOGGED_IN = 'loggedIn'
// const LOGGED_OUT = 'loggedOut'

// export const state = () => ({
//   status_email: '',
//   username: '',
//   token: localStorage.getItem('token') || '',
// })

// export const getters = {
//   isEmailLoggedIn: (state) => state.status_email === LOGGED_IN,
// }

// export const actions = {
//   gotUser(commit, user) {
//     commit('setUser', user)
//   },
//   logout(commit) {
//     auth.signOut().then(() => commit('logout'))
//   },
// }

// export const mutations = {
//   setUser(state, user) {
//     state.status_email = LOGGED_IN
//     state.username = user.displayName
//   },
//   logout(state) {
//     state.status_email = LOGGED_OUT
//     state.username = ''
//   },
// }
