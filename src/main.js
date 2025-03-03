import { createApp } from 'vue'
import router from './router'
import MealPlanner from './MealPlanner.vue'
import './assets/tailwind.css';

const app = createApp(MealPlanner)
app.use(router);
app.mount('#app');
