<template>
        <div class="container-clue">
            <h1>¿Conoces esta ave?</h1>
            <div v-if="correctBird.images" class="clue" :style="`background: url(${correctBird.images.main}) center/cover no-repeat`"></div>
            <div class="count">{{count}}/10</div>
        </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['count', 'correctBird'])
  }
}
</script>
<style scoped>
    .container-clue{
        width:100%;
        height:200px;
        position: relative;
        padding: 0 50px;
        background: #B5E48C;
        color: #184E77;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
    }
    .container-clue h1{
        font-size: 36px;
    }
    .container-clue .clue{
        width: 200px;
        height: 200px;
        position: absolute;
        bottom: -150px;
    }
</style>
