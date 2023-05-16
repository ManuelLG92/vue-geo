<script setup lang="ts">
import { get } from '@/api/queryLibrary'
import { fetcher } from '@/api/fetchUtil'
import AppLayout from '@/components/AppLayout.vue'
import { routeNames } from '@/router'

const props = defineProps({
  id: String
})
interface VehicleResponse {
  status?: string
  message?: string
  context?: string
  data?: {
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
}

const url = `vehicles/${props.id}`

const { isLoading, isFetching, isError, data } = get(url, fetcher(url))
const vehicle: VehicleResponse = data
</script>

<template>
  <AppLayout>
    <template v-slot:content>
      <div v-if="isFetching">Fetching..</div>
      <div v-if="isLoading">Loading..</div>
      <div v-if="isError" class="text-center">
        <h1>We're having some problems.. Try again later</h1>
      </div>

      <div class="text-center" v-if="vehicle?.status > 399">
        <h2>Code: {{ vehicle.status }} - {{ vehicle?.context }}</h2>
        <h3>{{ vehicle?.message }}</h3>
      </div>
      <div v-else>
        <div v-if="vehicle?.data?.id" class="card col-6 mx-auto">
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
                  The vehicle is located in the polygon:
                  <RouterLink
                    :to="{ name: routeNames.polygons.byId, params: { id: vehicle.data.polygon } }"
                    title="Click to see detailed info"
                    >{{ vehicle.data.polygon }}</RouterLink
                  >
                </h4>
                <h4 v-else>The vehicle is not located in our available polygons</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center m-5">
        <button class="btn btn-lg btn-primary text-white">
          <RouterLink
            class="text-white"
            :to="{ name: routeNames.vehicles.all }"
            title="Back to List"
          >
            Back to List
          </RouterLink>
        </button>
      </div>
    </template>
  </AppLayout>
</template>

<style scoped></style>
