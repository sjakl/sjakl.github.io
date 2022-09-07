<template>
  <q-page class="q-pa-sm">
    <h4 class="q-pa-sm" align-text="middle">isDesignCenter Web App</h4>
    <h5 class="q-pa-sm">What is isDesignCenter?</h5>
    <div class="q-pa-sm">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="primary"
      class="rounded-borders"
      padding
      height="150px"

    >
      <q-carousel-slide name="style" class="column">
        <q-icon name="style" color="primary" size="90px" />
        <div class=" text-top">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-top">
        <q-icon name="live_tv" color="primary" size="90px" />
        <div class="q-mt-md text-top">
          {{ larem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-top">
        <q-icon name="layers" color="primary" size="90px" />
        <div class="q-mt-md text-top">
          {{ info }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-top">
        <q-icon name="terrain" color="primary" size="90px" />
        <div class="q-mt-md text-top">
          {{ layrem }}
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="row justify-left">
      <q-btn-toggle
        glossy
        v-model="slide"
        :options="[
          { label: 1, value: 'style' },
          { label: 2, value: 'tv' },
          { label: 3, value: 'layers' },
          { label: 4, value: 'map' }
        ]"
      />
    </div>
  </div>
  </q-page>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup () {
      return {
        slide: ref('style'),
        lorem: 'isDesignCenter web application',
        larem:  'isDesignCenter is stand alone running without iStruct',
        info: 'Navigate through DesignCenter, Reports, Settings, Customers',
        layrem: 'Create projects, search projects, and customize settings'
      }
    }
  }
  </script>
