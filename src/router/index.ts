import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PolygonsPage from '@/views/PolygonsPage.vue'
import PolygonPage from '@/views/PolygonPage.vue'
import VehiclePage from '@/views/VehiclePage.vue'
// import VehiclesPage from '@/views/VehiclesPage.vue'

const VehiclesPage = () => import('@/views/VehiclesPage.vue')
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
    }
  ]
})

export default router

export { routeNames }
