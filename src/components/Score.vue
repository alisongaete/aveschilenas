<template>
    <div>
        <span class="score-text">Puntuación: </span>
        <span class="score-point">{{score}}</span>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['score'])
  }
}
</script>

<style scoped>
    div{
        width: 100%;
        background: #B5E48C;
        color: #184E77;
        text-align: center;
    }
    div span{
        font-size: 24px;
    }
</style>
