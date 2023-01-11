import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tasks from '../views/Tasks.vue';
import Projects from '../views/Projects.vue';
import TheForm from '../views/Projects/TheForm.vue'


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tasks',
        component: Tasks
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/projects/new',
        name: 'New Project',
        component: TheForm
    },
    {
        path: '/projects/:id',
        name: 'Edit Project',
        component: TheForm,
        props: true
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router;