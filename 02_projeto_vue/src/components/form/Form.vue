<template>
    <div>
        <h3>Meu formulário: </h3>
        <form>
            <Input />
            <Input />
            <Submit />
        </form>
    </div>
</template>

<script>
import Input from './Input.vue';
import Submit from './Submit.vue';

export default {
    name: "Form",
    components: { Input, Submit }
}
</script>