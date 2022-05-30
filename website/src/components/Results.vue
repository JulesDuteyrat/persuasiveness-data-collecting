<script>
export default {
    mounted() {
        
    },
    methods: {
        infoArrayToCount(){
            let simpleInfoArr = [];
            for (let i = 0; i < this.infoArrays.length; i++) {
                simpleInfoArr.push(this.infoArrays[i][0][4]);
            }

            let counts = {};

            for (const num of simpleInfoArr) {
            counts[num] = counts[num] ? counts[num] + 1 : 1;
            }
            return counts;
        }
    }
}
</script>

<template>
    <h2>Results</h2>
    {{ infoArrayToCount() }}
</template>

<style scoped>
</style>