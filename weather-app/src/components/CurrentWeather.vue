<template>
  <div class="container">
    <div v-if="computedWeather && computedWeather.current" class="wrapper">
      <main class="main">
        <div class="city">{{ this.$store.getters.currentPosition }}</div>
        <div class="date">{{ this.$store.getters.requestDate }}</div>
        <div class="temp">
          {{ computedWeather.current.temp }}°
        </div>
        <div class="info">
          <div class="description">{{ computedWeather.current.weather[0].description }}</div>
          <img 
            :src="'https://openweathermap.org/img/wn/' + computedWeather.current.weather[0].icon + '@2x.png'"
            alt="weather icon" 
            class="icon"
          >
        </div>
      </main>
    </div>
    <div v-else class="">loading</div>
  </div>
</template>

<script>
export default {
  name: 'CurrentWeather',
  async mounted() {
    await this.$store.dispatch('setDataAsync');
  },
  computed: {
    computedWeather() {
      return this.$store.getters.data ? this.$store.getters.data : JSON.parse(localStorage.getItem('data'));
    }
  }
}
</script>

<style scoped>
  .container {
    height: 100%;
    padding: 0;
    color: white;
  }
  .wrapper {
    height: 100%;
  }
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    min-width: 280px;
    text-align: center;
  }
  .city {
    font-size: 25px;
    font-weight: 600;
  }
  .date {
    font-size: 10px;
  }
  .temp {
    font-weight: 900;
    font-size: 100px;
    line-height: 90px;
    color: blue;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 250px;
    max-height: 50px;
  }
  .description {
    font-size: 20px;
  }
</style>
