<template>
  <b-navbar
    class="is-fixed-top"
    :class="{ 'is-transparent': scrollTop < 50 }"
  >
    <template slot="brand">
      <b-navbar-item href="/">
        <h1>방구석연구소</h1>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <b-button type="is-primary" @click="setLoading" :loading="loading">test</b-button>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    scrollTop: 0,
  }),
  created() {
    window.addEventListener('scroll', () => {
      this.scrollTop = window.scrollY
    })
  },
  methods: {
    setLoading() {
      this.loading = true

      setTimeout(() => {
        this.loading = false
      }, 500)
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-weight: bold;
  font-size: 1.2rem;
}

.is-transparent {
  background-color: rgba(255,255,255,0);
  transition: all .5s;
}
</style>
