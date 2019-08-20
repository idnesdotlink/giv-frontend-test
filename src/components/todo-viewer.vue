<template>
  <div class="todo-viewer">
    <h1>To Do</h1>
    <ol v-if="list.length > 0">
      <li
        v-for="item in list"
        :key="item.id"
      >
        {{ item.task }} <span
          style="color: green;"
          v-if="item.done"
        >{{ item.done ? '&#10004;' : '' }}</span>
      </li>
    </ol>
  </div>
</template>
<script>
import lodashForeach from 'lodash.foreach'
export default {
  name: 'todo-viewer',
  components: {},
  mounted () {
    const loadTodo = async () => {
      const todojson = (await import('@/assets/todo.json')).default
      lodashForeach(todojson, (item, index) => {
        this.list.push({
          'id': index + 1,
          'task': item.task,
          'done': item.done
        })
      })
    }
    loadTodo()
  },
  data () {
    return {
      list: []
    }
  }
}
</script>
