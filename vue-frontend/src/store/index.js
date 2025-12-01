
import { createStore } from 'vuex'

const store = createStore({
    state: {
        // List of food products
        products: [
      { id: 1, title: 'Spaghetti Mastery', chef: 'Chef Mario', level: 'Beginner', price: 100, available: true,img:'https://tamrynripepi00.github.io/images/spaghetti.webp' },
      { id: 2, title: 'Pasta Perfection', chef: 'Chef Luigi', level: 'Intermediate', price: 120, available: true,img:'https://tamrynripepi00.github.io/images/pasta.png' },
      { id: 3, title: 'Gourmet Pizza', chef: 'Chef Sophia', level: 'Advanced', price: 150, available: false,img:'https://tamrynripepi00.github.io/images/pizza.webp' },
      { id: 4, title: 'Lasagna Secrets', chef: 'Chef Antonio', level: 'Intermediate', price: 70, available: true,img: 'https://tamrynripepi00.github.io/images/lasgna.jpg' },
      { id: 5, title: 'Pies Techniques', chef: 'Chef Isabella', level: 'Beginner', price: 90, available: false,img: 'https://tamrynripepi00.github.io/images/pie.jpg' },
    ],

    // Wishlist count
    wishlist: 0,
    
    },

  getters: {
    allProducts: (state) => state.products,
    wishlistItems: (state) => state.wishlist,
    wishlistCount: (state) => state.wishlist.length
  },

  mutations: {
    ADD_TO_WISHLIST(state, product) {
      // prevent duplicates
      const exists = state.wishlist.some(item => item.id === product.id)
      if (!exists) {
        state.wishlist.push(product)
      }
    }
  },

  actions: {
    addToWishlist({ commit }, product) {
      commit('ADD_TO_WISHLIST', product)
    }
  }
})

export default store