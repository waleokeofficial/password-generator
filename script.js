const resultEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lengthEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numbersEl = document.getElementById("number");
const symbolsEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

generateEl.addEventListener("click", ()=> {
    const length = +lengthEl.value;
    const hasUpper = upperEl.checked;
    const hasLower = lowerEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol);
});

const randomFunc = {
    lower : getLowerCase,
    upper : getUpperCase,
    number : getNumbers,
    symbols : getSymbols,
}

function generatePassword(lower, upper, number, symbol){
    
    let generatedPassword = "";

    const typesCount = lower + upper + number + symbol; 
console.log("typesCount: ", typesCount); 

    const typArr = [{lower}, {upper}, {number}, {symbol}].filter(
        item => Object.values(item)[0]
    );
console.log(typArr);
    if (typesCount === 0){
        return ''
    }

    for (let i = 0; i < length; i+= typesCount) {
        typArr.forEach(type => {
            const funcNamee = Object.keys(type)[0];
console.log('funcName: ', funcNamee);

            generatedPassword += randomFunc[funcNamee]();
        })   
    }
console.log(generatedPassword);
    
}




function getLowerCase(){
   return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
};

function getUpperCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
};

function getNumbers(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
};

function getSymbols(){
    const symbols = "!@#$%^&*()-+.";
    return symbols[Math.floor(Math.random() * symbols.length)];
};