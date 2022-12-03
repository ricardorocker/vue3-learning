<template>
  <div>
    <h1>Olá Vue!</h1>    
    <Reutilizacao />
    <p>Meu nome é {{ name }} e moro em {{ city }}</p>
    <MultiplosEventos />
    <Reutilizacao />
    <Reutilizacao />
    <Reutilizacao />
  </div>
</template>

<script>
import MultiplosEventos from "./MultiplosEventos.vue";
import Reutilizacao from "./Reutilizacao.vue";

export default {
  components: { MultiplosEventos, Reutilizacao },
  name: "PrimeiroComponente",
  data() {
    return {
      name: "Ricardo",
      city: "João Pessoa",
    };
  },
};
</script>