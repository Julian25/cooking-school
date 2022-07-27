window.onload = function() {
    const messageInputs = document.querySelectorAll('form input');
    const nameLabel = document.getElementById('name-label');
    const name = document.getElementById('name');
    const nameMessage = document.getElementById('name-message');
    const surnameLabel = document.getElementById('surname-label');
    const surname = document.getElementById('surname');
    const surnameMessage = document.getElementById('surname-message');
    const emailLabel = document.getElementById('email-label');
    const email = document.getElementById('email');
    const emailMessage = document.getElementById('email-message');
    const commentLabel = document.getElementById('comment-label');
    const textArea = document.getElementById('comment');
    const commentMessage = document.getElementById('comment-message')
    
    console.log(messageInputs)
    
       /* validations */
    var letters = ["a","b","c","d","e","f","g","h","i","j","k",
    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z"];
    
    var numbers = ["0","1","2","3","4","5","6","7","8","9"];
    
    var symbols = ["!","#","$","%","&","/","(",")","=","?","¡","¿","+","*","[","]","{","}","-",".", "@"];
    
        // Function to get only letters and their number
    function lettersNumbers (input) {
        var inputValue = input;
        var numberOfLetters = 0
        for(var i= 0; i < inputValue.length; i++) {
            var inputName = inputValue[i];
            if (letters.indexOf(inputName) != -1) {
                numberOfLetters++;
            } else  {
                return false;
            }
        }
        return numberOfLetters;
    }
    
     //Function to validate email
    function validateEmail (input) {
        var regularExpresion = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (regularExpresion.test(input)) {
            return true;
        } else {
            return false;
        }
    }
    
    
    
      // Fuction to validate each input on blur event
    function validateForm(e) {
        switch(e.target.name) {
            case 'name':
                if(lettersNumbers(e.target.value) < 3) {
                    nameLabel.classList.add('label-error');
                    name.classList.add('input-error');
                    nameMessage.classList.add('mesagge-error');
                }else {
                    nameLabel.classList.remove('label-error');
                    name.classList.remove('input-error');
                    nameMessage.classList.remove('mesagge-error');
                }
            break;
            case 'surname':
                if(lettersNumbers(e.target.value) < 3) {
                    surnameLabel.classList.add('label-error');
                    surname.classList.add('input-error');
                    surnameMessage.classList.add('mesagge-error');
                }else {
                    surnameLabel.classList.remove('label-error');
                    surname.classList.remove('input-error');
                    surnameMessage.classList.remove('mesagge-error');
                }
            break;
            case 'email':
                if(!(validateEmail(e.target.value))){
                    emailLabel.classList.add('label-error');
                    email.classList.add('input-error');
                    emailMessage.classList.add('mesagge-error');
                }else{
                    emailLabel.classList.remove('label-error');
                    email.classList.remove('input-error');
                    emailMessage.classList.remove('mesagge-error');
                }
            break;
            case 'comment':
                if(lettersNumbers(e.target.value) === 0) {
                    commentLabel.classList.add('label-error');
                    textArea.classList.add('input-error');
                    commentMessage.classList.add('mesagge-error');
                }else {
                    commentLabel.classList.remove('label-error');
                    textArea.classList.remove('input-error');
                    commentMessage.classList.remove('mesagge-error');
                }
            break;
        }
    }

     //Function for correcting state of wrong field in focus event
     function correctError(e) {
        switch(e.target.name) {
            case 'name':
                nameLabel.classList.remove('label-error');
                name.classList.remove('input-error');
                nameMessage.classList.remove('mesagge-error');
            break; 
            case 'surname':
                surnameLabel.classList.remove('label-error');
                surname.classList.remove('input-error');
                surnameMessage.classList.remove('mesagge-error');
            break;
            case 'email':
                emailLabel.classList.remove('label-error');
                email.classList.remove('input-error');
                emailMessage.classList.remove('mesagge-error');
            break;
            case 'comment':
                commentLabel.classList.remove('label-error');
                textArea.classList.remove('input-error');
                commentMessage.classList.remove('mesagge-error');
            break; 
        }  
    }

    messageInputs.forEach(function(input){
        input.addEventListener('blur', validateForm)
        input.addEventListener('focus', correctError)
    });

    textArea.addEventListener('blur', validateForm);
    textArea.addEventListener('focus', correctError)
}
