<script>
    export default {
        data() {
            return {
                timerCount: 10
            }
        },
        watch: {
            timerCount: {
                handler(value) {

                    if (value > 0) {
                        setTimeout(() => {
                            this.timerCount--;
                        }, 1000);
                    }
                },
                immediate: true // This ensures the watcher is triggered upon creation
            }
        },
        methods: {

        }
    }
</script>


<template>
    <div class=" inset-x-0 bottom-0 h-16 grid grid-cols-2 fixed p-1">
        <button class="bg-blue-100 mr-1">quit</button>
        <button :disabled='true' v-if="timerCount > 0" class="bg-gray-400">skip in {{ timerCount }}</button>
        <button v-else @click="timerCount=10" class="bg-blue-100">skip</button>
    </div>
</template>


