<template>
  <div>
    <Header :isLogin="true"></Header>
    <PrimeiroComponente />
    <p class="paragrafo-pai">Teste em App.vue: {{ test }}</p>
    <LifeCycle />
    <Pessoa />
  </div>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import LifeCycle from './components/LifeCycle.vue';
import Pessoa from './components/Pessoa.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycle,
    Pessoa,
    Header
  },
  data() {
    return {
      test: 'Testando...'
    }
  }
}
</script>

<style>
  body {
    background-color: #333;
    color: white;
  }

  a {
    color: greenyellow;
  }

  .teste{
    background-color: gray;
  }
</style>