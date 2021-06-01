import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    searchedFilm: '',
    foundFilms: [],
    results: null,
    currentPage: 1,
    pagesTotal: null,
    submitSearch: false,
    loading: false
  },

  mutations: {
    setSearchedFilm(state, film) {
      state.searchedFilm = film;
    },

    setCurrentPage(state, page) {
      state.currentPage = page;
    },

    nextPage(state) {
      if (state.currentPage !== state.pagesTotal) {
        state.currentPage++;
      }
    },

    prevPage(state) {
      if (state.currentPage > 1) {
        state.currentPage--;
      }
    },

    clearCurrentSearch(state) {
      state.searchedFilm = '';
      state.foundFilms = [];
      state.results = null;
      state.currentPage = 1;
      state.pagesTotal = null;
    }
  },

  actions: {
    fetchFilms({ state }) {
      state.loading = true;
      console.log(state.loading)

      axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=' + state.searchedFilm + '&page=' + state.currentPage)
        .then(res => {
          state.foundFilms = res.data.Search;
          state.results = res.data.totalResults;
          state.pagesTotal = Math.ceil(state.results / 10);
          state.submitSearch = true;
          state.loading = false;
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
    },

    submitSearch(state) {
      return state.submitSearch;
    },

    loading(state) {
      return state.loading;
    }
  }
})
