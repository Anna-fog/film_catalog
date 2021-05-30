<template>
  <div class="film">
    <div v-if="film.Poster !== 'N/A'" class="film__image" :style="{ backgroundImage: `url(${film.Poster})` }"></div>
    <img class="film__image" v-else src="../assets/placeholder-image.png" alt="image">
    <div class="film__info">
      <div class="film__name">Name: {{ film.Title }}</div>
      <div class="film__year">Year: {{ film.Year }}</div>
      <div class="film_imdb">ImdbId: {{ film.imdbID }} </div>
      <div class="film__type">Movie: {{ film.Type }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['film']
}
</script>

<style lang="scss" scoped>
.film {
  width: 200px;
  margin: 0 10px 10px 0;

  &__image {
    width: 200px;
    height: 290px;
    background-size: cover;
   }

  &__info {
    margin-top: 10px;
  }
}
</style>
