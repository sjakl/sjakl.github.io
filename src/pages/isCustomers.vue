<template>
  <q-page class="q-pa-lg">
    <h5 class="q-pa-lg">Customers</h5>
    <div class="q-pa-md">
    <q-table
      title="Customers"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
  </q-page>
</template>

<script>
  export default {


  }
</script>
