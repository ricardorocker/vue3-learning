<template>
    <div>
        <h1>Olá Vue!</h1>
        <p>Meu nome é {{ name }} e moro em {{ city }}</p>
    </div>
</template>

<script>
export default {
    name: 'PrimeiroComponente',
    data() {
        return {
            name: 'Ricardo',
            city: 'João Pessoa'
        }
    }
}
</script>