<template>
  <div>
    <div style="display:flex; flex-direction:row; justify-content:start">
      <div
        v-if="selectedIcon"
        :style="{ width: '75px', backgroundRepeat: 'no-repeat', backgroundPosition: 'left', backgroundSize: 'contain', backgroundImage: 'url(' + selectedIcon + ')' }"
      />
      <input
        v-model="keyword"
        class="form_field"
        :placeholder="placeholder"
        :style="{ width }"
        @input="onInput($event.target.value)"
        @keyup.esc="isOpen = false"
        @blur="isOpen = false"
        @keydown.down="moveDown"
        @keydown.up="moveUp"
        @keydown.enter="select"
      >
    </div>
    <ul
      v-show="isOpen"
      class="options-list"
      :style="{ width }"
    >
      <li
        v-for="(option, index) in options"
        :key="option.id ?? option.name ?? index"
        :class="{ highlighted: index === highlightedPosition }"
        @mouseenter="highlightedPosition = index"
        @mousedown="select"
      >
        <slot
          name="item"
          :title="option.name"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AutocompleteInput',
  props: {
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    selectedIcon: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: 'fit-content'
    }
  },
  emits: ['input', 'select'],
  data () {
    return {
      isOpen: false,
      highlightedPosition: 0,
      keyword: '',
      thumbImageUri: null
    }
  },
  watch: {
    keyword (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    onInput (value) {
      this.isOpen = !!value
      this.highlightedPosition = 0
    },
    moveDown () {
      if (!this.isOpen) {
        return
      }

      this.highlightedPosition =
        (this.highlightedPosition + 1) % this.options.length
    },
    moveUp () {
      if (!this.isOpen) {
        return
      }

      this.highlightedPosition =
        this.highlightedPosition - 1 < 0
          ? this.options.length - 1
          : this.highlightedPosition - 1
    },
    select () {
      const selectedOption = this.options[this.highlightedPosition]

      if (!selectedOption) {
        return
      }

      this.keyword = selectedOption.name
      this.isOpen = false
      this.$emit('select', selectedOption)
    }
  }
}
</script>

<style scoped>
p {
  margin: 0;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding-left: 0;
  padding-top: 16px;
}

li {
  display: inline-block;
  margin: 0;
  padding: 0;
}

ul.options-list {
  display: flex;
  flex-direction: column;
  margin-top: 0;
  padding-top: 0;
  border: 1px solid #dbdbdb;
  border-radius: 0 0 3px 3px;
  position: absolute;
  overflow: hidden;
}

ul.options-list li {
  width: 100%;
  flex-wrap: wrap;
  background: white;
  margin: 0;
  border-bottom: 1px solid #eee;
  color: #363636;
  padding: 8px;
  cursor: pointer;
}

ul.options-list li.highlighted {
  background: #f8f8f8
}
</style>
