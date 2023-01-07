<template>
  <div class="box form">
    <div class="columns">
      <div
        class="column is-5"
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
      <div class="column is-3">
        <div class="select">
          <select v-model="idProject">
            <option value="">Select Project</option>
            <option :value="project.id" v-for="project in projects" :key="project.id">{{project.name}}</option>
          </select>
        </div>
      </div>
      <div class="column">
        <Timer @finishedStopwatch="endTask"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Timer from "./Timer.vue";
import {useStore} from 'vuex';
import {key} from '@/store';

export default defineComponent({
  name: "TheForm",
  emits: ['whenSavingTask'],
  components: { Timer },
  data () {
    return {
      description: '',
      idProject: ''
    }
  },
  methods: {
    endTask (elapsedTime: number) : void {
      this.$emit('whenSavingTask', {
         durationInSeconds: elapsedTime,
         description: this.description,
         project: this.projects.find( (proj: { id: string; }) => (proj.id == this.idProject))
      })
      this.description = ''
    }
  },
  setup () {
    const store = useStore(key)
    return {
      projects : computed(() => store.state.projects)
    }
  },
 
});
</script>

<style>
  .form {
    color: var(--text-primary);
    background-color: var(--bg-primary);
  }
</style>
