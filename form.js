//Form code


//Const
const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const paragraph = document.getElementById("warnings")

//Event
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let enter = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    paragraph.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `Put a valid name. <br>`
        enter = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `Put a valid mail. <br>`
        enter = true
    }
    if(adress.value.length < 8){
        warnings += `Put a valid adress. <br>`
        entrar = true
    }
    
    if(enter){
        paragraph.innerHTML = warnings
    }else{
        Swal.fire(
            'Your order will be shipped soon',
            'Thank you for buying with us!',
            'success')
    }
})