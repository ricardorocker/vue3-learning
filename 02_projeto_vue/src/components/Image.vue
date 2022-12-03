<template>
  <div>
    <img :src="sourceImage" :alt="descriptionImage" style="max-width: 100px" />
    <Reutilizacao />
  </div>
</template>

<script>
import Reutilizacao from "./Reutilizacao.vue";

export default {
  name: "Image",
  data() {
    return {
      sourceImage: "/img/gorro.png",
      descriptionImage: "Minha imagem!",
    };
  },
  components: { Reutilizacao },
};
</script>