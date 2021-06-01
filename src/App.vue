<template>
  <div>
    <app-header></app-header>

    <div v-if="!results && submitSearch && !loading" class="no-results">Sorry, no results found...</div>

    <div v-if="loading" class="loading"></div>

    <div v-else-if="results">
      <app-results></app-results>
      <pagination></pagination>
    </div>

  </div>
</template>

<script>
import AppHeader from "./components/Header";
import AppResults from "./components/Results";
import Pagination from "./components/Pagination";

export default {
  name: 'App',
  components: {
    AppHeader,
    AppResults,
    Pagination
  },

  computed: {
    foundFilms() {
      return this.$store.getters.foundFilms;
    },

    submitSearch() {
      return this.$store.getters.submitSearch;
    },

    results() {
      return Number(this.$store.getters.results) > 0
    },

    loading() {
      return this.$store.getters.loading;
    }
  },

}
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: sans-serif;
}

.no-results {
  margin-top: 40px;
  text-align: center;
  font-size: 24px;
  color: gray;
}

.loading {
  margin: 90px auto 0 auto;
  width: 40px;
  height: 40px;
  border: 20px solid darkslategray;
  border-radius: 50%;
  animation: scale 1.5s infinite ease-out;
}

@keyframes scale {
  0% {
    transform: scale(0);
    border: 20px solid darkslategray;
  }
  50% {
    border-color: lightblue;
  }
  100% {
    transform: scale(1) translateY(10px);
    border: 0 solid white;
  }
}
</style>
