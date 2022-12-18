<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideBar/>
    </div>
    <div class="column is-three-quarter">
      <TheForm/>
      <div class="lista">
        <TaskItem/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue'
import TheForm from './components/TheForm.vue'
import TaskItem from './components/Task.vue'

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    TheForm,
    TaskItem
  }
});
</script>

<style>
  .lista {
    padding: 1.25rem;
    
  }
</style>
