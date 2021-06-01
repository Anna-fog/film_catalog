<template>
  <div class="pagination">
    <img class="left-arrow" @click="prevPage" src="../assets/left-arrow.svg" alt="previous">
    <div class="page" @click="setCurrentPage(page)" v-for="page in pagesToShow" >{{ page }}</div>
    <img class="right-arrow" @click="nextPage" src="../assets/right-arrow.svg" alt="next">
  </div>
</template>

<script>
export default {
  computed: {
    pagesTotal() {
      const list = [];
      for (let i = 0; i < this.$store.state.pagesTotal; i++) {
        list.push(i);
      }

      return list;
    },

    pagesToShow() {
      const start = this.$store.state.currentPage;
      const end = start + 10;

      if (this.$store.state.currentPage + 10 < this.$store.state.pagesTotal) {
        return this.pagesTotal.slice(start, end);
      } else {
        return this.pagesTotal.slice(-10);
      }
    }
  },

  methods: {
    nextPage() {
      this.$store.commit('nextPage');
      this.$store.dispatch('fetchFilms');
    },

    prevPage() {
      this.$store.commit('prevPage');
      this.$store.dispatch('fetchFilms');
    },

    setCurrentPage(page) {
      this.$store.commit('setCurrentPage', page);
      this.$store.dispatch('fetchFilms');
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 400px;
  margin: 0 auto;
  padding-bottom: 60px;

  @media (max-width: 600px) {
    width: 250px;
  }
}

.page {
  padding: 5px;
  margin: 2px 5px;
  cursor: pointer;
}

.left-arrow, .right-arrow {
  cursor: pointer;
  width: 8px;
  height: auto;
}

</style>
