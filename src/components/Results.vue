<template>
  <div class="results">
    <div class="results__header">You searched for: {{ searchedFilm }}, {{ results}} results found</div>
    <div class="results__wrapper">
      <film-card v-for="film in foundFilms" :film="film"></film-card>
    </div>
  </div>
</template>

<script>
import FilmCard from "./FilmCard";

export default {
  props: ['foundFilms'],

  components: {
    FilmCard
  },

  computed: {
    foundFilms() {
      return this.$store.getters.foundFilms
    },

    searchedFilm() {
      return this.$store.getters.searchedFilm.charAt(0).toUpperCase() + this.$store.getters.searchedFilm.slice(1);
    },

    results() {
      return this.$store.getters.results
    }
  }
}
</script>

<style lang="scss" scoped>
.results {
  padding: 20px;

  &__header {
    font-size: 24px;
    font-weight: bold;
  }

  &__wrapper {
    margin-top: 40px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}

</style>
