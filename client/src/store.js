import { createStore } from 'vuex';

const state = {
  currentSong: '',
  currentSongList: [],
  currentUser: {},
  loggedIn:false,
  playlist: [],
}
const mutations = {
  setSongId(state, currentSong){
    state.currentSong = currentSong
  },
  setCurrentUser(state, user) {
    state.currentUser = user;
  },
  setPlaylist(state, playlist) {
    state.playlist = playlist
  }
}
const actions = {
  async register(store, credentials) {
    let user = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    try{
      user = await user.json();
      console.log('success');
      store.commit('setCurrentUser', user); 
    }catch{
      console.warn("Registration error");
    }
},
  async login(store,credentials){
    console.log("credentials is ",credentials);
    let res = await fetch('/api/login',{
      method:'post',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify(credentials)
    })
    console.log("user0",res)
    let user = await res.json()
    console.log("user1",user)
    store.commit('setCurrentUser',user)
  },
  async getPlaylists(store, userId) {
    let playlists = await fetch('/rest/playlists/user/' + userId);
    playlists = await playlists.json();
    console.log(playlists);
    store.commit('setPlaylist', playlists);
  },
  async createPlaylist(store, playlist) {
    let playlists = await fetch('/rest/playlists', {
      method: 'POST',
      body: JSON.stringify(playlist),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    playlists = await playlists.json();
    store.commit('setPlaylist', playlist);
  }
}
export default createStore({ state, mutations, actions })