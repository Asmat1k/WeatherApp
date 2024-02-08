<template>
  <div class="section">
    <div v-if="!computedIsLoading" class="info">
      <CitySearch/>
      <CurrentWeather/>
      <DailyWeather/>
    </div>
    <div v-else class="info loader">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<script>
import CitySearch from '@/components/CitySearch.vue'
import CurrentWeather from '@/components/CurrentWeather.vue';
import DailyWeather from '@/components/DailyWeather.vue';

export default {
  name: 'MainView',
  components: {
    CitySearch,
    CurrentWeather,
    DailyWeather
  },
  async mounted() {
    await this.$store.dispatch('setDataAsync');
  },
  computed: {
    computedIsLoading() {
      return this.$store.getters.isLoading;
    }
  }
}
</script>

<style scoped>
.section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 15px;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 30px;

  background-color: rgb(87, 174, 255);
  width: 320px;
  max-height: 100%;
  min-height: 540px;
  
  border-radius: 10px;

  padding: 10px 15px;
}
.loader {
  align-items: center;
  justify-content: center;
}
.spinner {
    width: 40px;
    height: 40px;
    border: 8px #474bff double;
    border-left-style: solid;
    border-radius: 50%;
    animation: spinner-aib1d7 0.8999999999999999s infinite linear;
  }

  @keyframes spinner-aib1d7 {
    to {
        transform: rotate(360deg);
    }
  }
</style>
