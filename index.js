function mostrarSenha(){
    console.log('text')
    var inputPass = document.getElementById('input-password')
    var btnShowPass = document.getElementById('eye-button')
   
    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    }else{  
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
}




    

