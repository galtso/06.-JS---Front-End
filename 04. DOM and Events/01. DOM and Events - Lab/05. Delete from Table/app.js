function deleteByEmail() {
    const result = document.getElementById('result');
    const input = document.querySelector('input[name="email"]');
    const evenTds = Array.from(document.querySelectorAll('td:nth-child(even)'));
    let emailValue = input.value;
    let foundEmail = evenTds.find((td) => td.textContent === emailValue);
    if(foundEmail){
        foundEmail.parentElement.remove();
        result.textContent = 'Deleted.';
    }else{
        result.textContent = 'Not found.'
    }
}