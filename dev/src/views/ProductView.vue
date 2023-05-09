<template>
  <div class="container">
    <section class="product">
      <div class="product__left">
        <!-- <swiper
          :thumbs="{ swiper: thumbsSwiper }"

          class="mySwiper2"
        >
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </swiper-slide>
        </swiper>
        <swiper
          @swiper="setThumbsSwiper"
          watch-slides-progress
          watch-slides-visibility
          :slides-per-view="1"
          :space-between="16"
          class="mySwiper"
        >
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </swiper-slide>
        </swiper> -->
      </div>
      <div class="product__right">
        <h2 class="title">{{ product.brand }}</h2>
        <p class="product__desc">
          {{ product.description }}
        </p>
        <p class="product__text">
          {{ product.text }}
        </p>
        <div class="product__price">
          {{ product.price }} руб
        </div>
        <dropdown 
          class="select-size"
          :button-style="{paddingBlock: '12px', border: '1px solid #EAECF0', borderRadius: '8px', width: '204px'}"
          :list-style="{top: '56px'}"
          :button="{img: require('@/assets/arrow-down.svg'), text: sizeValue, reverse: true}"
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
        <default-button
          @click="$store.commit('setCartItems', productForCart)"
        >
            Добавить в корзину
        </default-button>
      </div>
    </section>
  </div>
</template>
<script>
import Dropdown from '@/components/Dropdown.vue'
import DefaultButton from '@/components/UI/DefaultButton.vue'
import { mapGetters } from 'vuex'
// import SwiperCore, { Thumbs } from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/vue'

// SwiperCore.use([Thumbs])

// import 'swiper/swiper.scss'
export default {
    components: { Dropdown, DefaultButton },
    mounted() {
        this.product = this.products.find(item => item.id === this.productId)
    },
    data() {
      return {
        product: {},
        productId: Number(this.$route.params.id),
        sizeValue: 'Выберите размер',
        sizeOptions: [
          {id: 1, value: 'XS', isCheck: false},
          {id: 2, value: 'S', isCheck: false},
          {id: 3, value: 'M', isCheck: false},
          {id: 4, value: 'L', isCheck: false},
          {id: 5, value: 'XL', isCheck: false},
          {id: 6, value: 'XXL', isCheck: false},
        ],
      };
    },
    computed: {
      ...mapGetters([
        "products"
      ]),
      productForCart() {
        return {
          ...this.product,
          size: this.sizeValue,
          date: 'Доставка займёт от 5 до 10 дней'
        }
        },
      completeSizeOptions() {
      this.sizeOptions.forEach(option => option.value === this.sizeValue ? option.isCheck = !option.isCheck : option.isCheck = false)
        return this.sizeOptions
      }
    },
    methods: {
      changeSize(id) {
        const option = this.sizeOptions.find(option => option.id === id)
        this.sizeValue = option.value
        console.log(this.sizeValue)
      },
      // setThumbsSwiper(swiper) {
      //     this.thumbsSwiper = swiper
      //   },
    }
}
</script>
<style lang="scss" scoped>
.product {
  padding-block: 32px 232px;
  display: flex;
  gap: 64px;
}
.product__left {
  width: 888px;
}

.product__right {}

.product__desc,
.product__text {
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 40px;
}

.product__price {
  font-weight: 600;
  font-size: 36px;
  line-height: 48px;
  color: #0D1421;
  margin-bottom: 23px;
}

.select-size {
  margin-bottom: 16px;

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

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>