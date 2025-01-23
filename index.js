
const result_ref = document.querySelector(".result")
let result = result_ref.textContent

// console.log(result)

const onClickZero = (e) => {
    result_ref.textContent = result_ref.textContent + '0'
}


const onClickOne = (e) => {
    result_ref.textContent = result_ref.textContent + '1'
}


const onClickTwo = (e) => {
    result_ref.textContent = result_ref.textContent + '2'
}


const onClickThree = (e) => {
    result_ref.textContent = result_ref.textContent + '3'
}


const onClickFour = (e) => {
    result_ref.textContent = result_ref.textContent + '4'
}


const onClickFive = (e) => {
    result_ref.textContent = result_ref.textContent + '5'
}


const onClickSix = (e) => {
    result_ref.textContent = result_ref.textContent + '6'
}


const onClickSeven = (e) => {
    result_ref.textContent = result_ref.textContent + '7'
}


const onClickEight = (e) => {
    result_ref.textContent = result_ref.textContent + '1'
}


const onClickNine = (e) => {
    result_ref.textContent = result_ref.textContent + '1'
}

const onClickOpenBracket = (e) => {
    result_ref.textContent = result_ref.textContent + '('
}

const onClickCloseBracket = (e) => {
    result_ref.textContent = result_ref.textContent + ')'
}

const onClickDot = (e) => {
    result_ref.textContent = result_ref.textContent + '.'
}


const onClickFactorial = (e) => {
    result_ref.textContent = result_ref.textContent + '!'
}

const onClickPlus = (e) => {
    result_ref.textContent = result_ref.textContent + '+'
}


const onClickEqual = (e) => {
    result = result_ref.textContent;
    result_ref.textContent = `${eval(result)}`
}


const onclickEraseOne =(e) =>{
    result_ref.textContent = result_ref.textContent.slice(0,-1)
}

const onClickEraseAll=(e)=>{
    result_ref.textContent=""
}






// Attach a keydown event listener to the document
const appendToResult = (symbol) => {
    result_ref.textContent += symbol;
};

const deleteLastCharacter = () => {
    result_ref.textContent = result_ref.textContent.slice(0, -1);
};

const deleteCurrentCharacter = () => {
    result_ref.textContent = result_ref.textContent.slice(1);
};

const keyActions = {
    '0': () => appendToResult('0'),
    '1': () => appendToResult('1'),
    '2': () => appendToResult('2'),
    '3': () => appendToResult('3'),
    '4': () => appendToResult('4'),
    '5': () => appendToResult('5'),
    '6': () => appendToResult('6'),
    '7': () => appendToResult('7'),
    '8': () => appendToResult('8'),
    '9': () => appendToResult('9'),
    '+': () => appendToResult('+'),
    '-': () => appendToResult('-'),
    '*': () => appendToResult('*'),
    '/': () => appendToResult('/'),
    '(': () => appendToResult('('),
    ')': () => appendToResult(')'),
    '!': () => appendToResult('!'),
    'Backspace': () => deleteLastCharacter(),
    'Delete': () => deleteNextCharacter()
};

document.addEventListener("keydown", function (event) {
    const action = keyActions[event.key];
    if (action) {
        action();
    } else {
        console.log("Other key pressed: " + event.key);
    }
});


