<template>
  <b-button
    type="is-primary"
    @click="clickMe"
  >{{ label }}</b-button>
</template>

<script>
export default {
  name: 'af-button',
  props: {
    label: {
      type: String,
      default: 'Button'
    }
  },
  methods: {
    clickMe () {
      console.log('clickme')
    }
  },
  data () {
    return {}
  }
}
</script>
