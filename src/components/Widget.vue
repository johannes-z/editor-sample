 <template>
  <div>
    {{ str }}
    {{ checked }}
  </div>
</template>

<script>
export default {
  props: {
    str: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: true
    }
  }
}
</script>

 <style>
</style>
