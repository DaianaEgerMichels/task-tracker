<template>
  <div class="box form">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Form for creating a new task"
      >
        <input
          type="text"
          class="input"
          placeholder="Which task do you want to start?"
          v-model="description"
        />
      </div>
      <div class="column">
        <Timer @finishedStopwatch="endTask"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Timer from "./Timer.vue";

export default defineComponent({
  name: "TheForm",
  emits: ['whenSavingTask'],
  components: { Timer },
  data () {
    return {
      description: ''
    }
  },
  methods: {
    endTask (elapsedTime: number) : void {
      this.$emit('whenSavingTask', {
         durationInSeconds: elapsedTime,
         description: this.description
      })
      this.description = ''
    }
  }
 
});
</script>

<style>
  .form {
    color: var(--text-primary);
    background-color: var(--bg-primary);
  }
</style>
