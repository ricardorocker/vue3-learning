<template>
    <div>
        <h3>Esta é a descrição da pessoa: {{ name }}</h3>
        <Info />
        <Form />
    </div>
</template>

<script>
import Form from './form/Form.vue';
import Info from './Info.vue';

export default {
    name: "Pessoa",
    components: { Form, Info },
    data() {
        return {
            name:'Ricardo'
        }
    }
}
</script>