<template>
  <div style="display: flex; flex-direction: row">

    <div style="flex-basis: 33%">
      <lista-filmes />
    </div>

    <div style="flex-basis: 33%">
      <lista-pessoas />
    </div>

    <div style="flex-basis: 33%">
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

<style>
</style>
