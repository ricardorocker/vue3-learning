<template>
    <div>
        <h1>Life Cycle: {{cycle}}</h1>      
    </div>
</template>

<script>
export default {
    name: 'Life-cycle',
    data() {
        return {
            cycle: "data"
        }
    },
    created() {
        setTimeout(() => {
            this.cycle = "created"
        }, 1000);
        this.testFunction();

    },
    mounted() {
        setTimeout(() => {
            this.cycle = "mounted"
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