<template>
  <section>
    <b-field :label="attributes.label">
      <b-input
        placeholder="Your password"
        password-reveal
        required
        v-model="inputValue"
        type="password"
      ></b-input>
    </b-field>
  </section>
</template>

<script>
export default {
  name: 'field-text-password',
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    attributes: {
      type: Object,
      default: null
    }
  },
  mounted () {
    console.log(this.attributes)
  },
  data () {
    return {
      inputValue: ''
    }
  }
}
</script>

<style lang="scss">
.control.has-icons-left .icon,
.control.has-icons-right .icon {
  pointer-events: auto !important;
}
</style>
