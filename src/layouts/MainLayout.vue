<template>
  <q-layout view="hHh Lpr fFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          size="3em"
          icon="menu"
          aria-label="Menu"
         />
     </q-toolbar>
      <div class="q-px-lg q-pt-sm q-mb-mb">
        <div class="text-h3">isDesignCenter</div>
        <div class="text-subtitle1">{{ todaysDate }}</div>
      </div>
      <q-img
        src="~assets/mountains.jpg"
        class="header-image absolute-top" />
    </q-header>

    <q-drawer
       v-model="leftDrawerOpen" side="left"
        overlay elevated
        content-class="bg-grey-2"
        :width="200"
      >
        <q-scroll-area style="height: calc(100% - 175.99px); margin-top: 175.99px; border-right: 1px solid #ddd">
          <q-list padding>
          <q-item
            to="/"
            clickable
            v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
              Home
              </q-item-section>
              </q-item>
              <q-item
          to=""
          clickable
          v-ripple>
              <q-item-section avatar>
                <q-icon name="" />
              </q-item-section>

              <q-item-section>

              </q-item-section>
            </q-item>

          <q-item
          to="/isDesignCenter"
          clickable
          v-ripple>
              <q-item-section avatar>
                <q-icon name="info" />
              </q-item-section>

              <q-item-section>
                isDesignCenter
              </q-item-section>
            </q-item>

            <q-item
          to="/isReports"
          clickable
          v-ripple>
              <q-item-section avatar>
                <q-icon name="info" />
              </q-item-section>

              <q-item-section>
                isReports
              </q-item-section>
            </q-item>

            <q-item
          to="/isSettings"
          clickable
          v-ripple>
              <q-item-section avatar>
                <q-icon name="info" />
              </q-item-section>

              <q-item-section>
                Settings
              </q-item-section>
            </q-item>

            <q-item
          to="/isCustomers"
          clickable
          v-ripple>
              <q-item-section avatar>
                <q-icon name="info" />
              </q-item-section>

              <q-item-section>
                Customers
              </q-item-section>
            </q-item>
            <q-item
            to="/"
            clickable
            v-ripple>
              <q-item-section avatar>
                <q-icon name="" />
              </q-item-section>

              <q-item-section>

              </q-item-section>
              </q-item>
            <q-item
          to="/todo"
          clickable
          v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>
              To-do CheckList
              <q-item-section>
              </q-item-section>
            </q-item>

            <q-item
          to="/help"
          clickable
          v-ripple>
              <q-item-section avatar>
                <q-icon name="help" />
              </q-item-section>

              <q-item-section>
                Help?
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top header-image2" src="src/assets/mountains.jpg" style="height: 175.99px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">User account</div>
            <div>@useraccount.com</div>
          </div>
        </q-img>
      </q-drawer>
      <q-footer reveal elevated class="bg-grey-8 text-primary" text-align="center">
      <q-toolbar>
        <q-toolbar-title>
          <q-tabs align="center">
        <q-route-tab to="/isDesignCenter" label="DesignCenter Home" />
        <q-route-tab to="/isReports" label="Reports" />
        <q-route-tab to="/isSettings" label="Settings" />
        <q-route-tab to="/isCustomers" label="Customers" />
      </q-tabs>

        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <q-page-container>
<keep-alive>
      <router-view />
    </keep-alive>
    </q-page-container>

  </q-layout>
</template>

<script>
import { date } from 'quasar'
import { ref } from 'vue'

export default {
  name: 'MainLayout',

  data() {
    return {
      leftDrawerOpen: true
    }
  },
  computed: {
    todaysDate() {
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd D MMM YY' )
    }
  },
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>
<style lang="scss">
  .header-image {
    height: 100%;
    z-index: -1;
    opacity: 0.2;
    filter: grayscale(100%)
  }
  .header-image2 {
    height: 100%;
    z-index: -1;
    opacity: 0.8;
    filter: grayscale(20%)
  }
</style>
