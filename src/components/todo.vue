<template>
  <ul>
    <li
      v-for="item in list"
      :key="item.id"
    >
      {{ item.id }}. {{ item.task }} {{ item.done ? '&#10004;' : '' }}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'todo',
  components: {},
  data () {
    return {
      list: [
        { id: 1, task: 'Use vue js to render it as html', done: true },
        { id: 2, task: 'Must be in Vue component based', done: true },
        { id: 3, task: 'Put all value of fields in one json object', done: false },
        { id: 4, task: 'Using dynamic Component', done: true },
        { id: 5, task: 'Using Slot', done: false },
        { id: 6, task: 'Using Ref', done: false },
        { id: 7, task: 'Using Props', done: true },
        { id: 7, task: 'Combining it with other plugins like select2, datepicker', done: true },
        { id: 9, task: 'Beautify the UI', done: true },
        { id: 10, task: 'Able to add extra field', done: false }
      ]
    }
  }
}
</script>
