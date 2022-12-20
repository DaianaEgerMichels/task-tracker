<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Chronometer :timeInSeconds="timeInSeconds" />
    <button class="button" @click="start" :disabled="stopwatchRunning">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="finalize" :disabled="!stopwatchRunning">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Chronometer from "./Chronometer.vue";

export default defineComponent({
  components: { Chronometer },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Timer",
  data() {
    return {
      timeInSeconds: 0,
      stopwatch: 0,
      stopwatchRunning: false,
    };
  },
  methods: {
    start() {
      //start couting
      this.stopwatchRunning = true;
      this.stopwatch = setInterval(() => {
        this.timeInSeconds += 1;
      }, 1000);
    },
    finalize() {
      this.stopwatchRunning = false;
      clearInterval(this.stopwatch);
      this.$emit('finishedStopwatch', this.timeInSeconds)
      this.timeInSeconds = 0
    },
  },
});
</script>
