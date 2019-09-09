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
    this.images.forEach((imageLink, key) => {
      setTimeout(() => {
        const img = new Image()
        img.src = imageLink
        img.onload = () => {
          if (this.loaded <= key) {
            console.log(key, imageLink)
            this.imageLink = imageLink
            this.loaded = key
          }
        }
      }, key * 1000)
    })
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
