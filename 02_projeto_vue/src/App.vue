<template>
  <div>
    <PrimeiroComponente />
    <p>Teste em App.vue: {{ test }}</p>
    <LifeCycle />
    <Pessoa />
  </div>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import LifeCycle from './components/LifeCycle.vue';
import Pessoa from './components/Pessoa.vue';

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycle,
    Pessoa
  },
  data() {
    return {
      test: 'Testando...'
    }
  }
}
</script>