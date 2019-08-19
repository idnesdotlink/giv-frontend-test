<template>
  <section>
    <div class="field">
      <label class="label">{{ attributes.label }}</label>
      <select2
        :options="inputOptions"
        v-model="selected"
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
export default {
  name: 'field-select',
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
  mounted () {},
  components: {
    select2
  },
  data () {
    return {
      value: 5,
      selected: 2,
      inputOptions: [{ id: 1, text: 'Male' }, { id: 2, text: 'Female' }]
    }
  }
}
</script>
