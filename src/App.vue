<template>
  <div id="app">
    <h2>Editor</h2>
    <Editor :props="layout[0].widget.component.props"
            v-model="layout[0].widget.props" />

    <hr>

    <h2>Widgets</h2>
    <div v-for="(item, index) in layout"
         :key="index">
      <component :is="item.widget.component"
                 v-bind="item.widget.props" />
    </div>
  </div>
</template>

<script>
import Editor from './components/Editor.vue'
import Widget from './components/Widget.vue'

export default {
  name: 'app',
  components: {
    Editor,
    Widget
  },
  data () {
    return {
      layout: [
        {
          widget: {
            name: 'Widget',
            component: Widget,
            props: {
              str: 'Test',
              checked: true
            }
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
}
</style>
