<template>
  <img
    ref="image"
    :src="imageLink"
  >
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    imageLink: '',
    loaded: -1,
  }),
  created() {
    this.images.forEach((key, imageLink) => {
      const img = new Image()
      img.src = imageLink
      img.onload = () => {
        if (this.loaded >= key) {
          console.log(imageLink)
          this.imageLink = imageLink
          this.loaded = key
        }
      }
    })
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
