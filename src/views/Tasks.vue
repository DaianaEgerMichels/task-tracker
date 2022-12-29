<template>
  <TheForm @whenSavingTask="saveTask" />
  <div class="lista">
    <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" />
    <Box v-if="listIsEmpty"> You are not very productive today :( </Box>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheForm from "../components/TheForm.vue";
import TaskItem from "../components/Task.vue";
import ITask from "../interfaces/ITask";
import Box from "../components/Box.vue";

export default defineComponent({
  name: "App",
  components: {
    TheForm,
    TaskItem,
    Box,
  },
  data() {
    return {
      tasks: [] as ITask[],
    };
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task);
    },
  },
  computed: {
    listIsEmpty(): boolean {
      return this.tasks.length === 0;
    },
  },
});
</script>
