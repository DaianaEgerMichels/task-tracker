<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                Task description
            </div> 
            <div class="column">
                <Chronometer :timeInSeconds="15"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Chronometer from './Chronometer.vue'
    export default defineComponent ({
        name: 'TaskItem',
        components: { Chronometer },
    })
</script>

<style scoped>
    .box {
        background: #3cb3a9;
    }
</style>