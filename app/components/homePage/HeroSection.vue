<script setup lang="ts">
</script>

<template>
  <section class="hero">
    <div class="hero__container">
        <div class="hero__content">
        <h1 class="hero__title">
            <span class="hero__title-sub">Welcome to</span>
            Payot Beauty
        </h1>
        <p class="hero__subtitle">Discover the art of French skincare and timeless beauty secrets since 1920</p>
        <div class="hero__links">
          <NuxtLink class="hero__link hero__link--primary" to="#articles">Explore Articles</NuxtLink>
          <NuxtLink class="hero__link hero__link--secondary" to="#about">Our Story</NuxtLink>
        </div>
        </div>
<!-- https://i.pinimg.com/736x/ab/50/8d/ab508d1926b7424d78d48b4af70ee479.jpg -->
 <!-- https://i.pinimg.com/736x/cf/6f/c3/cf6fc3c159c49f95af88753c99198705.jpg -->
        <img src="/bunner.jpg" alt="Payot beauty products" class="hero__image" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .hero {
    background: $pink-gr;

    &__container {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;

      @include tablet {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
      }
    }
    
    &__content {
      margin: auto;
      padding-block: 32px;
      padding-inline: 20px;
    }

    &__title {
      color: $black-color;

      &-sub {
        display: block;
        font-size: clamp(1.5rem, 3vw, 1.7rem);
        color: $pink-color;
      }
    }

    &__subtitle {
      font-size: 18px;
      color: $gray-2-color;
      
      margin-bottom: 18px;
      max-width: 500px;

      @include tablet {
        font-size: 24px;
        line-height: 1.4;
        margin-bottom: 40px;
      }

      @include laptop {
        margin-bottom: 48px;
      }
    }

    &__links {
      display: flex;
      gap: 24px;
    }

    &__link {
      border-radius: 16px;
      font-size: 18px;
      font-weight: 500;
      transition: all 0.3s ease;
      border: 2px solid transparent;
      padding: 12px 28px;

      @include tablet {
        padding: 16px 32px;
      }
      @include laptop {
        padding: 20px 48px;
      }

      &--primary {
        background-color: $black-color;
        color: $white-color;

        &:hover {
          background-color: $pink-color;
          box-shadow: 0 10px 30px rgba(226, 190, 255, 0.4);
        }
      }

      &--secondary {
        background-color: transparent;
        color: $black-color;
        border-color: $black-color;

        &:hover {
          background-color: $black-color;
          color: $white-color;
        }
      }
    }

    &__image {
      aspect-ratio: 1 / 1;
      width: 100%;
      object-fit: cover;

      @include tablet {
        height: 400px;
        width: 100%;
      }

      @include laptop {
        height: 600px;
      }
    }
  }
</style>
