const loginUser = {
    template :
    `
    <div class="modal fade" id="signinModal" tabindex="-1" role="dialog" aria-labelledby="signinModal"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Register</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                <p v-if="error" style="color:red"> {{ errorMessage }} <p>

                <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                    <input v-model="email" type="email" class="form-control" placeholder="email">
                    </div>
                </div>
    
                <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                    <input v-model="password" type="password" class="form-control" placeholder="password">
                    </div>
                </div>
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" >Close</button>
                <button type="button" class="btn btn-primary" v-on:click="signinUser()">Submit</button>
            </div>
        </div>
    </div>
    </div>
    `,
    data: function(){
        return {
            email: '',
            password: '',  
            error : false,
            errorMessage : '', 
        }
    },
    methods: {
        signinUser: function(){
            let data = {
                email : this.email,
                password : this.password
            }

            let self = this
            axios({
                method: "POST",
                url: 'http://localhost:5000/users/signin',
                data
            })
            .then(function (response) {
                localStorage.setItem('token', response.data.token)
                location.reload()
            })
            .catch(function (err){
                self.error = true
                self.errorMessage = err.response.data.message
            })
        }
    },
    watch: {
        email: function(){
            this.error = false
        },
        password: function(){
            this.error = false
        }
    }
}