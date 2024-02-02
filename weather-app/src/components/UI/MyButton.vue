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
    border: 1px solid white;
    border-radius: 5px;

    text-transform: uppercase;
    font-weight: 700;
    color: white;

    padding: 5px;

    transition: .3s;
  }
  @media (hover:hover) {
    .btn:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
    .btn:active {
      cursor: pointer;
      transform: scale(0.95);
    } 
  }
</style>