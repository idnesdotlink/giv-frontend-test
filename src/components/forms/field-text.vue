<template>
  <section>
    <b-field :label="label">
      <b-input
        v-model="formValue"
        @input="onFormChange()"
        :placeholder="placeholder"
        :required="required"
        :password-reveal="passwordReveal"
        :type="type"
      ></b-input>
    </b-field>
  </section>
</template>

<script>
import fieldMixins from './field.mixins'
export default {
  name: 'field-text',
  mixins: [
    fieldMixins
  ],
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
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    passwordReveal: {
      type: Boolean,
      default: false
    },
    attributes: {
      type: Object,
      default: null
    }
  }
}
</script>
