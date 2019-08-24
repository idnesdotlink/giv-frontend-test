const fieldMixins = {
  data () {
    return {
      formValue: null
    }
  },
  methods: {
    onFormChange () {
      this.$emit('formchange', this.formValue)
    }
  }
}

export default fieldMixins
