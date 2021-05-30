import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    searchedFilm: '',
    foundFilms: [],
    results: null,
    page: 1
  },
  mutations: {
  },
  actions: {
    fetchFilms({ state }, film) {
      state.searchedFilm = film;
      axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=' + state.searchedFilm + '&page=' + this.page)
        .then(res => {
          state.foundFilms = res.data.Search
          state.results = res.data.totalResults
        })
    }
  },
  getters: {
    searchedFilm(state) {
      return state.searchedFilm;
    },

    foundFilms(state) {
      return state.foundFilms;
    },

    results(state) {
      return state.results;
    }
  }
})
