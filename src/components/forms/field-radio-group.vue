<template>
  <section>
    <label class="label">{{ attributes.label }}</label>
    <div
      class="field"
      v-for="item in items"
      :key="item.label"
    >
      <b-radio
        @input="onFormChange()"
        v-model="formValue"
        :name="item.label"
        :native-value="item.label"
      >
        {{ item.label }}
      </b-radio>
    </div>
  </section>
</template>

<script>
import fieldMixins from './field.mixins'
export default {
  name: 'field-radio-group',
  mixins: [
    fieldMixins
  ],
  props: {
    attributes: {
      type: Object,
      default () {
        return null
      }
    },
    values: {
      type: Object,
      default () {
        return null
      }
    }
  },
  mounted () {
    this.items = this.values.values
  },
  data () {
    return {
      items: [],
      radio: null
    }
  }
}
</script>
