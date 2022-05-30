<script>
    const time = 5;
    export default {
        data() {
            return {
                timerCount: time
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
            goodbye() {
                // alert('Goodbye!');
                this.$emit('logout');
            },
            skip() {
                this.timerCount=time
                this.emitter.emit('skip');
            }
        }
    }
</script>


<template>
    <div class=" inset-x-0 bottom-0 h-16 grid grid-cols-2 fixed p-1">
        <button @click="goodbye" class="bg-blue-100 mr-1">quit</button>
        <button :disabled='true' v-if="timerCount > 0" class="bg-gray-400">skip in {{ timerCount }}</button>
        <button v-else @click="skip" class="bg-blue-100">skip</button>
    </div>
</template>


