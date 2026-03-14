<template>
  <section class="article-page">
    <article class="article">
      <NuxtImg 
        class="article__image"
        :src="article?.image" 
        :alt="article?.title || 'Post image'"
        placeholder="/default-image.webp"
        fallback="/default-image.webp"
        loading="lazy"/>

        <div class="article__text">
          <h2 class="article__title"> {{ article?.title }} </h2>
          <p class="article__price">{{ article?.price }} $</p>
          <p class="article__about">About</p>
          <h4 class="article__discription">{{ article?.description }}</h4>

          <div class="article__retailers">
            <h3 class="article__retailers-title">Available at official retailers:</h3>

            <div class="article__retailers-list">
              <a href="#" class="article__retailer-wb">Buy on Wildberries</a>
              <a href="#" class="article__retailer-ozon">Buy on Ozon</a>
            </div>
          </div>
        </div>
    </article>
  </section>
    
</template>

<script setup lang="ts">
const route = useRoute()
const articleId = route.params.id

const { data: article }= await useAsyncData(`article-${articleId}`, () => 
  queryCollection('articles')
    .where('id', '=', `articles/articles/${route.params.id}.json`)
    .first()
)

useSeoMeta({
  title: () => article.value?.title ? `Payot | ${article.value.title}` : 'Payot | Loading...',
  ogTitle: () => article.value?.title ? `Payot | ${article.value.title}` : 'Payot',
  description: article.value?.description || '',
  ogDescription: article.value?.description || '',
  ogImage: () => article.value?.image || ''
})
</script>

<style lang="scss" scoped>
  .article{
    display: grid;
    gap: 80px;
    grid-template-columns: 1fr;
    padding-block: 20px;
    @include container;
    
    @include tablet {
      grid-template-columns: 1fr 1fr;
      padding-block: 40px;
    }

    @include laptop {
      padding-block: 60px;
    }

    &__price{
      color: $pink-color;
      font-size: clamp(1.5rem, 3vw, 1.7rem);
      margin-bottom: 33px;
    }
    &__image{
      width: 100%;
      object-fit: contain;
    }

    &__discription{
      max-width: 695px;
      margin-bottom: 33px;
    }

    &__retailers{
      color: $gray-2-color;
    }

    &__retailers-list{
      width: 100%;
      gap: 16px;
      margin-top: 8px;
      display: flex;

      a{
        width: 100%;
        padding: 16px 32px;
        border-radius: 12px;
        color: $white-color;
        text-align: center;
        text-decoration: none;
      }
    }
    &__retailer-wb{
      background-color: #6E1E8B;
    }

    &__retailer-ozon{
      background-color: #005BFF;
    }
  }
</style>