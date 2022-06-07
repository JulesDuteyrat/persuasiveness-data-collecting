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
            console.log(counts);
            // remove the elements from the object
            const todelete = ['mouseup', 'focus', 'load', 'beforeunload', 'unload', 'touchend', 'error'];
            for (let i = 0; i < todelete.length; i++) {
                delete counts[todelete[i]];
            }

            // convert counts to imput array list
            const allInputs = ['blur', 'click', 'contextmenu', 'copy', 'keydown', 'keyup', 'mousedown', 'mousemove', 'mouseover', 'resize', 'scroll', 'select', 'touchmove', 'touchstart'];
            let output = [];
            for (let i = 0; i < allInputs.length; i++) {
                if (counts[allInputs[i]]) {
                    output.push(counts[allInputs[i]]);
                } else {
                    output.push(0);
                }
            }
            return output;
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