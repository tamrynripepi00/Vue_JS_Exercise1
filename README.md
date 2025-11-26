# vue-template
Installing Vue.js and Vuex
1. npm create vue@latest
2. create a project, example: "cooking-class" or "vue-frontend"
3. features - jsx and router
4. experimental - oxlint
5. choose 'no' to not skip the template code
6. cd into your vue folder - ie. "cooking-class" or "vue-frontend"
cd vue-front
7. npm install
8. npm run dev

Note: Make sure you check your router, components

Now after this if we want to use a state management system, we have to install vuex
9. npm install vuex@latest
10. create a store folder in the src
11. add an index.js to the store folder
add:
`
import { createStore } from 'vuex'

const store = ({
    state: {

    },
    getters: {

    },
    mutations: {

    }, 
    actions: {

    }
})

export default store
`
12. head over to the main.js
import the store and use the store
`
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')

`
Good to go, enjoy coding