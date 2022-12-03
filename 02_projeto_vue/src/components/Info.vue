<template>
    <div>
        <p v-if="isWorking">Estou trabalhando no momento</p>
        <p v-else>Estou em busca de novas oportunidades!</p>
        <p>Utilizo as seguintes tecnologias:</p>
        <ul>
            <li>Javascript</li>
            <li>PHP</li>
            <li>Python</li>
        </ul>
        <p v-show="showEmail">Mande uma mensagem para: {{ email }}</p>
        <p>Para acessar meu portfólio basta <a v-bind:href="urlPortfolio" target="blank">clicar aqui</a></p>
        <Image />
    </div>
</template>

<script>
import Image from './Image.vue'
export default {
    components: { Image },
    name: 'Info',
    data() {
        return {
            isWorking: false,
            showEmail: true,
            email: 'ricardo.santos.rocker@gmail.com',
            urlPortfolio: 'http://www.google.com.br/'
        }
    }
}
</script>