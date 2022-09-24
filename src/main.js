import { createApp } from 'vue';
import App from './App.vue';
import contact from './component/friend.vue';



const app=createApp(App);


app.component('f-contact' , contact);

app.mount('#app');
