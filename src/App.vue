<template>
  <main class="columns is-gapless is-multiline" :class="{'dark-mode': darkModeActive}">
    <div class="column is-one-quarter">
      <SideBar @theChangedTheme="changeTheme"/>
    </div>
    <div class="column is-three-quarter content">
      <TheForm @whenSavingTask="saveTask" />
      <div class="lista">
        <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" />
        <Box v-if="listIsEmpty"> You are not very productive today :( </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "./components/SideBar.vue";
import TheForm from "./components/TheForm.vue";
import TaskItem from "./components/Task.vue";
import ITask from "./interfaces/ITask";
import Box from "./components/Box.vue";

export default defineComponent({
  name: "App",
  components: {
    SideBar,
    TheForm,
    TaskItem,
    Box,
  },
  data() {
    return {
      tasks: [] as ITask[],
      darkModeActive: false
    };
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task);
    },
    changeTheme(darkModeActive: boolean) {
        this.darkModeActive = darkModeActive
    }
  },
  computed: {
    listIsEmpty () : boolean {
      return this.tasks.length === 0
    }
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
main {
  --bg-primary: #fff;
  --text-primary: #000;
}
main.dark-mode {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}
.content {
  background-color: var(--bg-primary);
}
</style>
