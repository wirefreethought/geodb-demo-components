<template>
  <table :style="{ width, textAlign: 'left' }">
    <thead>
      <tr>
        <th
          v-for="(key, idx) in columns"
          :key="idx"
        >
          {{ capitalize(key) }}
        </th>
      </tr>
    </thead>
    <tfoot v-if="count > pageSize">
      <tr>
        <td :colspan="columns.length">
          <div style="display:flex; justify-content:space-between">
            <span v-if="!atFirstPage()">
              <a @click="onFirstPage">First</a> | <a @click="onPrevPage">Prev</a>
            </span>
            <span v-else>&nbsp;</span>

            <span>Page {{ currentPage + 1 }} of {{ roundUp(count / pageSize) }}</span>

            <span v-if="!atLastPage()">
              <a @click="onNextPage">Next</a> | <a @click="onLastPage">Last</a>
            </span>
            <span v-else>&nbsp;</span>
          </div>
        </td>
      </tr>
    </tfoot>
    <tbody>
      <tr
        v-for="(entry, idx) in data"
        :key="idx"
      >
        <td
          v-for="key in columns"
          :key="key"
        >
          {{ entry[key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    count: {
      type: Number,
      default: 0
    },
    columns: {
      type: Array,
      default: () => []
    },
    currentPage: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      default: () => []
    },
    pageSize: {
      type: Number,
      default: 10
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  emits: ['pageChanged'],
  computed: {
    lastPage () {
      return Math.ceil(this.count / this.pageSize) - 1
    }
  },
  methods: {
    capitalize (str) {
      if (!str) return ''
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    roundUp (value) {
      return Math.ceil(value)
    },
    atFirstPage () {
      return this.currentPage === 0
    },
    atLastPage () {
      return this.currentPage === this.lastPage
    },
    onFirstPage () {
      this.$emit('pageChanged', 0)
    },
    onLastPage () {
      this.$emit('pageChanged', this.lastPage)
    },
    onNextPage () {
      this.$emit('pageChanged', this.currentPage + 1)
    },
    onPrevPage () {
      this.$emit('pageChanged', this.currentPage - 1)
    }
  }
}
</script>

<style scoped>
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: darkcyan;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

a:hover {
  color: darkcyan;
}
</style>
