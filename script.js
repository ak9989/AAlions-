const name =document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')



function validateform(){
    var name =document.formv.name.value;
    var password= document.formv.value;

    if(name == null || name == ""){
        alert('Name box not be blank')
    }else if(password.length<6){
        alert("password must contain 6 chaterchters")
    }
}

