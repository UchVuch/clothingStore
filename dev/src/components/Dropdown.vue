<template>
  <div class="dropdown">
    <button 
      class="dropdown__button"
      :style="buttonStyle"
      @click="isDropdownShow = !isDropdownShow"
    >
      <img 
        v-if="button.img"
        :src="button.img" 
        aria-hidden="true"
        :class="{ 'order-reverse': button.reverse }"
      >
      <span>{{ button.text }}</span>
    </button>
    <ul 
      class="dropdown__list" 
      :style="listStyle"
      v-show="isDropdownShow" 
    >
      <li 
        class="dropdown__item" 
        v-for="option in options"
        :key="option.id"
        @click="$emit('check', option.id)"
      >
        <slot name="option" :option="option">
          {{ option.value }}
        </slot>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'dropdown',
  props: {
    options: {
      type: Array,
      required: true
    },
    button: {
      type: Object,
      required: false,
      default: () => ({ img: '', text: 'Открыть', reverse: false })
    },
    listStyle: {
      type: Object,
      required: false,
    },
    buttonStyle: {
      type: Object,
      required: false,
    }
  },
  data() {
    return {
      isDropdownShow: false
    }
  }
}
</script>
<style lang="scss" scoped>
.order-reverse {
  order: 1;
}

.dropdown {
  position: relative;
  z-index: 2;

  &__button {
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #354153;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 8px 16px;
  } 

  &__list {
    width: 320px;
    position: absolute;
    top: 35px;
    left: 0;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    padding: 6px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__item {
    cursor: pointer;
    border-radius: 6px;
    color: #354153;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
  }

  &__item:hover {
    background-color: #F2F4F7;
  }

}
</style>