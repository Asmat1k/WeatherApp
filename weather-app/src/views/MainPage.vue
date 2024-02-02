<template>
  <div class="container">
    <CitySearch/>
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
