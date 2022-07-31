export default {
    data: () => ({
        items: [],
        item: ''
    }),
    methods: {
        adicionarItem() {
            this.items.push(this.item)
            this.item = ''
        }
    }
}