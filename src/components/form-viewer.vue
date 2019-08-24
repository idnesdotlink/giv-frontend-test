<template>
  <div class="form-group">
    <component
      v-for="field in schema"
      @psg="onpsg($event, field.name)"
      @formchange="onFormChange($event, field.name)"
      :key="fieldToKey(field)"
      :is="fieldToIs(field)"
      :class="fieldToClass(field)"
      :attributes="fieldToAttributes(field)"
      :values="fieldToValues(field)"
    ></component>
  </div>
</template>

<script>
import isNil from 'lodash.isnil'
export default {
  name: 'form-viewer',
  props: {
    schema: Array,
    default () {
      return []
    }
  },
  components: {
    'field-text-text': () => import(/* webpackChunkName: "form-field" */ '@/components/forms/field-text-text.vue'),
    'field-text-email': () => import(/* webpackChunkName: "form-field" */ '@/components/forms/field-text-email.vue'),
    'field-text-password': () => import(/* webpackChunkName: "form-field" */ '@/components/forms/field-text-password.vue'),
    'field-date': () => import(/* webpackChunkName: "form-field" */ '@/components/forms/field-date.vue'),
    'field-button-submit': () => import(/* webpackChunkName: "form-field" */ '@/components/forms/field-button-submit.vue'),
    'field-radio-group': () => import(/* webpackChunkName: "form-field" */ '@/components/forms/field-radio-group.vue'),
    'field-select': () => import(/* webpackChunkName: "form-field" */ '@/components/forms/field-select.vue')
  },
  mounted () {},
  methods: {
    onpsg (v, n) {
      this.w[n] = v
      console.log({ output: this.w })
    },
    onFormChange (v) {
      console.log(v)
    },
    fieldToIs (field) {
      const type = field.type
      const subType = isNil(field.subtype) ? '' : `-${field.subtype}`
      return `field-${type}${subType}`
    },
    fieldToAttributes (field) {
      return field
    },
    fieldToClass (field) {
      return field.className
    },
    fieldToKey (field) {
      return field.name
    },
    fieldToValues (field) {
      return field
    }
  },
  data () {
    return {
      w: {}
    }
  }
}
</script>

<style lang="scss">
.form-group {
  padding: 20px;
}
.form-group .form-control .field .label {
  text-align: left;
}
.form-group > section {
  padding: 10px;
}
</style>
