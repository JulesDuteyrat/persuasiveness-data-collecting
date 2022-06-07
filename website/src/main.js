import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import './index.css'

const emitter = mitt();
// const model = tf.loadLayersModel(''); // load model from url
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.infoArrays = _infoArrays;
app.mount('#app');

