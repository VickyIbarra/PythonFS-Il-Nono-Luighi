/* Para hacer las tarjetas con el JSON */

const { createApp, ref } = Vue;

createApp({
  data() {
    return {
      url: "/js/productos.json",
      datos: [],
      error: false,
    }
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(
          data => {
            console.log(data)
            this.datos = data
          }
        )
        .catch(error => {
          console.log("Error:" + error)
          this.error = true
        });
    }
  },
  created() {  // created() se ejecuta cada vez que se crea el objeto VUE
    this.fetchData(this.url)
  }
}).mount('#app')