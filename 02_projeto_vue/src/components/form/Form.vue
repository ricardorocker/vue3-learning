<template>
  <div>
    <h3>Meu formulário:</h3>
    <form @submit="handleSubmit($event)">
      <!-- 
            <Input />
            <Input />
        -->
      <input type="text" v-model="name" />
      <input type="text" v-model="email" />
      <Submit />
    </form>
  </div>
</template>

<script>
import Input from "./Input.vue";
import Submit from "./Submit.vue";

export default {
  name: "Form",
  components: { Input, Submit },
  data() {
    return {
        name: '',
        email: ''
    }
  },
  methods: {
    handleSubmit(e) {
        e.preventDefault();

        const name = this.name;
        const email = this.email

        console.log(`O nome é: "${name}" e o email é: "${email}"`);

        // Ajax

        // Inserir no banco de dados
    }
  }
};
</script>

<style scoped>
div {
  margin-bottom: 200px;
}

input {
  display: flex;
  margin-bottom: 10px;
}
</style>