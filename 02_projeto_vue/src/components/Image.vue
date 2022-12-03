<template>
    <img :src="sourceImage" :alt="descriptionImage" style="max-width:100px">
</template>

<script>
export default {
    name: 'Image',
    data() {
        return {
            sourceImage: '/img/gorro.png',
            descriptionImage: 'Minha imagem!'
        }
    }
}
</script>