<template>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Contato</a></li>
        <li v-show="isLogin"><a href="#">Meu Perfil</a></li>
    </ul>
</template>

<script>
export default {
    name: 'Header',
    props: {
        isLogin: true
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    display: flex;
    background-color: gray;
}

li {
    margin-right: 10px;
}

a {
    color: #ddd;
    text-decoration: none;
    transition: .5s;
}

a:hover {
    color: aquamarine
}
</style>