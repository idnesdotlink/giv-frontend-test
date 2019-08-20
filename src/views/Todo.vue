<template>
  <todo-viewer></todo-viewer>
</template>

<script>
export default {
  name: 'todo',
  components: {
    todoViewer: () => import(/* webpackChunkName: "todo-viewer" */ '../components/todo-viewer')
  }
}
</script>
