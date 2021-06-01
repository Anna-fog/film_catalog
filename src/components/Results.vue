<template>
  <div>
    <div class="results">
      <div class="results__header">You searched for: {{ searchedFilm }}, {{ results}} results found</div>
      <div class="results__wrapper">
        <film-card v-for="(film, i) in foundFilms" :film="film" :key="i"></film-card>
      </div>
    </div>
  </div>
</template>

<script>
import FilmCard from "./FilmCard";

export default {
  components: {
    FilmCard
  },

  computed: {
    foundFilms() {
      return this.$store.state.foundFilms;
    },

    searchedFilm() {
      return this.$store.getters.searchedFilm.charAt(0).toUpperCase() + this.$store.getters.searchedFilm.slice(1);
    },

    results() {
      return Number(this.$store.getters.results)
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

    @media (max-width: 1200px) {
      font-size: 18px;
    }
  }

  &__wrapper {
    margin-top: 40px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    @media (max-width: 1200px) {
      justify-content: center;
    }
  }
}
</style>
