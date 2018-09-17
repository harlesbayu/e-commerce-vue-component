Vue.component('headers', {
    components: {
        "login"  : loginUser,
        "register" : registerUser
    },
    props : ["loginStatus"],
    template:
    `
    <div>
    <header>
        <div class="container">
            <nav>
                <div class="nav-left">
                    <span><i></i>SagalaAya</span>
                    <form class="form-inline" id="search">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="searchbyname">
                    </form>
                </div>
                <ul id="haveLogin" v-if="loginStatus">
                    <li><i class="fas fa-shopping-cart menu-horizontal" data-toggle="modal" data-target="#checkoutModal"></i></li>
                    <li><i class="fas fa-comment menu-horizontal"></i></li>
                    <li><i class="fas fa-handshake menu-horizontal"></i></li>
                    <li><i class="fas fa-bell menu-horizontal"></i></li>
                    <li class="dropdown" id="mydropdown">
                        <a href="#" class="dropdown-toggle" id="mydropdownaccess" data-toggle="dropdown" role="button"
                            aria-haspopup="true" aria-expanded="false"><i class="fas fa-user menu-horizontal"></i>
                            <span class="caret"></span></a>
                        <ul class="dropdown-menu" id="dropdownMenu">
                            <li><i class="fas fa-pen"></i> Update Profile</li>
                            <li v-on:click="logoutUser()"><i v-on:click="logoutUser()" class="fas fa-sign-out-alt"></i> Logout</li>
                        </ul>
                    </li>
                </ul>
                <ul id="logedin" v-else>
                    <li class="login"><i class="menu-horizontal" data-toggle="modal" data-target="#signinModal">Login</i></li>
                    <li class="login"><i class="menu-horizontal" data-toggle="modal" data-target="#signupModal">Register</i></li>
                </ul>
            </nav>
        </div>
    </header>

        <!-- Modal Login-->
        <login></login>

        <!-- Modal Register-->
        <register></register>
    </div>
    `,
    data: function () {
        return {}
    },
    methods: {
        logoutUser: function(){
            localStorage.removeItem('token')
            location.reload()
        },
    },
    computed: {
        searchbyname : {
            set: function(value){
               let self = this
               axios({
                   method : "GET",
                   url : `http://ecommerce.harlesbayuanggara.tech/items/findByName?product=${value}`
               })
               .then(function(response){
                    self.$emit("searchbyname", response.data.items)
               })
            },
            get: function(value){}
        }
    },
  
})