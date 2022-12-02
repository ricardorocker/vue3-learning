const MyNameApp = {
    data() {
        return {
            language: "VueJs 3",
            name: "Ricardo"
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");