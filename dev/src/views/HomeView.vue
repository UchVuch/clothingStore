<template>
  <div class="container">
    <section class="home">  
      <div class="controls">
        <dropdown
          class="filter"
          :options="filterOptions"
          :button="{img: require('@/assets/filter-icon.svg'), text: 'Фильтры'}"
          @check="checkFilterOption"
        >
          <template v-slot:option="{option}">
            <div 
              class="filter__check"
              :class="{ 'filter__check--current': option.isCheck }"
            >
              <img class="filter__check-image" src="@/assets/check-icon.svg" width="8px" height="6px">
            </div>
            <span class="filter__value">{{ option.value }}</span>
          </template>
        </dropdown>
        <dropdown 
          class="sort"
          :list-style="{width: '230px', right: 0, left: 'auto'}"
          :options="sortOptions"
          :button="{img: require('@/assets/arrow-down.svg'), text: sortButtonText, reverse: true}"
          @check="checkSortOption"
        >
        </dropdown>
      </div>
      <product-list :products="productItems"/>
    </section>
  </div>
</template>
<script>
import Dropdown from '@/components/Dropdown.vue'
import ProductList from '@/components/ProductList.vue'
import { mapGetters } from 'vuex'


export default {
components: { Dropdown, ProductList },
mounted() {
  this.productItems = this.products
},
data() {
  return {
    productItems: [],
    currentDefaultSort: [],
    currentSortOption: 'По умолчанию',
    currentFilterOptions: [],
    filterOptions: [
      {id: 1, value: 'Акне Студия', isCheck: false},
      {id: 2, value: 'АМИ Париж', isCheck: false},
      {id: 3, value: 'Вквадрате2', isCheck: false},
      {id: 4, value: 'Каменный остров', isCheck: false}
    ],
    sortButtonText: 'По умолчанию',
    sortOptions: [
      {id: 1, value: 'По умолчанию'},
      {id: 2, value: 'Сначала доступные'},
      {id: 3, value: 'Сначала догорие'}
    ],
  }
},

computed: {
  ...mapGetters([
    'products'
  ]),
},

methods: {
  checkFilterOption(id) {
    const currentOption = this.filterOptions.find(option => option.id === id)
    currentOption.isCheck = !currentOption.isCheck
    if (currentOption.isCheck === true) {
      this.currentFilterOptions.push(currentOption.value)
    } else {
      this.currentFilterOptions = this.currentFilterOptions.filter(option => option !== currentOption.value)
    }
    this.filterProducts()
  },
  filterProducts() {
    if (!this.currentFilterOptions.length) {
      this.productItems = this.products
      if (this.currentSortOption !== 'По умолчанию') this.sortProducts()
      return
    }
    const filteredProducts = []
    this.products.forEach(item => {
      if( this.currentFilterOptions.includes(item.brand) && !filteredProducts.includes(item)) {
        filteredProducts.push(item)
      }
    })
    this.productItems = filteredProducts
    this.sortProducts()
  },
  checkSortOption(id) {
    const currentOption = this.sortOptions.find(option => option.id === id)
    this.sortButtonText = currentOption.value
    this.currentSortOption = currentOption.value
    this.sortProducts()
  },
  sortProducts() {
    switch(this.currentSortOption) {
      case 'По умолчанию':
        this.sortByDefault()
        break
      case 'Сначала доступные':
        this.sortByAvail()
        break
      case 'Сначала догорие':
        this.sortByPrice()
        break
    }
  },
  sortByDefault() {
    this.filterProducts()
  },
  sortByPrice() {
    const sortedArray = this.productItems.concat().sort(function(a,b) {
      const price1 = Number(a.price.split(' ').join(''))
      const price2 = Number(b.price.split(' ').join(''))
      return price2 - price1
    })
    this.productItems = [...sortedArray]
  },
  sortByAvail() {
    const avail = []
    const notAvail = []
    this.productItems.forEach(item => item.availability ? avail.push(item) : notAvail.push(item))
    this.productItems = [...avail, ...notAvail]
  }
}
}
</script>
<style lang="scss" scoped>
.home {
  padding-block: 32px 272px;
}
.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.filter {
  &__check {
    border: 1px solid #EAECF0;
    border-radius: 4px;
    background-color: #FFFFFF;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__check--current {
    background-color: #0D1421;
  }

  &__check-image {
    display: block;
  }
}

.products__list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}
.card {
  max-width: 400px;
  width: 100%;
}
.card__inner {
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 24px;
}

.card__top {
  overflow: hidden;
  position: relative;
  margin-bottom: 16px;
}

.card__top:hover .card__full-info {
  transform: translateY(0);
}

.card__full-info {
  transform: translateY(100%);
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.7);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  padding: 32px 20px;
  transition: transform 0.3s ease-in;
}

.card__title {
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #354153;
  margin-bottom: 16px;
}

.card__text {
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #354153;
}
.card__price {
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #0D1421;
  margin-bottom: 16px;
}
.card__brand {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
}
.card__brand-name {
  color: #667085;
}

.card__brand-info {
  color: #354153;
}
.card__description {
  color: #667085;
  font-size: 14px;
  line-height: 20px;
}
</style>