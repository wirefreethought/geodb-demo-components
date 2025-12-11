// src/shared/scripts/config.js
import * as GEO_DB from 'wft-geodb-js-client'

GEO_DB.ApiClient.instance.basePath = 'https://geodb-free-service.wirefreethought.com/v1'
GEO_DB.ApiClient.instance.defaultHeaders = {}

export default {
  GEO_DB
}
