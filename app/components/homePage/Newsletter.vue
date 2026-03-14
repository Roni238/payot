<script setup lang="ts">
const email = ref('')
const isSubscribed = ref(false)

const subscribe = () => {
  if (email.value) {
    isSubscribed.value = true
    email.value = ''
    setTimeout(() => {
      isSubscribed.value = false
    }, 5000)
  }
}
</script>

<template>
  <section class="newsletter">
    <div class="newsletter__container">
      <form class="newsletter__form" @submit.prevent="subscribe">
              <div class="newsletter__form-header">
                <h2>Join the PAYOT Circle</h2>
                <p>Subscribe for early access to new launches and expert skincare tips.</p>
              </div>

              <div class="newsletter__input-group">
                <input 
                  v-model="email" 
                  type="email" 
                  placeholder="Your email address" 
                  class="newsletter__input"
                  :disabled="isSubscribed"
                  required
                />
                
                <button 
                  type="submit" 
                  class="newsletter__btn"
                  :disabled="isSubscribed"
                >
                  {{ isSubscribed ? 'Welcome to Payot' : 'Subscribe' }}
                </button>
              </div>

              <p class="newsletter__privacy">
                By subscribing, you agree to our <a href="/">Privacy Policy</a>
              </p>
            </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .newsletter {
    padding-block: 40px;

    @include tablet {
      padding-block: 80px;
    }

    @include laptop {
      padding-block: 120px;
    }

    &__container{
      padding-inline: 20px;
    }
    
    &__form {
      width: 100%;
      max-width: 980px;
      margin: auto;
      box-shadow: #00000073 0px 5px 25px -5px;
      border-radius: 16px;
      padding: 48px;
      display: grid;
      gap: 32px;
      text-align: center;
    }

    &__form-header {
      h3 {
        margin-bottom: 16px;
        color: $black-color;
      }

      p {
        color: $gray-2-color;
        font-size: clamp(1.5rem, 3vw, 1.7rem);
      }
    }

    &__input-group {
      flex-direction: column;
      display: flex;
      gap: 32px;

      @include tablet {
        flex-direction: row;
      }
    }

    &__input {
      width: 100%;
      padding: 18px 24px;
      border: 1px solid #d0d0d0;
      border-radius: 4px;
      font-size: clamp(1rem, 1.5vw, 1.2rem);
      font-family: $main-font;
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-color: $pink-color;
        box-shadow: 0 0 0 3px #e2beff26;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    &__btn {
      padding: 16px 32px;
      background: #EE2B8C;
      color: #fff;
      border-radius: 8px;
      transition: all 0.2s ease;
      font-size: clamp(1rem, 1.5vw, 1.2rem);;

      &:hover:not(:disabled) {
        background: $black-color;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    &__privacy {
      font-size: clamp(0.8rem, 1.4vw, 1rem);
      color: $gray-2-color;
      text-align: center;

      a {
        color: $pink-color;
        text-decoration: underline;
        text-underline-offset: 2px;

        &:hover {
          color: $black-color;
        }
      }
    }
  }
</style>
