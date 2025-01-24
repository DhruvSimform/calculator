// refrence of result display to make changes on it
const result_ref = document.querySelector(".result")
let result = result_ref.value

let memory = 0; // Memory storage for M+, M-, MS

//refrence of mc and mr button for to change the value of disable attribute
const mc_ref = document.querySelector(".mc")
const mr_ref = document.querySelector(".mr")


//variable for to stop allwing dot after use in single flot number
let isDotAllowed = true;


//variable for to count open bracket so wee can only allow that much no of closing bracket
let noOfBracket = 0


//array of variable 
const operation = ['+', '-', '*', '/', '%', '(']



// console.log(result)

const onClickZero = (e) => {
    result_ref.value = result_ref.value + '0'
}


const onClickOne = (e) => {
    result_ref.value = result_ref.value + '1'
}


const onClickTwo = (e) => {
    result_ref.value = result_ref.value + '2'
}


const onClickThree = (e) => {
    result_ref.value = result_ref.value + '3'
}


const onClickFour = (e) => {
    result_ref.value = result_ref.value + '4'
}


const onClickFive = (e) => {
    result_ref.value = result_ref.value + '5'
}


const onClickSix = (e) => {
    result_ref.value = result_ref.value + '6'
}


const onClickSeven = (e) => {
    result_ref.value = result_ref.value + '7'
}


const onClickEight = (e) => {
    result_ref.value = result_ref.value + '8'
}


const onClickNine = (e) => {
    result_ref.value = result_ref.value + '9'
}

const onClickOpenBracket = (e) => {
    result_ref.value = result_ref.value + '(';
    noOfBracket = noOfBracket + 1
}

const onClickCloseBracket = (e) => {
    if (noOfBracket) {
        result_ref.value = result_ref.value + ')';
        noOfBracket = noOfBracket - 1

    }
}

const onClickDot = (e) => {

    if (isDotAllowed) {
        result_ref.value = result_ref.value + '.';
        isDotAllowed = false;
    }
}


const onClickFactorial = (e) => {
    result_ref.value = result_ref.value + '!'
}


const onClickEqual = (e) => {
    result = result_ref.value;
    try {
        let s = result.replaceAll("^", "**")
        let n = eval(s)
        if (`${n}`.indexOf('.') !== -1) {
            n = Number(n).toFixed(2);
            isDotAllowed = false;

        }
        else {
            isDotAllowed = true
        }

        result_ref.value = n


    } catch {
        result_ref.value = "Error";
    }
}


const onclickEraseOne = (e) => {
    result = result_ref.value
    if (result[result.length - 1] == "(") {
        noOfBracket = noOfBracket - 1
    }
    if (result[result.length - 1] == ")") {
        noOfBracket = noOfBracket + 1
    }

    console.log(result.at(-1));
    if (result.at(-1) == ".") {

        isDotAllowed = true;
    }
    result_ref.value = result_ref.value.slice(0, -1)

}

const onClickEraseAll = (e) => {
    result_ref.value = "";
    noOfBracket = 0;
    isDotAllowed = true;
}


const supportFunctionForOperation = (ope) => {
    result = result_ref.value

    if (result == "" || result[result.length - 1] == ".") {
    }

    else {
        if (!operation.includes(result[result.length - 1])) {
            result_ref.value = result_ref.value + `${ope}`;
            isDotAllowed = true;
        }
        else {
            if ('(' == result[result.length - 1]) {
                noOfBracket = noOfBracket - 1
            }
            if (')' == result[result.length - 1]) {
                noOfBracket = noOfBracket + 1
            }
            result_ref.value = result_ref.value.slice(0, result.length - 1) + `${ope}`
            isDotAllowed = true;


        }
    }

}

const onClickPlus = (e) => {

    supportFunctionForOperation("+")
}

const onClickMinus = (e) => {
    supportFunctionForOperation("-")
}

const onClickDivide = (e) => {
    e.preventDefault();
    supportFunctionForOperation("/")
}


const onClickMod = (e) => {
    supportFunctionForOperation("%")
}

const onClickMul = (e) => {
    supportFunctionForOperation("*")
}

const calculateSquare = () => {
    const operators = ['+', '-', '*', '/', '%', '('];
    let current = result_ref.value;

    // Check if the last character is ")"
    if (current[current.length - 1] === ")") {
        result_ref.value = result_ref.value + `^2`
    } else {
        // Find the last operator index
        let lastOperatorIndex = -1;
        for (let i = current.length - 1; i >= 0; i--) {
            if (operators.includes(current[i])) {
                lastOperatorIndex = i;
                break;
            }
        }

        // Extract the part to square
        let toSquare = current.slice(lastOperatorIndex + 1);
        if (!isNaN(toSquare) && toSquare !== "") {
            let squaredValue = `(${toSquare}^2)`;
            result_ref.value = current.slice(0, lastOperatorIndex + 1) + squaredValue;
        }
    }
};

const calculateReciprocal = () => {

    let current = result_ref.value;

    result_ref.value = current + "(1/";
    noOfBracket = noOfBracket + 1
}





// Attach a keydown event listener to the document
const appendToResult = (symbol) => {
    result_ref.value += symbol;
};

const deleteLastCharacter = () => {
    result_ref.value = result_ref.value.slice(0, -1);
};

const deleteCurrentCharacter = () => {
    result_ref.value = result_ref.value.slice(1);
};

const keyActions = {
    '0': () => onClickZero(),
    '1': () => onClickOne(),
    '2': () => onClickTwo(),
    '3': () => onClickThree(),
    '4': () => onClickFour(),
    '5': () => onClickFive(),
    '6': () => onClickSix(),
    '7': () => onClickSeven(),
    '8': () => onClickEight(),
    '9': () => onClickNine(),
    '+': () => onClickPlus(),
    '-': () => onClickMinus(),
    '*': () => onClickMul(),
    '/': (e) =>onClickDivide(e),
    '(': () => onClickOpenBracket(),
    ')': () => onClickCloseBracket(),
    '!': () => onClickFactorial(),
    '%': () => onClickMod(),
    '.':() =>onClickDot(),
    'Backspace': () => deleteLastCharacter(),
    'Delete': () => deleteLastCharacter(),
    'Enter': () => onClickEqual(),
};

document.addEventListener("keydown", function (event) {
    const action = keyActions[event.key];
    if (action) {
        action(event);
    } else {
        console.log("Other key pressed: " + event.key);
    }
});



const memoryAdd = () => {
    let current = parseFloat(result_ref.value);
    if (!isNaN(current)) {
        memory += current;
        enableMemoryBTN()
        console.log(memory);

    }
};

const memorySubtract = () => {
    let current = parseFloat(result_ref.value);
    if (!isNaN(current)) {
        memory -= current;
        enableMemoryBTN();
        console.log(memory);

    }
};

const memoryStore = () => {
    let current = parseFloat(result_ref.value);
    if (!isNaN(current)) {
        memory = current;
        enableMemoryBTN()
        console.log(memory);

    }
};

const memoryRecall = () => {
    result_ref.value = result_ref.value + memory;
    if(result_ref.value.includes(".")){
        isDotAllowed=false
    }
    else{
        isDotAllowed=true
    }
};

const memoryClear = () => {
    memory = 0;
    mc_ref.disabled = true;
    mr_ref.disabled = true;

};


const enableMemoryBTN = (e) => {
    if (memory != 0) {
        mc_ref.disabled = false;
        mr_ref.disabled = false;
    }
}