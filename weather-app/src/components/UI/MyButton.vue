<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'MyButton',
  };
</script>

<style scoped>
  .btn {
    background-color: transparent;
    border: 1px solid black;
    border-radius: 5px;

    text-transform: uppercase;
    font-weight: 700;
    color: black;

    padding: 5px;
  }
  @media (hover:hover) {
    .btn:hover {
      cursor: pointer;
      
      background-color: black;
      color: white;
    } 
  }
</style>