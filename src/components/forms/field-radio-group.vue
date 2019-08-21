<template>
  <section>
    <div class="field">
      <label class="label">{{ attributes.label }}</label>
      <b-radio
        v-for="item in items"
        :key="item.label"
        v-model="radio"
        :name="item.label"
        :native-value="item.label"
      >
        {{ item.label }}
      </b-radio>
    </div>
  </section>
</template>

<script>
export default {
  name: 'field-radio-group',
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
