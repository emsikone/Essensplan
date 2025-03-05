import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import MealPlanner from './pages/MealPlanner.vue'
import './assets/tailwind.css';

const app = createApp(MealPlanner)
app.use(router);
app.use(createPinia());


app.mount('#app');
