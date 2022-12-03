<template>
    <div>
        <h1>Life Cycle: {{name}}</h1>      
    </div>
</template>

<script>
export default {
    name: 'Life-cycle',
    data() {
        return {
            name: "Ricardo"
        }
    },
    created() {
        setTimeout(() => {
            this.name = "Petrucia"
        }, 1000);

    },
    mounted() {
        setTimeout(() => {
            this.name = "Amanda"
        }, 2000);
    }
}
</script>