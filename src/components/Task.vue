<template>
    <Box>
        <div class="columns">
            <div class="column is-4">
                {{ task.description || 'Task without description' }}
            </div> 
            <div class="column is-3">
                {{task.project?.name || 'N/D'}}
            </div>
            <div class="column">
                <Chronometer :timeInSeconds='task.durationInSeconds'/>
            </div>
        </div>
    </Box>
</template>

<script lang="ts">
import ITask from '../interfaces/ITask'
import {defineComponent, PropType} from 'vue'
import Chronometer from './Chronometer.vue'
import Box from './Box.vue'

    export default defineComponent ({
        name: 'TaskItem',
        components: { Chronometer, Box },
        props: {
            task: {
                type: Object as PropType<ITask>,
                required: true
            }
        }
    })
</script>

