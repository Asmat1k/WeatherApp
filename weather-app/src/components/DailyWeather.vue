<template>
  <div>
    <div v-if="days" class="list">
      <div v-for="day in days.slice(0, 5)" class="day">
        <div class="left">
          <div class="date">
            {{ new Date(day.dt * 1000).toUTCString().slice(5, 16) }}
          </div>
        </div>
        <div class="right">
          <div class="icon">
            <img 
              :src="'https://openweathermap.org/img/wn/' + day.weather[0].icon + '.png'"
              alt="weather icon" 
              class="icon"
            >
          </div>
          <div class="temp__list">
            <div class="temp__item">
              <div class="name">Day</div>
              <div class="temp temp-day">{{ day.temp.day }}</div>
            </div>
            <div class="temp__item">
              <div class="name">Night</div>
              <div class="temp temp-night">{{ day.temp.night }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DailyWeather',
  computed: {
    days() {
      const daysArr = this.$store.getters.data.daily;
      return daysArr;
    }
  }
}
</script>

<style scoped>
  .list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 5px;

    width: 100%;
  }
  .day {
    display: flex;
    align-items: center;
    justify-content: space-around;

    font-size: 10px;
    color: white;

    border: 1px solid rgb(52, 151, 243);
    border-radius: 5px;

    width: 100%;
  }
  .date {
    font-size: 12px;
    font-weight: 900;
  }
  .right {
    display: flex;
    align-items: center;
  }
  .temp__list {
    display: flex;
    gap: 5px;
  }
  .temp__item {
    text-align: center;
  }
  .name {
    font-weight: 400;
    color: gray
  }
  .temp {
    font-weight: 600;
  }
  .temp-day {
    color: white;
  }
  .temp-night {
    color: gray;
  }
</style>