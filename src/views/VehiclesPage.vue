<script setup lang="ts">
import { get } from '@/api/queryLibrary'
import { fetcher } from '@/api/fetchUtil'
import { routeNames } from '@/router'
import AppLayout from '@/components/AppLayout.vue'
interface Vehicle {
  id: string
  locationId: string
  vin: string
  numberPlate: string
  position: {
    latitude: string
    longitude: string
  }
  fuel: string
  model: string
  polygon: string
}
const url = 'vehicles'

const { isLoading, isFetching, isError, data, error } = get('vehicles', fetcher(url))
const vehicles: { data: Array<Vehicle> } = data
</script>

<template>
  <AppLayout>
    <template v-slot:content>
      <div v-if="isFetching">Fetching..</div>
      <div v-if="isLoading">Loading..</div>
      <div v-if="isError">Error {{ error }}</div>
      <h1 class="text-center">Vehicles</h1>
      <div class="table-wrapper text-center ms-auto">
        <table class="table table-bordered table-responsive">
          <thead class="table">
            <tr>
              <th>Id</th>
              <th>Location Id</th>
              <th>Number Plate</th>
              <th>Position</th>
              <th>Fuel</th>
              <th>Model</th>
              <th>Polygon</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(vehicle, key) in vehicles?.data" :key="key">
              <th>
                <router-link
                  :to="{ name: routeNames.vehicles.byId, params: { id: vehicle.id } }"
                  title="Click to see detailed info"
                  >{{ vehicle.id }}</router-link
                >
              </th>
              <th>
                {{ vehicle.locationId }}
              </th>
              <th>
                {{ vehicle.numberPlate }}
              </th>
              <div>
                <th>
                  <ul>
                    <li>
                      latitude:
                      {{ vehicle.position.latitude }}
                    </li>
                    <li>
                      longitude:
                      {{ vehicle.position.longitude }}
                    </li>
                  </ul>
                </th>
              </div>
              <th>
                {{ vehicle.fuel }}
              </th>
              <th>
                {{ vehicle.model }}
              </th>
              <th>
                {{ vehicle.polygon.length ? vehicle.polygon : 'N/A' }}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </AppLayout>
</template>

<style scoped>
.table-wrapper {
  max-height: 75vh;
  overflow: auto;
  margin: 0 auto;
}

li {
  text-align: left;
}
</style>
