<template>
  <div>
    <div v-for="(prop, index) in item.widget.component.props"
         :key="index">
      <Property :type="prop.editorType || prop.type"
                :value.sync="item.widget.props[index]"
                :default-value="prop.default" />
      <br>
    </div>
  </div>
</template>

<script>
import Property from './Property.vue'
export default {
  components: { Property },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      props: {}
    }
  },
  mounted () {
    let widget = this.item.widget
    let propsData = widget.props
    let props = widget.component.props
    for (const key in props) {
      if (!props.hasOwnProperty(key)) continue
      const element = props[key]
      this.$set(this.props, key, {
        ...element,
        value: propsData[key]
      })
    }
  }
}
</script>

<style>
</style>
