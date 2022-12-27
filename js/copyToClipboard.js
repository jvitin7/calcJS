export default function(event) {
    const buttonCopy = event.currentTarget;
    const resultInput = document.getElementById('result');

    if(buttonCopy.innerText === 'Copy') {  
        buttonCopy.innerText = 'Copied';
        buttonCopy.classList.add('success');

        navigator.clipboard.writeText(resultInput.value);
    } else {
        buttonCopy.innerText = 'Copy';
        buttonCopy.classList.remove('success');
    }
}