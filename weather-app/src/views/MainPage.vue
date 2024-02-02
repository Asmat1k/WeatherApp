<template>
  <div class="container">
    <div class="wrapper">
      <CitySearch/>
    </div>
  </div>
</template>

<script>
import CitySearch from '@/components/CitySearch.vue'

export default {
  name: 'MainView',
  components: {
    CitySearch
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 15px;
}
.wrapper {
  background-color: rgb(87, 174, 255);
  width: 320px;
  height: 70vh;
  
  border-radius: 10px;

  padding: 10px 15px;
}
</style>
