import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      state: false,
      name: ''
    },
    cartItems: [],
    products: [
      {
        id: 1,
        img: require('@/assets/cards/stone-1.jpg'),
        slides: [
          require('@/assets/cards/stone-1.jpg'),
          require('@/assets/cards/stone-2.jpg'),
          require('@/assets/cards/stone-3.jpg'),
          require('@/assets/cards/stone-4.jpg'),
        ],
        availability: false,
        price: '30 000', 
        brand: 'Каменный остров', 
        description: 'Жилет с нашивкой компасом', 
        text: 'Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет'
      },
      {
        id: 2,
        img: require('@/assets/cards/paris-1.jpg'),
        slides: [
          require('@/assets/cards/paris-1.jpg'),
          require('@/assets/cards/paris-2.jpg'),
          require('@/assets/cards/paris-3.jpg'),
          require('@/assets/cards/paris-4.jpg'),
        ],
        availability: true,
        price: '18 800', 
        brand: 'АМИ Париж', 
        description: 'Полосатая рубашка с коротким рукавом', 
        text: 'В этой модели АМИ Париж представляет смелый взгляд на классический силуэт рубашки'
      },
      {
        id: 3,
        img: require('@/assets/cards/square-1.jpg'),
        slides: [
          require('@/assets/cards/square-1.jpg'),
          require('@/assets/cards/square-2.jpg'),
          require('@/assets/cards/square-3.jpg'),
          require('@/assets/cards/square-4.jpg'),
        ],
        availability: false,
        price: '47 300', 
        brand: 'Вквадрате2', 
        description: 'Укороченные брюки с вышитым логотипом', 
        text: 'Сделано в Италии'
      },
      {
        id: 4,
        img: require('@/assets/cards/acne-1.jpg'),
        slides: [
          require('@/assets/cards/acne-1.jpg'),
          require('@/assets/cards/acne-2.jpg'),
          require('@/assets/cards/acne-3.jpg'),
          require('@/assets/cards/acne-4.jpg'),
        ],
        availability: true,
        price: '19 000', 
        brand: 'Акне Студия', 
        description: 'Полосатый двубортный блейзер', 
        text: 'Лацканы из светло-серой шерсти в вертикальную полоску'
      },
      {
        id: 5,
        img: require('@/assets/cards/stone-1.jpg'),
        slides: [
          require('@/assets/cards/stone-1.jpg'),
          require('@/assets/cards/stone-2.jpg'),
          require('@/assets/cards/stone-3.jpg'),
          require('@/assets/cards/stone-4.jpg'),
        ],
        availability: true,
        price: '25 000', 
        brand: 'Каменный остров', 
        description: 'Жилет с нашивкой компасом', 
        text: 'Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет'
      }
    ]
  },
  getters: {
    products: state => state.products,
    auth: state => state.auth,
    cart: state => state.cartItems
  },
  mutations: {
    login(state, payload) {
      state.auth = payload
    },
    logout(state, payload) {
      state.auth = payload
    },
    setCartItems(state, payload) {
      state.cartItems.push(payload)
    },
    changeCartItem(state, payload) {
      state.cartItems.find(item => item.id === payload.id).size = payload.size
    },
    deleteCartItem(state, payload) {
      state.cartItems.filter(item => item.id !== payload.id)
    },
  },
  actions: {
  },
  modules: {
  }
})
