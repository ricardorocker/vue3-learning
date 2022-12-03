<template>
    <div>
        <p v-if="isWorking">Estou trabalhando no momento</p>
        <p v-else>Estou em busca de novas oportunidades!</p>
        <p>Utilizo as seguintes tecnologias Front-End:</p>
        <ul>
            <li v-for="language in frontLanguages" v-bind:key="language.id">{{ language.name }}</li>
        </ul>
        <p>Utilizo as seguintes tecnologias Back-End:</p>
        <ul>
            <li v-for="(language, index) in backLanguages" :key="index">{{ language }}</li>
        </ul>
        <p v-show="showEmail">Mande uma mensagem para: {{ email }}</p>
        <button @click="handleViewEmail">{{ textEmailButton }}</button>
        <p class="teste">Para acessar meu portfólio basta <a v-bind:href="urlPortfolio" target="blank">clicar aqui</a>
        </p>
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
            urlPortfolio: 'http://www.google.com.br/',
            textEmailButton: 'Ocultar e-mail',
            frontLanguages: [
                {
                    id: 1,
                    name: 'Javascript'
                },
                {
                    id: 2,
                    name: 'Angular'
                },
                {
                    id: 3,
                    name: 'React'
                }
            ],
            backLanguages: ['Python', 'Java', 'PHP']
        }
    },
    methods: {
        handleViewEmail() {
            this.showEmail = !this.showEmail

            !this.showEmail ? this.textEmailButton = 'Mostrar email' : this.textEmailButton = 'Ocultar email'
        }
    }
}
</script>

<style>
.paragrafo-pai {
    color: chocolate;
}
</style>