<script setup lang="ts">
import { get } from '@/api/queryLibrary'
import { fetcher } from '@/api/fetchUtil'
import { routeNames } from '@/router'
import AppLayout from '@/components/AppLayout.vue'
interface Vehicle {
  status?: string
  message?: string
  context?: string
  data: Array<{
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
  }>
}
const url = 'vehicles'

const { isLoading, isFetching, isError, data } = get('vehicles', fetcher(url))
const vehicles: Vehicle = data
</script>

<template>
  <AppLayout>
    <template v-slot:content>
      <h1 class="text-center">Vehicles</h1>

      <div v-if="isFetching">Fetching..</div>
      <div v-if="isLoading">Loading..</div>
      <div v-if="isError" class="text-center">
        <h1>We're having some problems.. Try again later</h1>
      </div>

      <div class="text-center" v-if="vehicles?.status > 399">
        <h2>Code: {{ vehicles.status }} - {{ vehicles?.context }}</h2>
        <h3>{{ vehicles?.message }}</h3>
      </div>
      <div v-else>
        <div v-if="vehicles?.data?.length">
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
                    <RouterLink
                      :to="{ name: routeNames.vehicles.byId, params: { id: vehicle.id } }"
                      title="Click to see detailed info"
                      >{{ vehicle.id }}</RouterLink
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
        </div>
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
