<script>
import fieldText from './field-text'
export default {
  name: 'field-text-text',
  extends: fieldText,
  props: {
    label:  {
      default: 'Email'
    },
    placeholder: {
      default: 'your_email@your_domain'
    }
  }
}
</script>
