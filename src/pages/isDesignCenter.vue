<template>

  <q-page class="q-pa-lg">
    <h5 class="flex justify-center items-center content-start">isDesignCenter</h5>
<div class="flex justify-center items-center content-start">
  <div style="order: 2">

    </div>
    </div>

    <div class="flex justify-center items-center content-start">
      <q-btn
      :loading="progress[0].loading"
      :percentage="progress[0].percentage"
      color="accent"
      @click="startComputing(0)"
      style="width: 200px"
    >
      New Project
      <template v-slot:loading>

        <q-spinner-gears class="on-left"/>
        Loading New Project
      </template>
    </q-btn>
    <div class="q-pa-md">
    <q-btn-dropdown color="primary" label="Locations">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Atlanta</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Austin</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>BC Office</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Dallas GA</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Head Office</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Midwest Office</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Toronto</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>UK EC5</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

    </q-btn-dropdown>
  </div>
    <q-table

      ref="tableRef"
      :class="tableClass"
      tabindex="0"
      title="Project Que"
      :rows="rows"
      :columns="columns"
      row-key="name"
      selection="single"
      v-model:selected="selected"
      v-model:pagination="pagination"
      :filter="filter"
      @focusin="activateNavigation"
      @focusout="deactivateNavigation"
      @keydown="onKey"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>



  </q-page>

</template>

<script>
  import { ref, onBeforeUnmount } from 'vue'

  export default {
    setup () {
      const progress = ref([
        { loading: false, percentage: 0 },
        { loading: false, percentage: 0 },
        { loading: false, percentage: 0 }
      ])

      const intervals = [ null, null, null ]

      function startComputing (id) {
        progress.value[ id ].loading = true
        progress.value[ id ].percentage = 0

        intervals[ id ] = setInterval(() => {
          progress.value[ id ].percentage += Math.floor(Math.random() * 8 + 10)
          if (progress.value[ id ].percentage >= 100) {
            clearInterval(intervals[ id ])
            progress.value[ id ].loading = false
          }
        }, 700)
      }

      onBeforeUnmount(() => {
        intervals.forEach(val => {
          clearInterval(val)
        })
      })

      return {
        progress,
        startComputing
      }
    }
  }
  </script>
