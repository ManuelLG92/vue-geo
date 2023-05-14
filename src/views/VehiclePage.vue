<script setup lang="ts">
import { get } from '@/api/queryLibrary'
import { fetcher } from '@/api/fetchUtil'

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
const vehicles: { data: Vehicle } = data
</script>

<template>
  <p>haha</p>
  <div v-if="isFetching">Fetching..</div>
  <div v-if="isLoading">Loading..</div>
  <div v-if="isError">Error {{ error }}</div>
  <div v-if="vehicles?.data">
    <div>
      <p>id: {{ vehicles?.data }}</p>
      <p>locationId: {{ vehicles.data.locationId }}</p>
      <p>numberPlate: {{ vehicles.data.numberPlate }}</p>
      <div>
        <p>Position</p>
        <ul>
          <li>
            <p>latitude: {{ vehicles.data.position.latitude }}</p>
          </li>
          <li>
            <p>longitude: {{ vehicles.data.position.longitude }}</p>
          </li>
        </ul>
      </div>
      <p>fuel: {{ vehicles.data.fuel }}</p>
      <p>model: {{ vehicles.data.model }}</p>
      <p>polygon: {{ vehicles.data.polygon }}</p>
    </div>
  </div>
</template>

<style scoped></style>
