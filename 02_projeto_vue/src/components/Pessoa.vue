<template>
  <div>
    <h3>Esta é a descrição da pessoa: {{ name }}</h3>
    <Info :isWorking="false" textEmail="Mande uma mensagem para: "
    :backLanguages="backLanguages" />
    <Form></Form>
  </div>
</template>

<script>
import Form from "./form/Form.vue";
import Info from "./Info.vue";

export default {
  name: "Pessoa",
  components: { Form, Info },
  data() {
    return {
      name: "Ricardo",
      backLanguages: ["Python", "Java", "PHP"],
    };
  },
};
</script>