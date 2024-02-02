<template>
  <div class="container">
    <CurrnetWeather/>
  </div>
</template>

<script>
import CurrnetWeather from '@/components/CurrentWeather.vue'

export default {
  name: 'MainView',
  components: {
    CurrnetWeather
  }
}
</script>
