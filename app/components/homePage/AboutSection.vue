<script setup lang="ts">
</script>

<template>
  <section class="about">
    <div class="about__container">
      <img src="/about-img.png" alt="Payot heritage" class="about__image" />

      <div class="about__content">
        <h2 class="about__heading">
          <span class="about__heading-sub">Our Philosophy</span>
          The Payot Philosophy</h2>
        <p class="about__text">
          For over a century, Payot has been at the forefront of French haute cosmétique, 
          blending scientific innovation with natural ingredients to create exceptional 
          skincare experiences. Our heritage is rooted in the belief that every woman 
          deserves to feel confident and beautiful in her own skin.
        </p>
        <p class="about__text">
          Explore our blog for expert advice, product insights, and the latest beauty 
          trends from our team of skincare professionals.
        </p>
        <a class="about__link" href="">Learn more about Nadia Payot &nbsp <IconsArrowCTA /></a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .about {
    padding-block: 40px;
    background: $pink-gr;

    @include tablet {
      padding-block: 80px;
    }

    @include laptop {
      padding-block: 120px;
    }

    &__container {
      @include container;
      @include tablet {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 40px;
      }
    }

    &__content {
      margin: auto;
      display: grid;
      gap: 24px;
    }

    &__heading {
      color: $black-color;
      position: relative;

      &-sub {
        display: block;
        font-size: clamp(1.5rem, 3vw, 1.7rem);
        font-weight: 700;
        text-transform: uppercase;
        color: $pink-color;
        margin-bottom: 12px;
      }
    }

    &__text {
      font-size: 18px;
      line-height: 1.6;
      color: $gray-3-color;

      @include tablet {
        font-size: 20px;
      }
    }

    &__link{
      text-decoration: none;
      color: $pink-color;
      font-size: clamp(1.2rem, 3vw, 1.5rem);
    }

    &__image {
      width: 100%;
      object-fit: contain;
    }
  }
</style>
