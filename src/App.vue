<template>
  <div class="principal">

    <div>
      <lista-filmes />
    </div>

    <div>
      <lista-pessoas />
    </div>

    <div>
      <lista-videogames />
    </div>

  </div>
</template>

<script>
import ListaVideogames from '@/components/ListaVideogames.vue'
import ListaPessoas from "@/components/ListaPessoas.vue"
import ListaFilmes from "@/components/ListaFilmes.vue"
export default {

  name: 'App',
  components: {
    ListaVideogames,
    ListaPessoas,
    ListaFilmes
  }
}
</script>
<style scoped>
.principal {
  display: flex;
  justify-content:space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
