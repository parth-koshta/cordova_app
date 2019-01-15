
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();





// testing boilerplate

     // window.onload = function(){
     //           $(".login_button").on('click', detailsCheck)
     //        }
                

               

                // $.getJSON("login.json", function(data){
                //     $.each(data, function(key, value){
                //         console.log(key);
                //         console.log(value);
                //     })
                // })

                
// $(".login_button").on('click', detailsCheck)


// localStorage.clear();


function detailsCheck(){
    let enteredEmail = $("#email").val();
    let enteredPassword = $("#password").val();


    if(!validateEmailPattern(enteredEmail)){
        console.log("invalid email");
        alert("Enter correct email");
        return false;
    }
    

    else if(!validatePasswordLength(enteredPassword)){
        console.log("invalid password");
        alert("Minimun length of password should be 6 letters");
        return false;
    }
    else if(validateEmail(enteredEmail) == false){
        alert("Wrong email address");
         return false;
    }
    else if(validatePassword(enteredPassword) == false){
        alert("Wrong password");
         return false;
    }
    else{
        if(validateEmail(enteredEmail) == true && validatePassword(enteredPassword) == true){
            localStorage.setItem("username", enteredEmail);
            localStorage.setItem("password", enteredPassword);
            // localStorage.getItem("username");
            // localStorage.getItem("password");
            console.log("valid");
            // window.location = 'index.html';
            return true;
        }
        
    }
}

function validateEmail(enteredEmail){
    if(enteredEmail != email){
        console.log("came here");
        return false;
    }
    return true;
}

function validatePassword(enteredPassword){
    if(enteredPassword != pass){
        return false;
    }
    return true;
}



function validateEmailPattern(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePasswordLength(password){
    if(password.length < 6) {
        return false;
    }
    return true;
}




            