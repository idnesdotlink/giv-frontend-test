
<template>
  <form-viewer :schema="schema"></form-viewer>
</template>

<script>
import formViewer from '@/components/form-viewer.vue'

export default {
  name: 'formView',
  components: {
    formViewer
  },
  mounted () {
    this.loadSchema()
  },
  methods: {
    loadSchema () {
      const md = async function () {
        let schemajson = (await import('@/assets/schema.example.json')).default
        return schemajson
      }
      md().then(schemajson => {
        this.schema = schemajson
      })
    }
  },
  data () {
    return {
      schema: []
    }
  }
}
</script>
