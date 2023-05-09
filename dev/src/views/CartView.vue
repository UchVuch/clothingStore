<template>
  <div class="container">
    <section class="cart">
      <div class="cart__top">
        <h2 class="title">Коризна</h2>
        <p  class="cart-none" v-if="!cart.length">
          Ваша карзина пуста
        </p>

        <div class="cart__content" v-else>
          <ul class="cart__list">
            <li 
              class="cart__item"
              v-for="item in cart"
              :key="item.id"
            >
              <cart-item :item="item"></cart-item>
            </li>
          </ul>
          <div class="cart__total">
            <div class="cart__total-inner">
              <p class="cart__total-suptext">Итого</p>
              <p class="cart__total-sum">К оплате {{ totalSum }} руб</p>
              <ul class="cart__total-table">
                <li 
                  class="cart__total-item"
                  v-for="item in cart"
                >
                  <span>{{ item.brand }}</span>
                  <span class="cart__total-table-sum">{{ item.price }} руб</span>
                </li>
                <li class="cart__total-item">
                  <span>Доставка</span>
                  <span class="cart__total-table-sum">{{ deliverySum }} руб</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="cart__bottom" v-if="!cart.length">
        <h2 class="title cart__bottom title">Но у нас есть персональные предложения для вас</h2>
        <product-list :products="products"></product-list>
      </div>
    </section>
  </div>
</template>
<script>
import CartItem from '@/components/CartItem.vue';
import ProductList from '@/components/ProductList.vue';
import { mapGetters } from 'vuex';

export default {
components: { CartItem, ProductList },
data() {
  return {
    deliverySum: 750
  }
},

computed: {
  totalSum() {
    return this.cart.reduce((acc, item) => acc += Number(item.price.split(' ').join('')), 0) + this.deliverySum
  },
  ...mapGetters([
    'cart',
    'products'
  ])
},

methods: {

},
}
</script>
<style lang="scss" scoped>
.cart {
  padding-block: 32px 106px;
}

.cart-none {
  font-size: 20px;
  line-height: 30px;
  padding-bottom: 40px;
  border-bottom: 1px solid #EAECF0;
}

.cart__content {
  display: flex;
  gap: 24px;
}

.cart__list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 45px;
  flex-grow: 1;
  margin-top: 16px;
}

.cart__total {
  border-left:  1px solid #EAECF0;
}

.cart__total-inner {
  width: 476px;
  padding-left: 24px;
}

.cart__total-suptext {
  font-size: 24px;
  line-height: 32px;
  color: #354153;
}

.cart__total-sum {
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #0D1421;
  margin-bottom: 24px;
}

.cart__total-table {
  list-style-type: none;
}

.cart__total-item {
  border-top: 1px solid #EAECF0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 16px;
}

.cart__total-item:last-child { 
  border-bottom: 1px solid #EAECF0;
}

.cart__total-table-sum {
  font-weight: 500;
  color: #0D1421;
}

.cart__bottom {
  padding-top: 40px;
}

.cart__bottom-title {
  color: #0D1421;
  margin-bottom: 32px;
}
</style>