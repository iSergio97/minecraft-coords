import './assets/main.css';
import 'sweetalert2/dist/sweetalert2.min.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { VueFire, VueFireAuth } from 'vuefire';
import { firebaseApp } from './firebase/config';
import { VueQueryPlugin } from '@tanstack/vue-query';

const app = createApp(App);

VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 2, // 2 minutes
        refetchOnReconnect: 'always'
      }
    }
  }
});

app.use(createPinia());
app.use(router);
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()]
});
// app.use(VueSweetalert2)

app.mount('#app');
