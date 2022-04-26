<template>
    <div>
        {{ selectedElement }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            elements: [
                'text 1 : yep thats text 1 for sure',
                'text 2 : very serious text 2'
            ],
            selectedElement: ''
        }
    },
    created() {
        const idx = Math.floor(Math.random() * this.elements.length);
        this.selectedElement = this.elements[idx];
    },
    mounted() {
        this.emitter.on('skip', () => {
            console.log('skip');
            if (this.idx < this.elements.length - 1) {
                this.idx++;
            } else {
                this.idx = 0;
            }
            this.selectedElement = this.elements[this.idx];
        });
    }
}
</script>

<style scoped>

</style>