<template>
  <q-page class="q-pa-lg">
    <h5 class="q-pa-lg">isDesignCenter</h5>

    <h5 class="q-pa-lg">Settings</h5>
    <q-transition
  appear
  group
  enter="fadeIn"
  leave="fadeOut"
>
  <!-- We wrap a "p" tag and a QBtn -->
  <p key="text">
     Lorum Ipsum
  </p>
  <q-btn
    key="email-button"
    color="secondary"
    icon="mail"
  >
    Email
  </q-btn>
</q-transition>
  </q-page>
</template>

<script>
  export default {


  }
</script>
