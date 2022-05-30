<template>
    Press the button to start the survey.
    <br>
    <button @click="login">Continue</button>
</template>

<script>
// le role de ce composant est de faire le boutton de login initial
export default {
    emits: ['login'],
    methods: {
        login() {
            this.$emit('login');
        }
    }
}
</script>

<style scoped>
    button{
        @apply bg-blue-500 text-white font-bold py-2 px-4 rounded
    }
</style>