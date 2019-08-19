<template>
  <section>
    <b-field :label="attributes.label">
      <b-input
        v-model="inputValue"
        @input="wow()"
        placeholder="Your Name"
        required
        :type="type"
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
  methods: {
    wow () {
      this.$emit('psg', this.inputValue)
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
