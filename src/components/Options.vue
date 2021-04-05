<template>
    <div class="options">
        <ButtonBird @birdSelected="selectedBird" :birdName="nameBird(option[1])"/>
        <ButtonBird @birdSelected="selectedBird" :birdName="nameBird(option[2])"/>
    </div>
</template>

<script>
import ButtonBird from '@/components/ButtonBird.vue'
import birdsService from '@/services/bird'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      option: {
        1: '',
        2: ''
      }
    }
  },
  components: {
    ButtonBird
  },
  created () {
    this.randomUid()
    this.randomCorrectBird()
  },
  methods: {
    ...mapMutations([
      'incrementScore',
      'setCorrectBird'
    ]),
    selectedBird (name) {
      if (name === this.correctBird.name.spanish) {
        this.incrementScore()
        this.$emit('isCorrect', true)
      } else {
        this.$emit('isCorrect', false)
      }
    },
    randomUid () {
      const random = Math.floor(Math.random() * (this.birds.length - 1))
      if (random === this.option[1]) {
        this.randomUid()
      } else if (this.option[1] === '') {
        this.option[1] = random
        this.randomUid()
      } else if (this.option[2] === '') {
        this.option[2] = random
      }
    },
    randomCorrectBird () {
      const random = Math.floor(Math.random() * 2) + 1.0
      const birdUid = this.birds[this.option[random]].uid
      birdsService.detail(birdUid).then((res) => {
        this.setCorrectBird(res)
      })
    },
    nameBird (index) {
      return this.birds[index].name.spanish
    }
  },
  computed: {
    ...mapState(['birds', 'correctBird'])
  }
}
</script>

<style scoped>
    .options{
        width:100%;
        margin: 180px 0;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center;
    }
</style>
