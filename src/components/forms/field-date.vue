<template>
  <section>
    <div class="field">
      <label class="label">{{ attributes.label }}</label>
      <b-datepicker
        :show-week-number="showWeekNumber"
        placeholder="Click to select..."
        icon="calendar-today"
      ></b-datepicker>
    </div>
  </section>
</template>

<script>
export default {
  name: 'field-date',
  props: {
    attributes: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      showWeekNumber: false
    }
  }
}
</script>
