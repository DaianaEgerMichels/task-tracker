<template>
    <div class="notification">
        <article class="message " 
        :class="context[notification.type]"
        v-for="notification in notifications" :key="notification.id">
            <div class="message-header">
                {{notification.title}}
            </div>
            <div class="message-body">
                {{notification.text}}
            </div>
        </article>
    </div>
</template>


<script lang="ts">
import { TypeNotification } from '@/interfaces/INotification'
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

    export default defineComponent({
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Notification',
        data () {
            return{
                context: {
                    [TypeNotification.SUCCESS] : 'is-success',
                    [TypeNotification.ATTENTION] : 'is-warning',
                    [TypeNotification.ERROR] : 'is-danger',
                }
            }
        },
        setup () {
            const store = useStore()
            return {
                notifications : computed(() => store.state.notifications )
            }
        }
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