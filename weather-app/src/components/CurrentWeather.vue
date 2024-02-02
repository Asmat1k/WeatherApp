<template>
  <div class="container">
    CurrentWeather
  </div>
</template>

<script>
export default {
  name: 'CurrentWeather',
  data() {
    return {
      data: '',
    }
  },
  async mounted() {
    await this.$store.dispatch('setLatAndLon', 'Petrozavodsk');
  }
}
</script>

<style scoped>

</style>
