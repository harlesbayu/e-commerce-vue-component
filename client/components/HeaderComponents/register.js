const registerUser = {
    template :
    `
    <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="signupModal"
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
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                        <input v-model="name" type="text" class="form-control" placeholder="name">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Picture</label>
                        <div class="col-sm-10">
                        <input v-model="picture" type="text" class="form-control" placeholder="picture">
                        </div>
                    </div>
                    
                    <div class="form-group  row">
                        <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input v-model="gender" class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="male" checked>
                                <label class="form-check-label" for="gridRadios1">
                                    Male
                                </label>
                            </div>
                            <div class="form-check">
                                <input v-model="gender" class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="female">
                                <label class="form-check-label" for="gridRadios2">
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>
        
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Address</label>
                        <div class="col-sm-10">
                        <input v-model="address" type="text" class="form-control" placeholder="address">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Phone</label>
                        <div class="col-sm-10">
                        <input v-model="phoneNumber" type="text" class="form-control" placeholder="phone number">
                        </div>
                    </div>
        
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
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" v-on:click="signupUser()">Submit</button>
                </div>
            </div>
        </div>
    </div>
    `,
    data: function(){
        return {
            name: '',
            picture: '',
            gender: '',
            address: '',
            phoneNumber: '',
            email: '',
            password: '',    
        }
    },
    methods: {
        signupUser: function(){
            let data = {
                name : this.name,
                picture : this.picture,
                gender : this.gender,
                address : this.address,
                phoneNumber : this.phoneNumber,
                email : this.email,
                password : this.password
            }

            // let self = this
            axios({
                method: "POST",
                url: 'http://localhost:5000/users/signup',
                data
            })
            .then(function (result) {
                console.log(result)
            })
            .catch(function (err){
                console.log(err)
            })
        }
    }
}