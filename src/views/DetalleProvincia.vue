<template>
  <div class="">
    <navigation-bar></navigation-bar>

    <table style="width:500px;" class="table table-bordered">
      <tr>
        <th>Provincia:</th>
        <td>{{ provEncontrada.provincia }}</td>
      </tr>
      <tr>
        <th>Abreviatura:</th>
        <td>{{ provEncontrada.abreviatura }}</td>
      </tr>
      <tr>
        <th>Capital:</th>
        <td>{{ provEncontrada.capital }}</td>
      </tr>
      <tr>
        <th>Bandera:</th>
        <td>
          <img
            :src="'/img/' + provEncontrada.bandera"
            class="bandera"
            alt="imagen"
          />
        </td>
      </tr>
      <tr>
        <th>Fecha Autonomía:</th>
        <td>{{ provEncontrada.fechaAutonomia }}</td>
      </tr>
      <tr>
        <th>Población:</th>
        <td>{{ provEncontrada.poblacion }}</td>
      </tr>
      <tr>
        <th>Superficie:</th>
        <td>{{ provEncontrada.superficie }}</td>
      </tr>
      <tr>
        <th>N° Departamentos:</th>
        <td>{{ provEncontrada.nroDepartamentos }}</td>
      </tr>
      <tr>
        <th>Tiene Puerto</th>
        <td>{{ provEncontrada.tienePuerto === "Y" ? "SI" : "NO" }}</td>
      </tr>

      <tr>
        <td>
          <a href="javascript:history.go(-1)" class="btn btn-secondary">VOLVER</a>
        </td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
import Navigation from "@/components/shared/Navigation.vue";
export default {
  name: "DetalleProvincia",
  props: [],
  components: {
    "navigation-bar": Navigation,
  }, //components

  mounted() {
    this.getProvXAbrev();
  }, //mounted()

  data() {
    return {
      provEncontrada: [],
    };
  }, //data()

  methods: {
    async getProvXAbrev() {
      const parametroAbrev = this.$route.params.abrev;
      const res = await fetch("/lista_provincias.json");
      const resJson = await res.json();
      this.provEncontrada = await resJson.find(
        (prov) => prov.abreviatura === parametroAbrev
      );
    },
  }, //methods:
}; //export default
</script>

<style>
/*Los estilos en CSS (o LESS o lo que sea)*/
</style>
