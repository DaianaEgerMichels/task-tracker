<template>
    <div class="notification">
        <article class="message is-success">
            <div class="message-header">
                Success!
            </div>
            <div class="message-body">
                Save with success :)
            </div>
        </article>
        <article class="message is-warning">
            <div class="message-header">
                Warning!
            </div>
            <div class="message-body">
                Ooops :/
            </div>
        </article>
        <article class="message is-danger">
            <div class="message-header">
                Error!
            </div>
            <div class="message-body">
                Ooh no :(
            </div>
        </article>
    </div>
</template>


<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Notification',
    })
</script>

<style scoped>
.notification {
    position: absolute;
    right: 0;
    width: 300px;
    padding: 8px;
    z-index: 105;
}
</style>