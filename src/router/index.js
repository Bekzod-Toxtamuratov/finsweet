import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../pages/homePage.vue'),
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../pages/About.vue'),
		},
		{
			path: '/pricing',
			name: 'pricing',
			component: () => import('../pages/Pricing.vue'),
		},
		{
			path: '/work',
			name: 'work',
			component: () => import('../pages/Work.vue'),
		},
	],
})

export default router
