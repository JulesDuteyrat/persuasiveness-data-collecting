<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
import ButtonsVue from './components/Buttons.vue';
import Content from './components/Content.vue';
import Login from './components/Login.vue';
</script>

<script>
export default {
    data() {
        return {
            logged: false 
        }
    },
    methods: {
        login() {
            this.logged = true;
        },
        logout() {
          this.logged = false;
        }
    }
}
</script>

<template>
  <h1>Random Survey Website !</h1>
  <div class="text-center mt-60 mx-auto">
    <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
    <Login v-if="!logged" @login="login" />
    <div v-else>
      <Content/>
      <ButtonsVue @logout="logout"/>
    </div>
  </div>
</template>



<style scoped>
  h1 {
    @apply text-center;
    @apply text-5xl;
    @apply font-bold;
    @apply mb-4;
  }
</style>
