<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideBar/>
    </div>
    <div class="column is-three-quarter">
      <TheForm @whenSavingTask="saveTask"/>
      <div class="lista">
          <TaskItem v-for="(task, index) in tasks" :key="index" :task="task"/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue'
import TheForm from './components/TheForm.vue'
import TaskItem from './components/Task.vue'
import ITask from './interfaces/ITask'

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    TheForm,
    TaskItem
  },
  data () {
    return {
      tasks: [] as ITask[]
    }
  },
  methods: {
    saveTask (task: ITask) {
      this.tasks.push(task)
    }
  }
});
</script>

<style>
  .lista {
    padding: 1.25rem;
  }
</style>
