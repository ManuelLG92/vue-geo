import { createRouter, createWebHistory } from 'vue-router'
const NotFoundView = () => import('@/views//NotFoundView.vue')
const HomeView = () => import('@/views/HomeView.vue')
const VehiclesPage = () => import('@/views/VehiclesPage.vue')
const VehiclePage = () => import('@/views/VehiclePage.vue')
const PolygonPage = () => import('@/views/PolygonPage.vue')
const PolygonsPage = () => import('@/views/PolygonsPage.vue')
const routeNames = {
  home: 'home',
  polygons: {
    all: 'polygons',
    byId: 'polygons_with_id'
  },
  vehicles: {
    all: 'vehicles',
    byId: 'vehicles_with_id'
  }
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: routeNames.home,
      component: HomeView
    },
    {
      path: '/vehicles',
      name: routeNames.vehicles.all,
      component: VehiclesPage
    },
    {
      path: '/vehicles/:id',
      name: routeNames.vehicles.byId,
      component: VehiclePage,
      props: true
    },
    {
      path: '/polygons',
      name: routeNames.polygons.all,
      component: PolygonsPage
    },
    {
      path: '/polygons/:id',
      name: routeNames.polygons.byId,
      component: PolygonPage,
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'ErrorView',
      component: NotFoundView
    }
  ]
})

export default router

export { routeNames }
