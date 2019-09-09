<template>
  <b-navbar
    class="is-fixed-top"
    :class="{ 'is-transparent': isTransparent }"
  >
    <template slot="brand">
      <b-navbar-item href="/">
        <h1 :class="{ 'has-text-white': isTransparent }">방구석연구소</h1>
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
  computed: {
    isTransparent() {
      return this.scrollTop < 50
    },
  },
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

.is-fixed-top {
  transition: all .5s;

  &.is-transparent {
    background-color: rgba(255,255,255,0);
  }
}
</style>
