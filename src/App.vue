<template>
  <div class="App">
    <Header/>
      <router-view/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/layout/Footer.vue'
import Header from '@/components/layout/Header.vue'
export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}
</script>
