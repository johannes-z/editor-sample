<template>
  <div>

    <component ref="component"
               :is="component"
               :value="value != null ? value : defaultValue" />

    Type: {{ type }}<br>
    Value: {{ value }}<br>
    Default: {{ defaultValue }}
  </div>
</template>

<script>
export default {
  props: {
    type: null,
    value: null,
    defaultValue: null
  },
  methods: {
    update (event) {
      this.$emit('update:value', event)
    }
  },
  mounted () {
    this.$refs.component.$on('input', value => {
      console.log(value)
      this.update(value)
    })
  },
  computed: {
    component () {
      switch (this.type) {
        case String:
          return 'VTextField'
        case Boolean:
          return 'VCheckbox'
      }
      return null
    }
  }
}
</script>

<style>
</style>
