<script setup lang="ts">
import { get } from '@/api/queryLibrary'
import { fetcher } from '@/api/fetchUtil'
import { routeNames } from '@/router'
import AppLayout from '@/components/AppLayout.vue'
interface Polygons {
  status?: string
  message?: string
  context?: string
  data: Array<{
    id: string
    vehicles: Array<string>
  }>
}
const url = 'polygons/vehicles'

const { isLoading, isFetching, isError, data } = get(url, fetcher(url))
const polygons: Polygons = data
</script>

<template>
  <AppLayout>
    <template v-slot:content>
      <h1 class="text-center">Polygons</h1>
      <div v-if="isFetching">Fetching...</div>
      <div v-if="isLoading">Loading...</div>
      <div v-if="isError" class="text-center">
        <h1>We're having some problems.. Try again later</h1>
      </div>

      <div class="text-center" v-if="polygons?.status > 399">
        <h2>Code: {{ polygons.status }} - {{ polygons.context }}</h2>
        <h3>{{ polygons.message }}</h3>
      </div>
      <div v-else>
        <div class="table-wrapper text-center ms-auto">
          <table class="table table-bordered table-responsive">
            <thead class="table">
              <tr>
                <th>Id</th>
                <th>Vehicles id</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(polygon, key) in polygons?.data" :key="key">
                <th>
                  <RouterLink
                    :to="{ name: routeNames.polygons.byId, params: { id: polygon.id } }"
                    title="Click to see detailed info"
                    >{{ polygon.id }}</RouterLink
                  >
                </th>
                <th>
                  <ul v-for="(vin, key) in polygon.vehicles" :key="key">
                    <li>Vehicle: {{ vin }}</li>
                  </ul>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </AppLayout>
</template>

<style scoped></style>
