<script setup>
useSeoMeta({
  title: 'Payot | Каталог косметики',
  ogTitle: 'Payot | Каталог косметики',
  description: 'Широкий выбор инновационных средств для вашей красоты Payot',
  ogDescription: 'Широкий выбор инновационных средств для вашей красоты Payot'
})
</script>
<template>
  <HomePageHeroSection />
  <HomePageArticlesSection id="articles"/>
  <HomePageAboutSection id="about"/>
  <HomePageNewsletter id="contact"/>
</template>

<style scoped>
#articles,
#about,
#contact {
  scroll-margin-top: 120px;
}
</style>
