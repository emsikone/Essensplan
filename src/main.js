import { createApp } from 'vue'
import { createPinia } from 'pinia'


import router from './router'
import MealPlanner from './pages/MealPlanner.vue'
import './assets/tailwind.css';

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

const app = createApp(MealPlanner)
app.use(router);
app.use(createPinia());
app.component('v-select', vSelect);


app.mount('#app');
