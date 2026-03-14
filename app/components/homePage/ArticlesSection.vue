<script setup lang="ts">
import { usePagination } from '@/composables/usePagination';

const { data: articles } = await useAsyncData('articles', () => 
  queryCollection('articles').select('id', 'title', 'price', 'image', 'createdAt').order('createdAt', 'DESC').all()
)

const itemsPerPage = ref(4)

onMounted(() => {
  const updateSize = () => {
    const width = window.innerWidth
    itemsPerPage.value = width >= 1280 ? 4 : width >= 640 ? 2 : 1
  }
  
  updateSize()
  window.addEventListener('resize', updateSize)
})

const { 
  currentPage, 
  paginatedItems: paginatedPosts,
  nextPage,
  goToPage,
  visiblePages 
} = usePagination(computed(() => articles.value ?? []), itemsPerPage, 5);

const getArticleId = (path: string) => {
  if (!path) return ''
  
  return path
    .replace('articles/articles/', '')
    .replace('.json', '')
}
</script>

<template>
  <section class="articles" aria-labelledby="articles-heading">
    <div class="articles__container">
    <div class="articles__header">
      <h2 id="articles-heading">Latest Insights</h2>
      <p class="articles__subtitle">Expert advice, beauty tips, and skincare innovations</p>
    </div>
    <div class="articles__grid">
      <article class="article" v-for="post in paginatedPosts" :key="post.id" >
        <NuxtImg 
          class="article__image" 
          :src="post.image" 
          :alt="post.title || 'Post image'"
          placeholder="/default-image.webp"
          fallback="/default-image.webp"
          width="280"
          height="280"
          format="webp"
          loading="lazy"/>
          
        <NuxtLink :to="`/articles/${getArticleId(post.id)}`" >
          <h3 class="article__title">{{ post.title }}</h3>
          <p class="article__price">{{ post.price || 0.69}} $</p>
        </NuxtLink>
      </article>
    </div>

    <div class="article__pagination pagination">
      <button class="pagination__page" :class="{ 'pagination__page--active': pageNumber === currentPage }"  
        v-for="pageNumber in visiblePages" :key="pageNumber"
        @click="goToPage(pageNumber)"
        >
        {{ pageNumber }}
      </button>

      <button class="pagination__next-btn" @click="nextPage" aria-label="Next articles">
        <IconsArrow aria-hidden="true"/>
      </button>
    </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .articles{
    padding-block: 40px;

    @include tablet {
      padding-block: 80px;
    }

    @include laptop {
      padding-block: 120px;
    }

    &__container{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: auto;
      @include container;
    }

    &__header {
      text-align: center;
    }

    &__subtitle {
      font-size: 18px;
      color: $gray-2-color;
      margin-top: 20px;

      @include tablet {
        font-size: 24px;
      }
    }

    &__grid{
      display: grid;
      margin-inline: auto;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 40px;
      width: 100%;
      margin-top: 16px;
      justify-content: center;
      
      @include tablet {
        grid-template-columns: repeat(2, auto);
        margin-top: 59px;
      }
      
      @include laptop {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }

  .article{
    cursor: pointer;
    max-height: 396px;
    transition: transform 0.2s ease;
    margin-inline: auto;
    
    &__image{
      height: 280px;
      width: 280px;
      object-fit: cover;
      margin-bottom: 8px;

      @include tablet{
        margin-bottom: 24px;
      }
    }

    &__title{
      font-size: 18px;

      @include tablet {
        font-size: 24px;
      }
    }

    &__price{
      font-size: clamp(16px, 2vw, 20px);
      color: $pink-color;
    }
    
    &__pagination{
      margin-top: 16px;

      @include tablet{
        margin-top: 32px;
      }
    }
  }
  

  .pagination{
    display: flex;
    gap: 16px;

    button{
      height: 40px;
      width: 40px;
      border-radius: 12px;
      padding: 0;

      @include tablet{
        height: 56px;
        width: 56px;
      }
    }

    &__page{
      border: none;
      background-color: $gray-1-color;
      color: $black-color;
      font-size: 14px;

      @include tablet {
        font-size: 16px;
      }

      &:hover:not(&--active){
        background-color: #E8E8E8;
      }

      &--active{
        color: $white-color;
        background-color: $black-color;
      }
    }

    &__next-btn{
      background: none;
      border: 1px solid #E8E8E8;
      transition: background-color 0.2s ease;

      &:hover{
        background-color: #E8E8E8;
      }
    }
  }
</style>