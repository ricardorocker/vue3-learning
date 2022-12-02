<template>
  <div>
    <PrimeiroComponente />
    <p>Teste em App.vue: {{ test }}</p>
  </div>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue';

export default {
  name: 'App',
  components: {
    PrimeiroComponente
  },
  data() {
    return {
      test: 'Testando...'
    }
  }
}
</script>