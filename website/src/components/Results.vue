<script>
// import { model } from '@tensorflow/tfjs';
import * as tf from '@tensorflow/tfjs';
// import modelPath from '/src/assets/model/model.json';

export default {
    data() {
        return {
            loading: false,
            prediction: null
        }
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
        },
        async loadModel() {
            const model = await tf.loadLayersModel('/src/assets/model/model.json');
            return model;
        },
        tensorflow(){
            this.loading = true;
            let inputArr = this.infoArrayToCount();
            let input = tf.tensor2d([inputArr]);
            // let model = this.loadModel();
            this.loadModel().then(model => {
                const prediction = model.predict(input);
                console.log(prediction.dataSync());
                this.prediction = prediction.dataSync();
                this.loading = false;
            });

        }
    },
    mounted() {
        this.tensorflow();
    }
}
</script>

<template>
    <h2>Results</h2>
    <div v-if="loading">
        loading...
    </div>
    <div v-else>
        {{ prediction }}
    </div>
</template>


<style scoped>
</style>