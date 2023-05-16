<script setup lang="ts">
import { get } from '@/api/queryLibrary'
import { fetcher } from '@/api/fetchUtil'
import AppLayout from '@/components/AppLayout.vue'
import router, { routeNames } from '@/router'

const props = defineProps({
  id: String
})
interface Polygon {
  status?: string
  message?: string
  context?: string
  data: {
    id: string
    vehicles: Array<string>
  }
}

const url = `polygons/${props.id}/vehicles/`

const { isLoading, isFetching, isError, data } = get(url, fetcher(url))
const polygon: Polygon = data
</script>

<template>
  <AppLayout>
    <template v-slot:content>
      <div v-if="isFetching">Fetching...</div>
      <div v-if="isLoading">Loading...</div>
      <div v-if="isError" class="text-center">
        <h1>We're having some problems.. Try again later</h1>
      </div>
      <div class="text-center" v-if="polygon?.status > 399">
        <h2>Code: {{ polygon.status }} - {{ polygon.context }}</h2>
        <h3>{{ polygon.message }}</h3>
      </div>
      <div v-else>
        <div v-if="polygon?.data" class="card col-6 mx-auto">
          <div class="card-header text-center">
            <h1>Polygon: {{ polygon.data.id }}</h1>
          </div>
          <div class="card-body">
            <ul v-for="(vehicle, key) in polygon.data.vehicles" :key="key">
              <li>
                <h2>Vehicle: {{ vehicle }}</h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="text-center m-5">
        <button
          class="btn btn-lg btn-primary text-white"
          @click="router.push({ name: routeNames.polygons.all })"
        >
          Back to List
        </button>
      </div>
    </template>
  </AppLayout>
</template>

<style scoped></style>
