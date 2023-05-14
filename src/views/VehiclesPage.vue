<script setup lang="ts">
import { get } from '@/api/queryLibrary'
import { fetcher } from '@/api/fetchUtil'
import { routeNames } from '@/router'
interface InterfaceX {
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
const vehicles: { data: Array<InterfaceX> } = data
</script>

<template>
  <p>haha</p>
  <div v-if="isFetching">Fetching..</div>
  <div v-if="isLoading">Loading..</div>
  <div v-if="isError">Error {{ error }}</div>
  <div v-for="(vehicle, key) in vehicles?.data" :key="key">
    <div>
      <p>id: {{ vehicle.id }}</p>
      <p>vin: {{ vehicle.vin }}</p>
      <p>locationId: {{ vehicle.locationId }}</p>
      <p>numberPlate: {{ vehicle.numberPlate }}</p>
      <router-link
        :to="{ name: routeNames.vehicles.byId, params: { id: vehicle.id } }"
        title="Click to see detailed info"
        >Click to see detailed info</router-link
      >
      <div>
        <p>Position</p>
        <ul>
          <li>
            <p>latitude: {{ vehicle.position.latitude }}</p>
          </li>
          <li>
            <p>longitude: {{ vehicle.position.longitude }}</p>
          </li>
        </ul>
      </div>
      <p>fuel: {{ vehicle.fuel }}</p>
      <p>model: {{ vehicle.model }}</p>
      <p>polygon: {{ vehicle.polygon }}</p>
    </div>
    <br />
    <hr />
    <br />
  </div>
</template>

<style scoped></style>
