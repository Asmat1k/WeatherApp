<template>
  <div class="container">
    <div v-if="computedWeather && computedWeather.current" class="wrapper">
      <main class="main">
        <div class="city">{{ this.$store.getters.currentPosition }}</div>
        <div class="date">{{ this.$store.getters.requestDate }}</div>
        <div class="temp">
          {{ computedWeather.current.temp }}°
          <img 
            :src="'https://openweathermap.org/img/wn/' + computedWeather.current.weather[0].icon + '@2x.png'"
            alt="weather icon" 
            class="icon"
          >
        </div>
        <div class="info">
          {{ computedWeather.current.weather[0].description }}
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrentWeather',
  computed: {
    computedWeather() {
      return this.$store.getters.data ? this.$store.getters.data : JSON.parse(localStorage.getItem('data'));
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;

    max-height: 100%;

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
    position: relative;

    font-weight: 900;
    font-size: 100px;
    line-height: 90px;
    min-width: 100%;
    color: blue;
  }
  .icon {
    position: absolute;
    right: -10px;
    bottom: -30px;

    transition: .3s;
  }
  .icon:active {
    transform: rotate(5deg)
  }
  .info {
    text-align: center;
    font-size: 15px;
  }
</style>
