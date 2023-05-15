<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './NavBar.vue'

export default defineComponent({
  name: 'AppLayout',
  components: { NavBar }
})
</script>

<template>
  <div>
    <NavBar />
    <div class="mb-5 mt-5 content bg-light">
      <div class="row container-fluid mx-auto">
        <div class="col-12">
          <slot name="content"> </slot>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
