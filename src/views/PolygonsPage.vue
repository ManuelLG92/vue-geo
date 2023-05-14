<script setup lang="ts">
import { get } from '@/api/queryLibrary'
import { fetcher } from '@/api/fetchUtil'
import { routeNames } from '@/router'
interface Polygons {
  id: string
  vehicles: Array<string>
}
const url = 'polygons/vehicles'

const { isLoading, isFetching, isError, data, error } = get(url, fetcher(url))
const vehicles: { data: Array<Polygons> } = data
</script>

<template>
  <p>Polygons</p>
  <div v-if="isFetching">Fetching...</div>
  <div v-if="isLoading">Loading...</div>
  <div v-if="isError">Error {{ error }}</div>
  <div v-for="(vehicle, key) in vehicles.data" :key="key">
    <div>
      <p>id: {{ vehicle.id }}</p>
      <router-link
        :to="{ name: routeNames.polygons.byId, params: { id: vehicle.id } }"
        title="Click to see detailed info"
        >Click to see detailed info</router-link
      >
      <div v-for="(vin, key) in vehicle.vehicles" :key="key">
        <p>Vehicle: {{ vin }}</p>
      </div>
    </div>
    <br />
    <hr />
    <br />
  </div>
</template>

<style scoped></style>
