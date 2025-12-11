// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/Home.vue'

import FindCountriesDemo from '@/components/geo/FindCountriesDemo.vue'
import FindCountryPlacesDemo from '@/components/geo/FindCountryPlacesDemo.vue'
import FindCountryRegionsDemo from '@/components/geo/FindCountryRegionsDemo.vue'
import GetCountryDetailsDemo from '@/components/geo/GetCountryDetailsDemo.vue'
import GetCountryRegionDetailsDemo from '@/components/geo/GetCountryRegionDetailsDemo.vue'
import GetCurrenciesDemo from '@/components/locale/GetCurrenciesDemo.vue'
import GetLanguagesDemo from '@/components/locale/GetLanguagesDemo.vue'
import GetLocalesDemo from '@/components/locale/GetLocalesDemo.vue'
import GetTimezonesDemo from '@/components/locale/GetTimezonesDemo.vue'
import GetTimezoneTimeDemo from '@/components/locale/GetTimezoneTimeDemo.vue'
import FindPlacesDemo from '@/components/geo/FindPlacesDemo.vue'
import FindPlacesNearLocationDemo from '@/components/geo/FindPlacesNearLocationDemo.vue'
import FindPlacesNearPlaceDemo from '@/components/geo/FindPlacesNearPlaceDemo.vue'
import GetPlaceAdminRegionDemo from '@/components/geo/GetPlaceAdminRegionDemo.vue'
import GetPlaceDateTimeDemo from '@/components/geo/GetPlaceDateTimeDemo.vue'
import GetPlaceDetailsDemo from '@/components/geo/GetPlaceDetailsDemo.vue'
import GetPlaceDistanceDemo from '@/components/geo/GetPlaceDistanceDemo.vue'
import GetPlaceTimeDemo from '@/components/geo/GetPlaceTimeDemo.vue'
import GetTimezoneDateTimeDemo from '@/components/locale/GetTimezoneDateTimeDemo.vue'
import FindCountryRegionPlacesDemo from '@/components/geo/FindCountryRegionPlacesDemo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/find-countries',
    component: FindCountriesDemo
  },
  {
    path: '/find-country-places',
    component: FindCountryPlacesDemo
  },
  {
    path: '/find-country-regions',
    component: FindCountryRegionsDemo
  },
  {
    path: '/find-country-region-places',
    component: FindCountryRegionPlacesDemo
  },
  {
    path: '/find-places',
    component: FindPlacesDemo
  },
  {
    path: '/find-places-near-location',
    component: FindPlacesNearLocationDemo
  },
  {
    path: '/find-places-near-place',
    component: FindPlacesNearPlaceDemo
  },
  {
    path: '/get-place-admin-region',
    component: GetPlaceAdminRegionDemo
  },
  {
    path: '/get-place-datetime',
    component: GetPlaceDateTimeDemo
  },
  {
    path: '/get-place-details',
    component: GetPlaceDetailsDemo
  },
  {
    path: '/get-place-distance',
    component: GetPlaceDistanceDemo
  },
  {
    path: '/get-place-time',
    component: GetPlaceTimeDemo
  },
  {
    path: '/get-country-details',
    component: GetCountryDetailsDemo
  },
  {
    path: '/get-country-region-details',
    component: GetCountryRegionDetailsDemo
  },
  {
    path: '/get-currencies',
    component: GetCurrenciesDemo
  },
  {
    path: '/get-languages',
    component: GetLanguagesDemo
  },
  {
    path: '/get-locales',
    component: GetLocalesDemo
  },
  {
    path: '/get-timezones',
    component: GetTimezonesDemo
  },
  {
    path: '/get-timezone-datetime',
    component: GetTimezoneDateTimeDemo
  },
  {
    path: '/get-timezone-time',
    component: GetTimezoneTimeDemo
  }
]

const router = createRouter({
  history: createWebHistory(), // or createWebHashHistory() if you prefer hashes
  routes
})

export default router
