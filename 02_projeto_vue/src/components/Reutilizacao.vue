<template>
    <div>
        <button @click="active">Clique aqui</button>
        <span v-show="isActive">Reutilização ativado!</span>
    </div>
</template>

<script>
export default {
    name: 'Reutilizacao',
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        active() {
            this.isActive = !this.isActive;
        }
    }
}
</script>

<style scoped>
span {
    margin-left: 5px;
}
</style>