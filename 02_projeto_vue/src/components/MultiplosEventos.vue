<template>
  <div>
    <button
      @click="
        primeiroEvento(firstText, $event),
          segundoEvento(secondText, $event),
          terceiroEvento($event)
      "
    >
      Ativar mútiplos eventos
    </button>
    <p>{{ multiplos_eventos }}</p>
  </div>
</template>

<script>
export default {
  name: "MultiplosEventos",
  data() {
    return {
      multiplos_eventos: "",
      firstText: "Primeiro evento!",
      secondText: "Segundo evento!",
    };
  },
  methods: {
    primeiroEvento(firstText, e) {
      this.multiplos_eventos = firstText;
    },
    segundoEvento(secondText, e) {
      setTimeout(() => {
        this.multiplos_eventos = secondText;
      }, 1000);
    },
    terceiroEvento(e) {
      setTimeout(() => {
        this.multiplos_eventos = "";
      }, 2500);
    },
  },
};
</script>

<style scoped>
div {
  margin: 70px;
}
</style>