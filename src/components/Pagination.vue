<template>
  <div class="pagination">
    <img src="../assets/left-arrow.svg" alt="" class="left-arrow">
    <div v-for="page in pagesTotal" class="page">{{ page }}</div>
    <img src="../assets/right-arrow.svg" alt="" class="right-arrow">
  </div>
</template>

<script>
export default {
  computed: {
    pagesTotal() {
      return Math.floor(this.$store.getters.results / 10)
    },

    pagesToShow() {
      return this.pagesTotal
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
}

.page {
  padding: 5px;
  margin: 5px;
  cursor: pointer;
}

.left-arrow, .right-arrow {
  cursor: pointer;
  width: 8px;
  height: auto;
}

</style>
