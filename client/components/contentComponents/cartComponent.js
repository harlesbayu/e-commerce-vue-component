const itemsCart = {
    props: ["products"],
    template:
    `
    <!-- Modal Checkout-->
    <div class="modal fade" id="checkoutModal" tabindex="-1" role="dialog" aria-labelledby="checkoutModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
            <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Checkout</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total Item</th>
                            <th scope="col">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(product, index) in products" :key="index">
                                <th scope="row">{{ index += 1 }}</th>
                                <td>{{ product.name }}</td>
                                <td>Rp {{ product.price }}</td>
                                <td><input type="number" v-model="product.totalItem"></td>
                                <td>Rp <input v-model="product.price * product.totalItem" readonly></td>
                            </tr>
                            <tr>
                                <td colspan="3">Sub Total</td>
                                <td><input v-model="calItem" readonly></td>
                                <td>Rp <input v-model="calPrice" readonly></td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" v-on:click="checkoutItem()">Checkout</button>
                </div>
            </div>
        </div>
    </div>
    `,
    data: function(){
        return {

        }
    },
    methods: {
        checkoutItem: function(){

            axios({
                method: "POST",
                url: "http://localhost:3000/transactions/create",
                data:{
                    cart : this.products
                },
                headers: {
                    token : localStorage.getItem('token')
                }
            })
            .then(function(response){
                swal(`${response.data.message}`, ``, "success")
                .then(function(){
                    location.reload()
                })
            })
            .catch(function(err){
                console.log(err.response)
            })
                  
        }
    },
    computed: {
        calPrice: {
            get: function(){

                let price = this.products
                let tempPrice = 0

                for(let i = 0; i < price.length; i++){
                    tempPrice += Number(price[i].totalItem * price[i].price)
                }

                return `${tempPrice}` 
            }
        },
        calItem: {
            get: function(){
                let items = this.products
                let tempItem = 0

                for(let i = 0; i < items.length; i++){
                    tempItem += Number(items[i].totalItem)
                }

                return `${tempItem}` 
            }
        }
    }
}


