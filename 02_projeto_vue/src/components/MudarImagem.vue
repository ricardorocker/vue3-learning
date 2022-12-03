<template>
    <div>
        <button @click="$emit('mudar-imagem')">Mudar imagem</button>
    </div>
</template>

<script>
export default {
    name: 'MudarImagem',
    emits: ['mudar-imagem']
}
</script>