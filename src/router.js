import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ContactsPage from '@/pages/ContactsPage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/contacts', component: ContactsPage },
  { path: '/projects', component: ProjectsPage },
  { path: '/404', component: NotFound },
  { path: '/:pathMatch(.*)*', redirect: '/404' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router