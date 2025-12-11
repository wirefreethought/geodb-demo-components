<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      light
      :mini-variant="miniVariant"
      :clipped="clipped"
      app
    >
      <v-list
        dense
        class="pt-0"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          value="true"
          router
          :to="item.action"
        >
          <v-list-item-action>
            <!-- use icon prop instead of v-html -->
            <v-icon :icon="item.icon" />
          </v-list-item-action>
          <v-list-item-content>
            <!-- interpolate title instead of v-text -->
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- interpolate title instead of v-text -->
      <v-app-bar-title>
        {{ title }}
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid class="pa-4">
        <v-slide-y-transition mode="out-in">
          <router-view />
        </v-slide-y-transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'widgets',
          title: 'Find Countries',
          action: '/find-countries'
        },
        {
          icon: 'widgets',
          title: 'Find Country Places',
          action: '/find-country-places'
        },
        {
          icon: 'widgets',
          title: 'Find Country Regions',
          action: '/find-country-regions'
        },
        {
          icon: 'widgets',
          title: 'Find Country Region Places',
          action: '/find-country-region-places'
        },
        {
          icon: 'widgets',
          title: 'Find Places',
          action: '/find-places'
        },
        {
          icon: 'widgets',
          title: 'Find Places Near Location',
          action: '/find-places-near-location'
        },
        {
          icon: 'widgets',
          title: 'Find Places Near Place',
          action: '/find-places-near-place'
        },
        {
          icon: 'widgets',
          title: 'Get Place Admin Region',
          action: '/get-place-admin-region'
        },
        {
          icon: 'widgets',
          title: 'Get Place Date-Time',
          action: '/get-place-datetime'
        },
        {
          icon: 'widgets',
          title: 'Get Place Details',
          action: '/get-place-details'
        },
        {
          icon: 'widgets',
          title: 'Get Place Distance',
          action: '/get-place-distance'
        },
        {
          icon: 'widgets',
          title: 'Get Place Time',
          action: '/get-place-time'
        },
        {
          icon: 'widgets',
          title: 'Get Country Details',
          action: '/get-country-details'
        },
        {
          icon: 'widgets',
          title: 'Get Country Region Details',
          action: '/get-country-region-details'
        },
        {
          icon: 'widgets',
          title: 'Get Currencies',
          action: '/get-currencies'
        },
        {
          icon: 'widgets',
          title: 'Get Languages',
          action: '/get-languages'
        },
        {
          icon: 'widgets',
          title: 'Get Locales',
          action: '/get-locales'
        },
        {
          icon: 'widgets',
          title: 'Get Time-Zones',
          action: '/get-timezones'
        },
        {
          icon: 'widgets',
          title: 'Get Time-Zone Date-Time',
          action: '/get-timezone-datetime'
        },
        {
          icon: 'widgets',
          title: 'Get Time-Zone Time',
          action: '/get-timezone-time'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'GeoDB Demo'
    }
  }
}
</script>

<style scoped>
@import './shared/styles/app.css';
</style>
