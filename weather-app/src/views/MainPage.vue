<template>
  <div class="section">
    <div class="info">
      <CitySearch/>
      <CurrentWeather/>
      <DailyWeather/>
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
  
  border-radius: 10px;

  padding: 10px 15px;
}
</style>
