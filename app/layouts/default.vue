<template>
  <div>
    <LayoutsHeader />
    <main class="main">
      <slot /> 
    </main>
    <LazyLayoutsFooter/>
  </div>
</template>

<style lang="scss" soped>
.main{
  margin-bottom: 80px;
}
</style>