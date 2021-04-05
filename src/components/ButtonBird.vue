<template>
    <button @click="selectBird()">
        {{birdName}}
    </button>
</template>

<script>
export default {
  props: {
    birdName: {
      type: String,
      required: true
    }
  },
  methods: {
    selectBird () {
      this.$emit('birdSelected', this.birdName)
    }
  }
}
</script>
<style scoped>
    button{
        min-width:250px;
        height: 40px;
        background: #e6e6e6;
        color: #184E77;
        text-align: center;
        border: 1px solid #184E77;
        font-size: 14px;
    }
    button:hover{
        background: #184E77;
        color: #e6e6e6;
    }
</style>
