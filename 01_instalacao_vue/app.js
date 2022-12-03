const MyNameApp = {
    data() {
        return {
            name: "",
            input_language: ""
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();

            console.log(this.input_name);

            this.name = this.input_name;
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");