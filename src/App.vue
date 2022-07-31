<template class="teste">
  <h1 class="titulo">Listas com VueJS</h1>
  <div class="principal">

    <div class="lista">
      <lista-filmes />
    </div>

    <div class="lista">
      <lista-pessoas />
    </div>

    <div class="lista">
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
* {
  font-family: 'Courier New', Courier, monospace;
}

.principal {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
}

.titulo {
  display: flex;
  justify-content: space-around;
  margin-top: 10%;
  margin-bottom: 10%;
}

.lista {
  background-color: #777;
  border-radius: 20px;
  padding: 10px;
}
</style>
