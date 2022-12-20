<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                {{task.description}}
            </div> 
            <div class="column">
                <Chronometer :timeInSeconds='task.durationInSeconds'/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import ITask from '../interfaces/ITask'
import {defineComponent, PropType} from 'vue'
import Chronometer from './Chronometer.vue'
    export default defineComponent ({
        name: 'TaskItem',
        components: { Chronometer },
        props: {
            task: {
                type: Object as PropType<ITask>,
                required: true
            }
        }
    })
</script>

<style scoped>
    .box {
        background: #3cb3a9;
    }
</style>