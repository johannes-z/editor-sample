<template>
  <div>
    <div v-for="(prop, index) in props"
         :key="index">
      <Property :name="index"
                :type="prop.editorType || prop.type"
                :value="value[index]"
                @input="update"
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
    value: {
      type: Object,
      required: true
    },
    props: {
      type: Object,
      required: true
    }
  },
  methods: {
    update (name, value) {
      let obj = {
        ...this.value
      }
      obj[name] = value
      this.$emit('input', obj)
    }
  }
}
</script>

<style>
</style>
