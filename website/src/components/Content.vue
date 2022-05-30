<template>
    <div>
        {{ selectedElement }}
    </div>
</template>

<script>
//https://vitejs.dev/guide/assets.html - for assets import with vite
import text from '/src/assets/articles.txt?raw';

export default {
    data() {
        return {
            elements: [],
            selectedElement: ''
        }
    },
    created() {
        const articles = text.split('\r\n\r\n'); //split when there is a new line
        this.elements = articles;
    },
    emits: ['finish'],
    mounted() {
        var idx = Math.floor(Math.random() * this.elements.length);
        const backup_idx = idx;
        console.log(idx);
        this.selectedElement = this.elements[idx];
        this.emitter.on('skip', () => {
            if (idx < this.elements.length - 1) {
                idx++;
            } 
            else {
                idx = 0;
            }
            console.log(idx);
            if (idx == backup_idx) {
                this.$emit('finish');
            } else {
                this.selectedElement = this.elements[idx];

            }

        });
    }
}
</script>

<style scoped>

</style>