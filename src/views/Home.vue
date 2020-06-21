<template>
  <div class="home">
    <navigation-bar v-on:buscar="filtrar"></navigation-bar>
    <div id="titulo">Provincias de la Republica Argentinas</div>

    <div class="row container-fluid">
      <div v-for="prov in this.provsData" :key="prov.abreviatura" class="col-3">
        <provincia :provParam="prov"></provincia>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/shared/Navigation.vue";
import Provincia from "@/components/Provincia.vue";

export default {
  name: "Home",
  components: {
    "navigation-bar": Navigation,
    provincia: Provincia,
  },
  mounted() {
    this.getProvincias();
  }, //mounted()

  data() {
    return {
      provsData: [],
    };
  }, //data()

  methods: {
    //acá se definen los métodos que pueden ser llamados en cualquier momento

    async getProvincias() {
      console.log();

      const res = await fetch("/lista_provincias.json");
      const resJson = await res.json();
      if (!window.location.href.includes("con-puerto")) {
        this.provsData = resJson;
      } else {
        for (let prov of resJson) {
          if (prov.tienePuerto === "Y") {
            this.provsData.push(prov);
          }
        }
      }
    },
    async filtrar(payload) {
      await this.getProvincias();
      if (payload.busqueda.length === 0) {
        console.log("Mostrar todo");
      } else {
        console.log("filtrar");
        let newProvsData = [];
        for (let prov of this.provsData) {
          const superficie = parseInt(prov.superficie);
          const buscado = parseInt(payload.busqueda);
          if (superficie >= buscado) {
          console.log(superficie);
            newProvsData.push(prov);
          }
        } //for
        this.provsData = newProvsData;
      }
    }, //filtrar
  }, //methods:
};
</script>

<style>
#titulo {
  /*(tipografía Verdana, tamaño 18px, en negritas, color verde)*/
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: green;
  text-align: center;
}
</style>
