export default {
    data: () => ({
        items: [],
        item: ''
    }),
    methods: {
        adicionarItem() {
            if (this.item == '') {
                alert('Insira um valor!')
            } else {
                this.items.push(this.item)
                this.item = ''
            }

        }
    }
}