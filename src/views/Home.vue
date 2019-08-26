<template>
  <div class="home">
    <lazy-image :images="[
      '/images/main-visual/small.jpg',
      '/images/main-visual/medium.jpg',
      '/images/main-visual/large.jpg',
      '/images/main-visual/original.jpg'
    ]" />
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>
