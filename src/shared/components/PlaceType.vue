<template>
  <div class="form_element_container">
    <label>Type</label><br>
    <select
      v-model="selectedType"
      class="form_field"
      size="1"
      @change="onChanged"
    >
      <option
        v-for="option in typeOptions"
        :key="option.value"
        v-bind="option"
        :value="option.value"
      >
        {{ option.title }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'PlaceTypeSelect',
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: ['placeTypeChanged'],
  data () {
    return {
      selectedType: null,
      typeOptions: [
        { value: 'ADM2', title: 'Admin Division' },
        { value: 'CITY', title: 'City' },
        { value: 'ISLAND', title: 'Island' }
      ]
    }
  },
  methods: {
    onChanged () {
      this.$emit('placeTypeChanged', this.selectedType)
    }
  }
}
</script>
