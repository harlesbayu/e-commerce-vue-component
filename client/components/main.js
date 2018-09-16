var app = new Vue({
    el: '#app',
    data: {
        cekLogin : false
    },
    created: function () {
        this.checkLogin()
    },
    methods: {
        checkLogin: function(){
            let token = localStorage.getItem('token')
            if(token){
                this.cekLogin = true
            } else {
                this.cekLogin = false
            }
        }
    }
});