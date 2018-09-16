Vue.component('contents', {
    props : ["loginStatus"],
    components : {
        "items-cart" : itemsCart
    },
    template:
    `
    <div class="container">
        <div id="contentItem">
            <div class="row">

                <div class="col-3">
                    <items-category @senditems="items=$event" ></items-category>
                </div>
            
                <div class="col-9">
                    <items-card v-bind:login-status="loginStatus" v-bind:products="items" @dataProduct="carts=$event"></items-card>
                </div>

                <items-cart v-bind:products="carts"></items-cart>

            </div>
        </div>
    </div>
    `,
    data: function(){
        return {
            carts: [],
            items: [],
        }
    },
    created: function () {
        this.getAllItems()
    },
    methods: {
        getAllItems: function () {
            let self = this
            axios({
                method: "GET",
                url: 'http://localhost:5000/items'
            })
            .then(function (result) {
                self.items = result.data.items
            })
        },
    },
    // v-for="(item, index) in items" :products="items" :product="item" :idx="index"  :key="index"

})


