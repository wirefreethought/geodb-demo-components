<template>
  <div style="display:flex; flex-direction:row; justify-content:start">
    <div class="form_element_container">
      <label>Sort By</label><br>
      <select
        v-model="sort1"
        class="form_field"
        @change="onSort1Changed"
      >
        <option value="">
          NONE
        </option>
        <option
          v-for="option in options"
          :key="option.value"
          v-bind="option"
          :value="option.value"
        >
          {{ option.title }}
        </option>
      </select>
    </div>
    <div
      v-if="multiLevel && sort1 !== ''"
      class="form_element_container"
    >
      <label>Then By</label><br>
      <select
        v-model="sort2"
        class="form_field"
        @change="onChanged"
      >
        <option value="">
          NONE
        </option>
        <option
          v-for="option in secondLevelOptions"
          :key="option.value"
          v-bind="option"
          :value="option.value"
        >
          {{ option.title }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SortBySelect',
  props: {
    multiLevel: {
      type: Boolean,
      default: true
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: ['sortChanged'],
  data () {
    return {
      sort1: '',
      sort2: ''
    }
  },
  computed: {
    secondLevelOptions () {
      // avoid v-if + v-for on same element by pre-filtering
      return this.options.filter(
        option => !this.isSort1Value(option.value)
      )
    }
  },
  methods: {
    getDirectionlessSortValue (value) {
      if (value.length > 0) {
        const firstChar = value.charAt(0)

        return firstChar === '+' || firstChar === '-'
          ? value.substring(1)
          : value
      }

      return value
    },
    isSort1Value (value) {
      return (
        this.getDirectionlessSortValue(this.sort1) ===
        this.getDirectionlessSortValue(value)
      )
    },
    onChanged () {
      let sort = this.sort1

      if (this.sort2 !== '') {
        sort += ',' + this.sort2
      }

      this.$emit('sortChanged', sort)
    },
    onSort1Changed () {
      this.sort2 = ''
      this.onChanged()
    }
  }
}
</script>
