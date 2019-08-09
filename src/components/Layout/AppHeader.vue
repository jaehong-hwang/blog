<template>
  <b-navbar>
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
  }),
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
</style>
