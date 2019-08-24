<template>
  <section>
    <div class="field">
      <label class="label">{{ attributes.label }}</label>
      <select2
        @input="onFormChange()"
        :options="inputOptions"
        v-model="formValue"
      >
        <option
          disabled
          value="0"
        >Select one</option>
      </select2>
    </div>
  </section>
</template>

<script>
import select2 from '@/components/select2.vue'
import fieldMixins from './field.mixins'
export default {
  name: 'field-select',
  mixins: [
    fieldMixins
  ],
  props: {
    options: {
      type: Array,
      default () {
        return [
          {
            id: 1,
            text: 'satu'
          }
        ]
      }
    },
    attributes: {
      type: Object,
      default: null
    }
  },
  beforeMount () {
    this.loadValues()
  },
  mounted () {

  },
  components: {
    select2
  },
  methods: {
    onChange () {
      this.$emit('psg', this.selected)
    },
    loadValues () {
      console.log(this.attributes.values)
      for (let v = 0; v < this.attributes.values.length; v++) {
        const val = this.attributes.values[v]
        this.inputOptions.push({
          id: v + 1,
          text: val.label
        })
      }
    }
  },
  data () {
    return {
      value: 5,
      selected: 2,
      inputOptions: []
    }
  }
}
</script>
