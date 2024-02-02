import { createStore } from 'vuex'

export default createStore({
  state: {
    currentPosition: '',
    lat: 0,
    lon: 0,
    units: 'metric'
  },
  getters: {
    currentPosition: state => {
      return state.currentPosition;
    },
    lat: state => {
      return state.lat;
    },
    lon: state => {
      return state.lon;
    },
    units: state => {
      return state.units;
    }
  },
  mutations: {
    setCurrentPosition: (state, payload) => {
      state.currentPosition = payload;
    },
    setLat: (state, payload) => {
      state.lat = payload;
    },
    setLon: (state, payload) => {
      state.lon = payload;
    },
  },
  actions: {
    setLatAndLon: async (context, payload) => {
      const URL = `https://api.openweathermap.org/geo/1.0/direct?q=${payload}&limit=5&appid=08789ab932af5d6de716da1eaa4cfca7`;
      const response = await fetch(URL);
      const data = await response.json();
      const { lat, lon } = data[0];
      context.commit('setLat', lat);
      context.commit('setLon', lon);
    }
  },
  modules: {
  }
})
