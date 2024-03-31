const checkButton = document.getElementById('check-btn');
const showButton = document.getElementById('showBtn')
const showContent = document.getElementById('container2')

showButton.addEventListener('click', ()=> {
    showContent.style.display = 'block'
    showButton.style.display = 'none'
})
function cleanInputString(str) {

    const regex = /[\W_]/g 
    return str.replace(regex, "")
}

checkButton.addEventListener('click', () => {
    
    let inputUser = document.getElementById('text-input').value.toLowerCase();
    let baru = inputUser
    const result = document.getElementById('result');

    inputUser = cleanInputString(inputUser);

    let polindrome = inputUser.toLowerCase().split("").reverse().join("")
    if(inputUser === ''){
        alert("Please input a value");
        
    } else if(inputUser === polindrome) {
        result.innerHTML = `<strong> ${baru} </strong>`+ " is a palindrome"
        result.style.color = 'blue'
    } else {
        result.innerHTML = `<strong> ${baru} </strong>` + " is not a palindrome"
        result.style.color = 'red'
    }
});

