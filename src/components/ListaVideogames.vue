<template>
    <div>
        <h3>Lista de jogos</h3>
        <input type="text" placeholder="Nome do jogo" v-model="item">
        <br>
        <button type="button" @click="adicionarItem()">Adicionar</button>
            <button @click="removerItem()">Remover</button>
        <ul>
            <li v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>

    </div>
</template>

<script>
import ListaMixins from "@/mixins/ListaMixins"
import RemoverItemListaMixins from "@/mixins/RemoverItemListaMixins"
export default {
    name: 'ListaVideogames',
    mixins:[ListaMixins, RemoverItemListaMixins]
}
</script>