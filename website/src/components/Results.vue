<script>
// import { model } from '@tensorflow/tfjs';
import * as tf from '@tensorflow/tfjs';
// import modelPath from '/src/assets/model/model.json';

export default {
    data() {
        return {
            loading: true,
            prediction: null
        }
    },
    methods: {
        /**
         * Convert the evtrack array to a format close to a tensor.
         */
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
        /**
         * Predict the attention score based on the evtrack input.
         */
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
        <h3>Estimated attention : </h3><br/>
         {{ 1 * prediction[1] + 2 * prediction[2] + 3 * prediction[3] + 4 * prediction[4] + 5 * prediction[5]}}/5 <br/>
    </div>
</template>


<style scoped>
  h2 {
    @apply text-center;
    @apply font-bold;
    @apply mb-4;
    @apply text-2xl;
  }
  h3 {
    @apply text-center;
    @apply font-bold;
  }
</style>