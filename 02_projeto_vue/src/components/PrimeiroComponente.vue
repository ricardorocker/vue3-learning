<template>
    <div>
        <h1>Olá Vue!</h1>
        <p>Meu nome é {{ name }} e moro em {{ city }}</p>
        <MultiplosEventos />
    </div>
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue'
export default {
  components: { MultiplosEventos },
    name: 'PrimeiroComponente',
    data() {
        return {
            name: 'Ricardo',
            city: 'João Pessoa'
        }
    }
}
</script>