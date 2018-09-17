Vue.component('items-category', {
    template:
    `
    <div class="list-group">
        <div class="list-group" id="list-tab" role="tablist">
            <a class="list-group-item list-group-item-action active" data-toggle="list" role="tab"
                aria-controls="home" id="barCategory" v-on:click="getAllItems()">All Categories</a>
            <a class="list-group-item list-group-item-action" data-toggle="list" role="tab"
                aria-controls="home" id="barCategory" v-on:click="getItemByCategory(category._id)"
                v-for="category in categories"> {{ category.name }}</a>
        </div>
    </div>
    `,
    data : function(){
        return {
            itemsByCat : [],
            categories: []
        }
    },
    created: function () {
        this.getAllCategoires()
    },
    methods: {
        getAllCategoires: function () {
            let self = this
            axios({
                    method: 'GET',
                    url: 'http://ecommerce.harlesbayuanggara.tech/categories'
                })
                .then(function (result) {
                    self.categories = result.data.categories
                })
        },
        getItemByCategory: function (categoryId) {
            let self = this
            axios({
                    method: 'GET',
                    url: `http://ecommerce.harlesbayuanggara.tech/items/categories/${categoryId}`
                })
                .then(function (result) {
                    self.itemsByCat = result.data.items
                    self.$emit("senditems", self.itemsByCat)
                })
        },
        getAllItems: function(){
            let self = this
            axios({
                method: "GET",
                url: 'http://ecommerce.harlesbayuanggara.tech/items'
            })
            .then(function (result) {
                self.itemsByCat = result.data.items
                self.$emit("senditems", self.itemsByCat)
            })
        },
    }
   

})