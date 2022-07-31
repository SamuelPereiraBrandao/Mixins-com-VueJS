export default {
    methods: {
        removerItem(){
            this.items.pop(this.item)
            this.item = ''
        }
    }
}