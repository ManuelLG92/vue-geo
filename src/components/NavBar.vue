<script lang="ts">
import { defineComponent } from 'vue'
import { routeNames } from '@/router'

export default defineComponent({
  name: 'NavBar',
  computed: {
    routeNames() {
      return routeNames
    }
  }
})
</script>

<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <RouterLink class="text-decoration-none fw-bold" to="/">
        <span class="navbar-brand">Share now</span>
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <RouterLink class="text-decoration-none" :to="{ name: routeNames.vehicles.all }">
            <li class="nav-item">
              <span class="nav-link active">Vehicles </span>
            </li>
          </RouterLink>

          <RouterLink class="text-decoration-none" :to="{ name: routeNames.polygons.all }">
            <li class="nav-item">
              <span class="nav-link active">Polygons </span>
            </li>
          </RouterLink>
        </ul>
      </div>
    </div>
  </nav>
</template>
