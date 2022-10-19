import { createApp } from 'vue';
import App from './App.vue';
import contact from './component/friend.vue';
import newfriend from './component/newFriend'



const app=createApp(App);

app.component('f-contact' , contact);
app.component('new-friend', newfriend)

app.mount('#app');



