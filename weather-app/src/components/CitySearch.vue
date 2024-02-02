<template>
  <form class='form' @submit.prevent="onSubmit">
    <MyInput
      id="city"
      v-model="city"
      maxlength="15"
      :placeholder="'City...'"
    />
    <MyButton type="submit" class="">update</MyButton>
  </form>
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
          this.setIsError(true);
        }
      }
    },
    setIsError(payload) {
      this.isError = payload;
    }
  },
  async mounted() {
    await this.$store.dispatch('setLatAndLon', 'Petrozavodsk');
  }
} 
</script>

<style scoped>
  .form {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .error {
    padding: 5px;
    color: white;
    text-align: center;
    text-decoration: underline;
  }
</style>
