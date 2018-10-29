<template>
  <section id="posts">
        <PostPreview v-for="post in posts"
                     :key="post.id"
                     :title="post.title"
                     :subtitle="post.previewText"
                     :thumbnailImage="post.thumbnailURl"
                     :id="post.id"/>
  </section>
</template>

<script>
import PostPreview from '../components/blog/PostPreview'
export default {
  components: { PostPreview },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: 'draft',
        starts_with: 'blog/'
      })
      .then(res => {
        return {
          posts: res.data.stories.map(bp => {
            return {
              id: bp.slug,
              title: bp.content.title,
              previewText: bp.content.subtitle,
              thumbnailURl: bp.content.thumbnail
            }
          })
        }
      })
  }
  //     data(){
  //     return{
  //         components:{
  //             PostPreview
  //         },
  //         posts: [
  //             {
  //                 title: "A new world",
  //                 previewText: "this will be the best site in the world ",
  //                 thumbnailURl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //                 id: 'a-new-beginning'
  //             },
  //             {
  //                 title: "A new world part2",
  //                 previewText: "this will be the best site in the world ",
  //                 thumbnailURl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //                 id: 'a-new-beginning-2'
  //             }
  //         ]
  //     }
  // }
}
</script>

<style scoped>
#posts {
  padding-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 35rem) {
  #posts {
    flex-direction: row;
  }
}
</style>
