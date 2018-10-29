export default {
  mounted() {
    this.$storyblok.init()
    this.$storyblok.on(['published', 'change'], event => {
      if (!event.slugChanged) {
        location.reload(true)
      }
    })
    this.$storyblok.on('input', event => {
      this.story.content = event.story.content
    })
  }
}
