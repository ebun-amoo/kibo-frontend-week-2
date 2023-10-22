import './css/style.css'
import cipher from './js/cipher'

// get the user's input to encrypt
const inputEncrypt = document.getElementById('inputEncrypt');
const offsetEncrypt = document.getElementById('offsetEncrypt');
const submitEncrypt = document.getElementById('submitEncrypt');

// get the user's input to decrypt
const inputDecrypt = document.getElementById('inputDecrypt');
const offsetDecrypt = document.getElementById('offsetDecrypt');
const submitDecrypt = document.getElementById('submitDecrypt');

//provide encrypted message when user clicks on submit button
submitEncrypt.addEventListener('click', function() {
    const inputValue = inputEncrypt.value;
    const offsetValue = offsetEncrypt.value;
    const encodedMessage = cipher.encode(inputValue, +offsetValue);
    //notify the user when the use wrong input for text or offset
    if (encodedMessage === null){
        alert('Wrong Input: Text must be capital letters. Offset must be positive integers. Try Again!');
    }
    else{
        // show decrypted text
        document.getElementById('encoded').textContent = encodedMessage;
    }
});

//provide decrypted message when user clicks on submit button
submitDecrypt.addEventListener('click', function() {
    const inputValue = inputDecrypt.value;
    const offsetValue = offsetDecrypt.value;
    const decodedMessage = cipher.decode(inputValue, +offsetValue);
    //notify the user when the use wrong input for text or offset
    if (decodedMessage === null){
        alert('Wrong Input: Text must be capital letters. Offset must be positive integers. Try Again!');
    }
    else{
        // show decrypted text
        document.getElementById('decoded').textContent = decodedMessage;
    }
});
