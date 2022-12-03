<template>
  <div>
    <img :src="sourceImage" :alt="descriptionImage" style="max-width: 100px" />
    <MudarImagem @mudar-imagem="changeImage" />
  </div>
</template>

<script>
import MudarImagem from "./MudarImagem.vue";

export default {
  name: "Image",
  components: { MudarImagem },
  data() {
    return {
      sourceImage: "/img/tiny-img-01.png",
      descriptionImage: "Minha imagem!",
    };
  },
  methods: {
    changeImage() {
      if (this.sourceImage == "/img/tiny-img-01.png") {
        this.sourceImage = "/img/tiny-img-02.png";
      } else {
        this.sourceImage = "/img/tiny-img-01.png";
      }
    },
  },
};
</script>