<template>
  <form @submit.prevent="onSubmit">
    <input type="text" name="city" id="city" v-model="city">
    <button type="submit" class="">🔄</button>
  </form>
  <div v-if="isError" class="error">wrong place!</div>
</template>

<script>
export default {
  name: 'CitySearch',
  data() {
    return {
      city: '',
      isError: false,
    }
  },
  methods: {
    async onSubmit() {
      if (this.city.length > 0) {
        try {
          await this.$store.dispatch('setLatAndLon', this.city);
          this.city = '';
        } catch {
          this.setIsError();
        }
      }
    },
    setIsError() {
      this.isError = !this.isError;
    }
  },
  async mounted() {
    console.log('mounted');
    await this.$store.dispatch('setLatAndLon', 'Petrozavodsk');
  }
} 
</script>

<style scoped>

</style>
