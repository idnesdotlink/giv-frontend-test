<template>
  <section>
    <b-button
      type="is-primary"
      @click="clickMe"
    >
      {{ attributes.label }}
    </b-button>
  </section>
</template>

<script>
export default {
  name: 'field-button-submit',
  props: {
    label: {
      type: String,
      default: 'Button'
    },
    attributes: {
      type: Object,
      default: null
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
