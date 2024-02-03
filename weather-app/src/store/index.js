import { createStore } from 'vuex'

export default createStore({
  state: {
    KEY: '08789ab932af5d6de716da1eaa4cfca7',
    data: {},
    requestDate: '',
    currentPosition: 'Petrozavodsk',
    lat: 0,
    lon: 0,
    units: 'metric'
  },
  getters: {
    KEY: state => {
      return state.KEY;
    },
    data: state => {
      return state.data;
    },
    requestDate: state => {
      return state.requestDate;
    },
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
    setData: (state, payload) => {
      state.data = payload;
    },
    setRequestDate: (state, payload) => {
      state.requestDate = payload;
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
      const position = payload ? payload : context.getters.currentPosition;
      context.commit('setCurrentPosition', position);
      const URL = `https://api.openweathermap.org/geo/1.0/direct?q=${position}&limit=5&appid=${context.getters.KEY}`;
      const response = await fetch(URL);
      const data = await response.json();
      const { lat, lon } = data[0];
      context.commit('setLat', lat);
      context.commit('setLon', lon);
    },
    setDataAsync: async (context, payload) => {
      const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${context.getters.lat}&lon=${context.getters.lon}&units=metric&lang=EN&appid=${context.getters.KEY}`;
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      
      const date = new Date();
      const day = `${date.getDate()}`.padStart(2,0);
      const month =  `${date.getMonth() + 1}`.padStart(2,0);
      const hour = `${date.getHours()}`.padStart(2,0);
      const min = `${date.getMinutes()}`.padStart(2,0);
      const formatDate = `${day}.${month} at ${hour}:${min}`;
      context.commit('setRequestDate', formatDate);

      localStorage.setItem('data', JSON.stringify(data));
      context.commit('setData', data);
    }
  },
  modules: {
  }
})
