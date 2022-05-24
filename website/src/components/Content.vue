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
    mounted() {
        const idx = Math.floor(Math.random() * this.elements.length);
        const backup_idx = idx;
        this.selectedElement = this.elements[idx];
        this.emitter.on('skip', () => {
            if (this.idx == this.backup_idx) {
                this.emitter.emit('finished');
            } else {
                if (this.idx < this.elements.length - 1) {
                    this.idx++;
                } 
                else {
                    this.idx = 0;
                }
                this.selectedElement = this.elements[this.idx];
            }

        });
    }
}
</script>

<style scoped>

</style>