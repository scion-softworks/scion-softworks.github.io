import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ContactsPage from '@/pages/ContactsPage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import ContributePage from '@/pages/ContributePage.vue'
import AboutUsPage from '@/pages/AboutUsPage.vue'

import NotFound from '@/pages/NotFound.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/contacts', component: ContactsPage },
  { path: '/projects', component: ProjectsPage },
  { path: '/contribute', component: ContributePage },
  { path: '/about-us', component: AboutUsPage },
  { path: '/404', component: NotFound },
  { path: '/:pathMatch(.*)*', redirect: '/404' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router