<template>
  <div class="cart-item">
    <img 
      :src="item.img" 
      :alt="item.description"
      width="240"
      height="272"
    >
    <div class="cart-item__info">
      <div class="cart-item__top">
        <div class="cart-item__price">
          {{ item.price }} руб
        </div>
        <div class="cart-item__brand">
          <span>Бренд</span>
          <span>{{ item.brand }}</span>
        </div>
        <div class="cart-item__desc">
          {{ item.description }}
        </div>
        <div class="cart-item__size">
          <span>Размер</span>
          <span class="cart-item__size-value">{{ sizeValue }}</span>
          <dropdown 
            class="select-size"
            :button-style="{padding: 0, textDecoration: 'underline', fontSize: '14px', lineHeight: '20px'}"
            :list-style="{top: '22px'}"
            :button="{text: 'Изменить'}"
            :options="completeSizeOptions"
            @check="changeSize"
          >
            <template v-slot:option="{option}">
              <div class="select-size__item">
                <span class="select-size__value">{{ option.value }}</span>
                <div 
                  class="select-size__check"
                  :class="{ 'select-size__check--current': option.isCheck }"
                >
                  <img src="@/assets/check-icon.svg" width="8px" height="6px">
                </div>
              </div>
            </template>
          </dropdown>
        </div>
      </div>
      <div class="cart-item__bottom">
        <p>{{ item.date }}</p>
        <button class="delete" @click="deleteItem">Удалить</button>
      </div>
    </div>
  </div>
</template>
<script>
import Dropdown from './Dropdown.vue';

export default {
  components: { Dropdown },
  name: "cart-item",
  props: {
      item: {
          type: Object,
          required: true
      }
  },
  data() {
    return {
      sizeValue: this.item.size,
      sizeOptions: [
        {id: 1, value: 'XS', isCheck: false},
        {id: 2, value: 'S', isCheck: false},
        {id: 3, value: 'M', isCheck: false},
        {id: 4, value: 'L', isCheck: false},
        {id: 5, value: 'XL', isCheck: false},
        {id: 6, value: 'XXL', isCheck: false},
      ],
      itemId: this.$props.item.id
    }
  },
  computed: {
    completeSizeOptions() {
      this.sizeOptions.forEach(option => option.value === this.sizeValue ? option.isCheck = !option.isCheck : option.isCheck = false)
      return this.sizeOptions
    }
  },
  methods: {
    changeSize(id) {
      const option = this.sizeOptions.find(option => option.id === id)
      this.sizeValue = option.value
      this.$store.commit('changeCartItem', {
        id: this.itemId,
        size: option.value
      })
    },
    deleteItem() {
      this.$store.commit('deleteCartItem', {id: this.itemId})
    }
  }
}
</script>
<style lang="scss" scoped>
.delete {
  cursor: pointer;
}
.cart-item {
  display: flex;
  gap: 32px;

  &__info {
    flex-grow: 1;
  }

  &__top {
    border-bottom: 1px solid #EAECF0;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding-bottom: 16px;
  }

  &__price {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #0D1421;
    margin-bottom: 16px;
  }

  &__brand {
    display: flex;
    gap: 4px;
    margin-bottom: 8px;
  }

  &__brand span:last-child {
    color: #354153;
  }

  &__desc {
    margin-bottom: 8px;
  }

  &__size {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__size-value {
    min-width: 27px;
    color: #354153;
  }

  &__bottom {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #0D1421;
    display: flex;
    justify-content: space-between;
    padding-top: 16px;
  }

}

.select-size {
  &__item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__check {
    border-radius: 999px;
    background-color: #0D1421;
    width: 16px;
    height: 16px;
    display: none;
    align-items: center;
    justify-content: center;
  }

  &__check--current {
    display: flex;
  }
}
</style>