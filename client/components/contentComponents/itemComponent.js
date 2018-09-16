Vue.component('items-card', {
    props : ["products" , "loginStatus"],
    template : 
    `
    <div class="row">
        <div class="col-md-4" id="boxItem" v-for="(product, idx) in products">
            <div class="card" style="width: 16rem;">
                <img class="card-img-top" src="https://via.placeholder.com/350x300" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <p class="card-text">{{ product.category.name }}</p>
                    <p class="card-text">Rp {{ product.price }}</p>
                    <a v-on:click="getDataItemToCart(idx)" v-if="loginStatus">Add To Chart</a>
                    <a data-toggle="modal" data-target="#signinModal" v-else>Login First</a>
                </div>
            </div>
        </div>
    </div>
    `,
    data: function(){
        return {
            carts : []
        }
    },
    methods: {
        getDataItemToCart: function (index) {
            
            let item = {
                idItem    : this.products[index]._id,
                name      : this.products[index].name,
                price     : this.products[index].price,
                totalItem : 1,
                totalPrice : Number(this.products[index].price)
            }
            
            let trigger = true

            for(let i = 0; i < this.carts.length; i++){
                if(this.carts[i].idItem == item.idItem){
                    this.carts[i].totalItem += 1
                    this.carts[i].totalPrice += item.totalPrice
                    trigger = false
                    
                }
            }

            if(trigger){
                this.carts.push(item)
            }

            this.$emit("dataProduct", this.carts)
        }
    },
    watch: {
        products: function(value){
            
        }
    }
})