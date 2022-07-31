<template>
    <div>
        <h3>Lista de jogos</h3>
        <input type="text" placeholder="Nome do jogo" v-model="item">
        <button type="button" @click="adicionarItem()">Adicionar</button>
        <ul>
            <li v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>

    </div>
</template>

<script>
import ListaMixins from "@/mixins/ListaMixins"
export default {
    name: 'ListaVideogames',
    mixins:[ListaMixins]
}
</script>