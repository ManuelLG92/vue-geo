<script setup lang="ts">
import { get } from '@/api/queryLibrary'
import { fetcher } from '@/api/fetchUtil'
import AppLayout from '@/components/AppLayout.vue'

const props = defineProps({
  id: String
})
interface Vehicle {
  id: string
  locationId: string
  numberPlate: string
  position: {
    latitude: string
    longitude: string
  }
  fuel: string
  model: string
  polygon: string
}
const url = `vehicles/${props.id}`

const { isLoading, isFetching, isError, data, error } = get(url, fetcher(url))
const vehicle: { data: Vehicle } = data
</script>

<template>
  <AppLayout>
    <template v-slot:content>
      <div v-if="isFetching">Fetching..</div>
      <div v-if="isLoading">Loading..</div>
      <div v-if="isError">Error {{ error }}</div>

      <div v-if="vehicle?.data" class="card col-6 mx-auto">
        <div class="card-header text-center">
          <h1>Vehicle: {{ vehicle.data.id }}</h1>
        </div>
        <div class="card-body">
          <div class="row px-5 my-5">
            <div class="col">
              <h2 class="card-title">Location id: {{ vehicle.data.locationId }}</h2>
            </div>
            <div class="col">
              <h2>Number Plate: {{ vehicle.data.numberPlate }}</h2>
            </div>
          </div>
          <div class="row px-5 my-3">
            <div class="col-4 my-auto">
              <h2 class="card-title text-end me-5">Position:</h2>
            </div>
            <div class="col-8">
              <h4 class="mb-2">Latitude: {{ vehicle.data.position.latitude }}</h4>
              <h4>Longitude: {{ vehicle.data.position.longitude }}</h4>
            </div>
          </div>
          <div class="row px-5 my-5 text-center">
            <div class="col">
              <h4 class="card-title">Model: {{ vehicle.data.model }}</h4>
            </div>
            <div class="col">
              <h4>Fuel: {{ vehicle.data.fuel }}</h4>
            </div>
          </div>
          <div class="row">
            <div class="col text-center">
              <h4 v-if="vehicle.data.polygon.length">
                The vehicle is located in the polygon: {{ vehicle.data.polygon }}
              </h4>
              <h4 v-else>The vehicle is not located in our available polygons</h4>
            </div>
          </div>
        </div>
      </div>
    </template>
  </AppLayout>
</template>

<style scoped></style>
