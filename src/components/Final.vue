<template>
    <div class="container text-center">
        <h1 class="py-3">Puntuación Final: {{score}}/10</h1>
        <h2 v-if="score === 0">Ouch, na ps, cero :( Animo!</h2>
        <h2 v-if="score > 0 && score <= 5">Ouch, has acertado pocas, pero has aprendido mucho. Mide tus conocimientos nuevamente!</h2>
        <h2 v-if="score > 5 && score <= 7">Vaya, es un buen resultado. Pero aun puedes aprender más</h2>
        <h2 v-if="score > 7 && score < 10">Tu si que sabes!</h2>
        <h2 v-if="score === 10">Excelente, felicidades!</h2>
        <button class="my-5" @click="resetAll()">Volver</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations([
      'setScore',
      'setCount',
      'setCorrectBird'
    ]),
    resetAll () {
      this.setScore(0)
      this.setCount(1)
      this.setCorrectBird({})
      this.$emit('resetAll')
    }
  },
  computed: {
    ...mapState(['score'])
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
    h1{
        font-size: 32px;
    }
    h2{
        font-size: 21px;
    }
</style>
