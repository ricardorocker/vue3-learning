<template>
  <div>
    <PrimeiroComponente />
    <p>Teste em App.vue: {{ test }}</p>
    <LifeCycle />
  </div>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import LifeCycle from './components/LifeCycle.vue';

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycle
  },
  data() {
    return {
      test: 'Testando...'
    }
  }
}
</script>