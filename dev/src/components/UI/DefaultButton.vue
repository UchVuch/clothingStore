<template>
  <button 
    class="default-button"
    :style="{backgroundColor: bgColor, color: color}"
    @click="$emit('click', $event)"
  >
    <slot>Кнопка</slot>
  </button>
</template>

<script>
export default {
  name: 'default-button',
  props: {
    bgColor: String,
    color: String
  }
}
</script>

<style lang="scss" scoped>
.default-button {
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  border-radius: 8px;
  background-color: #0D1421;
  padding: 12px 16px;
}
</style>