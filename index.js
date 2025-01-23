
const result_ref = document.querySelector(".result")
let result = result_ref.textContent

let memory = 0; // Memory storage for M+, M-, MS


const mc_ref = document.querySelector(".mc")
const mr_ref = document.querySelector(".mr")


// console.log(result)


let allowedToUseDot=true;
const operators = ['+', '-', '*', '/', '%'];


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
    result_ref.textContent = result_ref.textContent + '8'
}


const onClickNine = (e) => {
    result_ref.textContent = result_ref.textContent + '9'
}

const onClickOpenBracket = (e) => {
    result_ref.textContent = result_ref.textContent + '('
}

const onClickCloseBracket = (e) => {
    result_ref.textContent = result_ref.textContent + ')'
}

const onClickDot = (e) => {
    if(allowedToUseDot){

        result_ref.textContent = result_ref.textContent + '.';
        allowedToUseDot=false;
    }

}


const onClickFactorial = (e) => {
    result_ref.textContent = result_ref.textContent + '!'
}


const onClickEqual = (e) => {
    result = result_ref.textContent;
    try {
        let s = result.replaceAll("^", "**")
        result_ref.textContent = `${eval(s)}`;
        allowedToUseDot=true;
    } catch {
        result_ref.textContent = "Error";
    }
}


const onclickEraseOne = (e) => {
    result_ref.textContent = result_ref.textContent.slice(0, -1)
}

const onClickEraseAll = (e) => {
    result_ref.textContent = ""
    allowedToUseDot=true;
}


const onClickPlus = (e) => {
    result_ref.textContent = result_ref.textContent + '+';
    allowedToUseDot=true;
}

const onCickMinus = (e) => {
    result_ref.textContent = result_ref.textContent + '-';
    allowedToUseDot=true;
}

const onCickDivide = (e) => {
    // preventDefault();
    result_ref.textContent = result_ref.textContent + '/';
    allowedToUseDot=true;
}


const onCickMod = (e) => {
    result_ref.textContent = result_ref.textContent + '%';
    allowedToUseDot=true;
}

const onCickMul = (e) => {
    result_ref.textContent = result_ref.textContent + '*';
    allowedToUseDot=true;
}

const calculateSquare = () => {
    const operators = ['+', '-', '*', '/', '%', '('];
    let current = result_ref.textContent;

    // Check if the last character is ")"
    if (current[current.length - 1] === ")") {
        result_ref.textContent = result_ref.textContent + `^2`
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
            result_ref.textContent = current.slice(0, lastOperatorIndex + 1) + squaredValue;
        }
    }
};

const calculateReciprocal = () => {

    const operators = ['+', '-', '*', '/', '%', '('];

    let current = result_ref.textContent;

    // let lastOperatorIndex = -1;

    // for (let i=current.length -1 ; i>=0;i--){
    //     if (operators.includes(current[i])) {
    //         lastOperatorIndex = i;
    //         break;
    //     }
    // }

    // let reciprocal = current.slice(lastOperatorIndex +1);
    // let reciprocalValue = `(${reciprocal}/`;
    result_ref.textContent = current+"(1/";



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



operators.includes(current.length - 1)
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
    '+': () => {
        let text = result_ref.textContent;

        if(operators.includes(text[text.length - 1]))
        {
            result_ref.textContent=text.slice(0,text.length-2)+'+';
            console.log(ext.slice(0,text.length-2));
            
        }
        else{
            appendToResult('+');
        }
    },
    '-': () => appendToResult('-'),
    '*': () => appendToResult('*'),
    '/': (e) => {
        e.preventDefault();
        appendToResult('/')
    },
    '(': () => appendToResult('('),
    ')': () => appendToResult(')'),
    '!': () => appendToResult('!'),
    '%': () => appendToResult('%'),
    'Backspace': () => deleteLastCharacter(),
    'Delete': () => deleteNextCharacter(),
    'Enter': () => {
        result = result_ref.textContent;
        try {
            let s = result.replaceAll("^", "**")
            result_ref.textContent = `${eval(s)}`;
        } catch {
            result_ref.textContent = "Error";
        }
    },
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
    let current = parseFloat(result_ref.textContent);
    if (!isNaN(current)) {
        memory += current;
        enableMemoryBTN()
        console.log(memory);
        
    }
};

const memorySubtract = () => {
    let current = parseFloat(result_ref.textContent);
    if (!isNaN(current)) {
        memory -= current;
        enableMemoryBTN();
        console.log(memory);
        
    }
};

const memoryStore = () => {
    let current = parseFloat(result_ref.textContent);
    if (!isNaN(current)) {
        memory = current;
        enableMemoryBTN()
        console.log(memory);
        
    }
};

const memoryRecall = () => {
    result_ref.textContent = result_ref.textContent+memory;
};

const memoryClear = () => {
    memory=0;
    mc_ref.disabled=true;
    mr_ref.disabled=true;

};


const enableMemoryBTN = (e)=>{
    if (memory!=0){
        mc_ref.disabled=false;
        mr_ref.disabled=false;
    }
}