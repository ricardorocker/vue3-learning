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
            name: "Amanda"
        }
    },
    created() {
        setTimeout(() => {
            this.name = "Petrucia"
        }, 1000);
        this.testFunction();

    },
    mounted() {
        setTimeout(() => {
            this.name = "Ricardo"
        }, 2000);
        this.testFunction();
    },
    methods: {
        testFunction() {
            console.log("Executed!");
        }
    }
}
</script>