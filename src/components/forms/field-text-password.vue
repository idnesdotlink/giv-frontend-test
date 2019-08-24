<script>
import fieldText from './field-text'
export default {
  name: 'field-text-password',
  extends: fieldText,
  props: {
    label: {
      default: 'Password'
    },
    placeholder: {
      default: 'password'
    },
    passwordReveal: {
      default: true
    },
    type: {
      default: 'password'
    }
  }
}
</script>

<style lang="scss">
.control.has-icons-left .icon,
.control.has-icons-right .icon {
  pointer-events: auto !important;
}
</style>
