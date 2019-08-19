<template>
  <section>
    <div class="field">
      <label class="label">{{ attributes.label }}</label>
      <b-checkbox
        v-for="item in items"
        :key="item.label"
        v-model="checkbox"
        :name="item.label"
        :native-value="item.label"
      >
        {{ item.label }}
      </b-checkbox>
    </div>
  </section>
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    attributes: {
      type: Object,
      default () {
        return []
      }
    },
    values: {
      type: Object,
      default () {
        return []
      }
    }
  },
  mounted () {
    this.items = this.values.values
    console.log(this.items)
  },
  data () {
    return {
      items: [],
      checkbox: null
    }
  }
}
</script>
