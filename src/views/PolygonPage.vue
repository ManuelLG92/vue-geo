<script setup lang="ts">
import { get } from '@/api/queryLibrary'
import { fetcher } from '@/api/fetchUtil'

const props = defineProps({
  id: String
})
interface Polygon {
  id: string
  vehicles: Array<string>
}

const url = `polygons/${props.id}/vehicles/`

// const fetcher = () => {
//   return fetch(url)
//     .then((res) => res.json())
//     .catch((e) => console.log('error', e))
// }
const { isLoading, isFetching, isError, data, error } = get(url, fetcher(url))
const polygon: { data: Polygon } = data
</script>

<template>
  <p>Polygon {{ id }}</p>
  <div v-if="isFetching">Fetching...</div>
  <div v-if="isLoading">Loading...</div>
  <div v-if="isError">Error {{ error }}</div>
  <div v-if="polygon?.data">
    <div>
      <p>id: {{ polygon.data.id }}</p>
      <div v-for="(vin, key) in polygon.data.vehicles" :key="key">
        <p>Vehicle: {{ vin }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
