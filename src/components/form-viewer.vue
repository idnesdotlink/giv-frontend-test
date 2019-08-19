<template>
  <div class="form-group">
    <component
      v-for="field in schema"
      @psg="onpsg($event, field.name)"
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
    'field-text-text': () => import(/* webpackChunkName: "field-text-text" */ '@/components/forms/field-text-text.vue'),
    'field-text-email': () => import(/* webpackChunkName: "field-text-email" */ '@/components/forms/field-text-email.vue'),
    'field-text-password': () => import(/* webpackChunkName: "field-text-password" */ '@/components/forms/field-text-password.vue'),
    'field-date': () => import(/* webpackChunkName: "field-date" */ '@/components/forms/field-date.vue'),
    'field-button-submit': () => import(/* webpackChunkName: "field-button-submit" */ '@/components/forms/field-button-submit.vue'),
    'field-radio-group': () => import(/* webpackChunkName: "field-radio-group" */ '@/components/forms/field-radio-group.vue'),
    'field-select': () => import(/* webpackChunkName: "field-select" */ '@/components/forms/field-select.vue')
  },
  mounted () {
    console.log(this.formSchema)
    // console.log(this.formSchema)
    // this.forms = this.formSchema
    // Vue.nextTick(() => {
    //   this.forms = this.formSchema
    // })
  },
  methods: {
    onpsg (v, n) {
      this.w[n] = v
      console.log(this.w)
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
