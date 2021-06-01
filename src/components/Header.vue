<template>
  <header class="header">
    <div class="logo">Movie catalog</div>
    <input class="search" @keydown.enter="searchFilm" v-model="searchedFilm" type="text">
    <div class="user">
      <img class="user__icon" src="../assets/user.svg" alt="user">
      <div class="user__name">Alexander Borisenko</div>
      <img class="user__menu" src="../assets/menu.svg" alt="menu">
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    searchFilm() {
      this.$store.commit('clearCurrentSearch');
      this.$store.commit('setSearchedFilm', this.searchedFilm);
      this.$store.dispatch('fetchFilms');
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: lightblue;

  .logo {
    font-size: 30px;
    line-height: 100%;
    font-weight: bold;

    @media (max-width: 600px) {
      font-size: 20px;
    }
  }

  .search {
    height: 30px;
    width: 45%;
    margin: 0 20px;
    padding: 3px 10px;
    border: none;

    @media (max-width: 600px) {
      width: 70%;
    }
  }

  .user {
    display: flex;
    justify-content: center;
    align-items: center;

    &__name {
      width: 150px;
      margin: 0 5px;
      cursor: pointer;

      @media (max-width: 600px) {
        display: none;
      }
    }

    &__icon {
      width: 20px;
      height: auto;
      cursor: pointer;
    }

    &__menu {
      width: 10px;
      height: auto;
    }
  }
}

</style>
