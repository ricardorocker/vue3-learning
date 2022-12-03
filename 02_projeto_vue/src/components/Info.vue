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
        <p v-show="showEmail">Mande uma mensagem para: {{email}}</p>
    </div>
</template>

<script>
export default {
    name: 'Info',
    data() {
        return {
            isWorking: false,
            showEmail: true,
            email: 'ricardo.santos.rocker@gmail.com',
        }
    }
}
</script>