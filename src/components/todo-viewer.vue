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

<style lang="scss">
.todo-viewer {
  h1 {
    font-weight: bold;
    text-align: center;
  }
  padding: 10px;
  pre {
    background-color: #282c34;
    color: white;
    padding: 10px;
    margin: 10px;
  }
  ul {
    list-style-type: disc;
    margin: 10px;
    padding: 10px;
  }
  ol {
    margin: 10px;
    padding: 10px;
  }
}
</style>
