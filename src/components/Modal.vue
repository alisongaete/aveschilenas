<template>
    <div>
        <b-modal v-model="modalShow"
          hide-footer
          no-close-on-esc
          no-close-on-backdrop
          hide-header-close
          :title="isCorrect != null ? (isCorrect ? 'Correcto!' : 'Ouch!') : 'Bienvenido!'"
          :header-bg-variant="isCorrect != null ? (isCorrect ? 'success' : 'danger') : ''"
          :header-text-variant="isCorrect != null ? 'light' : 'dark'"
        >
            <p v-if="isCorrect == null">En este minijuego tendrás que adivinar el nombre del ave que se muestra en la imagen. La puntuación máxima a lograr es de 10. Que tengas exito.</p>
            <div v-if="isCorrect != null">
              <h1 v-if="correctBird.name">{{correctBird.name.spanish}} <small>{{correctBird.name.latin}}</small></h1>
              <p class="my-4" v-if="correctBird.habitat">{{correctBird.habitat}}</p>
              <audio controls v-if="correctBird.audio && correctBird.audio.file">
                <source :src="correctBird.audio.file" type="audio/wav">
                Your browser does not support the audio element.
              </audio>
            </div>
            <b-button class="mt-3" variant="outline-success" block @click="isStart ? (count === 10 ? end() : next()) : start()">{{isStart ? (count === 10 ? 'Finalizar' : 'Siguiente') : 'Empezar'}}</b-button>
        </b-modal>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  props: ['modalShow', 'isCorrect'],

  data () {
    return {
      isStart: false
    }
  },
  methods: {
    ...mapMutations([
      'incrementCount'
    ]),
    start () {
      this.isStart = true
      this.$emit('start')
    },
    next () {
      this.incrementCount()
      this.$emit('next')
    },
    end () {
      this.$emit('end')
    }
  },
  computed: {
    ...mapState(['count', 'correctBird'])
  }
}
</script>

<style scoped>
  h1{
    font-size: 24px;
  }
  small{
    font-size: 14px;
  }
</style>
