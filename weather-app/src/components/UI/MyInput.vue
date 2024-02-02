<template>
  <input
    :value="modelValue"
    @input="updateInput"
    type="text"
    class="input"
  >
</template>

<script>
  export default {
    name: 'MyInput',
    props: {
      modelValue: [String, Number],
    },
    methods: {
      updateInput(event) {
        this.$emit('update:modelValue', event.target.value);
      }
    }
  };
</script>

<style>
  .input {
    border: 0;
    border-radius: 5px;
    padding: 5px 10px;
  }
</style>