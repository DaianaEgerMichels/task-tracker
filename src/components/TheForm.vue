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
          <section>
            <strong>{{elapsedTime}}</strong>
          </section>
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

export default defineComponent({
  name: "TheForm",
  data () {
    return {
      timeInSeconds: 0
    }
  },
  computed: {
    elapsedTime () : string {
      return new Date(this.timeInSeconds * 1000).toISOString().substr(11, 8);
    }
  },
  methods: {
    start () {
      //start couting
      setInterval(() => {
        this.timeInSeconds += 1
      }, 1000);  
    },
    finalize () {
        console.log('stop');
    }
  },
});
</script>

<style scoped></style>
