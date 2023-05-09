<template>
  <ul class="products__list">
    <li 
      class="products__item card" 
      v-for="product in products"
      :key="product.id"
    >
      <router-link :to="{ name: 'product', params:{id: product.id} }" class="card__link">
        <product-item :product="product"/>
      </router-link>
    </li>
  </ul>
</template>
<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
  components: { ProductItem },
  name: 'product-list',
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  max-width: 400px;
  width: 100%;

  &__link {
    text-decoration: none;
  }
}
.products__list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}
</style>
