<template>
  <div class="home">
    <Spinner v-if="isLoading"/>
    <section v-if="!isLoading && !end">
      <Score/>
      <BirdClue/>
      <div class="container">
        <Options @isCorrect="openModalInfo" :key="count"/>
      </div>
    </section>
    <section v-if="!isLoading && end">
      <Final @resetAll="reset"/>
    </section>
    <Modal @start="closeModal()" @next="closeModal()" @end="endGame()" :modalShow="modalShow" :isCorrect="resultRound"/>
  </div>
</template>

<script>
import Score from '@/components/Score.vue'
import BirdClue from '@/components/BirdClue.vue'
import Options from '@/components/Options.vue'
import Spinner from '@/components/Spinner.vue'
import Final from '@/components/Final.vue'
import Modal from '@/components/Modal.vue'
import birdsService from '@/services/bird'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Home',
  components: {
    Score,
    BirdClue,
    Options,
    Spinner,
    Final,
    Modal
  },
  data () {
    return {
      isLoading: true,
      modalShow: true,
      resultRound: null,
      end: false
    }
  },
  created () {
    this.allBirds()
  },
  methods: {
    ...mapMutations([
      'setBirds'
    ]),
    allBirds () {
      this.isLoading = true
      birdsService.all().then((res) => {
        this.setBirds(Object.values(res))
        this.isLoading = false
      })
    },
    closeModal () {
      this.modalShow = false
    },
    openModalInfo (isCorrect) {
      this.resultRound = isCorrect
      this.modalShow = true
    },
    endGame () {
      this.end = true
      this.modalShow = false
    },
    reset () {
      this.end = false
    }
  },
  computed: {
    ...mapState(['count'])
  }
}
</script>
