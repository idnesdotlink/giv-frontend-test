<template>
  <section>
    <b-field :label="attributes.label">
      <b-input
        @input="onInput()"
        v-model="inputValue"
        placeholder="your_email@your_domain"
        :type="attributes.subtype"
        required
      ></b-input>
    </b-field>
  </section>
</template>

<script>
export default {
  name: 'field-text-text',
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
  methods: {
    onInput () {
      this.$emit('psg', this.inputValue)
    }
  },
  data () {
    return {
      inputValue: ''
    }
  }
}
</script>
