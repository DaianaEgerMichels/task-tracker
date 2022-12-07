<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Form for creating a new task"
      >
        <input
          type="text"
          class="input"
          placeholder="Which task do you want ro start?"
        />
      </div>
      <div class="column">
        <div
          class="is-flex is-align-items-center is-justify-content-space-between"
        >
          <Chronometer :timeInSeconds="timeInSeconds"/>
          <button class="button" @click="start">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>play</span>
          </button>
          <button class="button" @click="finalize">
            <span class="icon">
              <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Chronometer from "./Chronometer.vue";

export default defineComponent({
  components: { Chronometer },
  name: "TheForm",
  data () {
    return {
      timeInSeconds: 0,
      stopwatch: 0
    }
  },
  methods: {
    start () {
      //start couting
      this.stopwatch = setInterval(() => {
        this.timeInSeconds += 1
      }, 1000);  
    },
    finalize () {
        clearInterval(this.stopwatch)
    }
  },
});
</script>

<style scoped></style>
