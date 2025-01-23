
const result_ref = document.querySelector(".result")
let result = result_ref.textContent

let memory = 0; // Memory storage for M+, M-, MS


const mc_ref = document.querySelector(".mc")
const mr_ref = document.querySelector(".mr")

let isDotAllowed = true;



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
    
    if(isDotAllowed){
        result_ref.textContent = result_ref.textContent + '.';
        isDotAllowed=false;
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
    } catch {
        result_ref.textContent = "Error";
    }
}


const onclickEraseOne = (e) => {
    result_ref.textContent = result_ref.textContent.slice(0, -1)
}

const onClickEraseAll = (e) => {
    result_ref.textContent = ""
}


const onClickPlus = (e) => {



    // const result_ref = document.querySelector(".result")
    result=result_ref.textContent
    if(result=="" &&result[result.length-1]=="."){

    }

    else{
        if(!isNaN(result[result.length-1])){
            result_ref.textContent = result_ref.textContent + '+';
            isDotAllowed=true;
        }
        else{
            result_ref.textContent = result_ref.textContent.slice(0,result.length-1) + '+';
            isDotAllowed=true;
        }
    }


}

const onCickMinus = (e) => {
    result=result_ref.textContent
    if(result==""){

    }

    else{
        if(!isNaN(result[result.length-1])){
            result_ref.textContent = result_ref.textContent + '-';
            isDotAllowed=true;
        }
        else{
            result_ref.textContent = result_ref.textContent.slice(0,result.length-1) + '-';
            isDotAllowed=true;
        }
    }
}

const onCickDivide = (e) => {
    // preventDefault();
    result=result_ref.textContent
    if(result==""){

    }

    else{
        if(!isNaN(result[result.length-1])){
            result_ref.textContent = result_ref.textContent + '/';
            isDotAllowed=true;
        }
        else{
            result_ref.textContent = result_ref.textContent.slice(0,result.length-1) + '/';
            isDotAllowed=true;
        }
    }
}


const onCickMod = (e) => {
    result=result_ref.textContent
    if(result==""){

    }

    else{
        if(!isNaN(result[result.length-1])){
            result_ref.textContent = result_ref.textContent + '%';
            isDotAllowed=true;
        }
        else{
            result_ref.textContent = result_ref.textContent.slice(0,result.length-1) + '%';
            isDotAllowed=true;
        }
    }
}

const onCickMul = (e) => {
    result=result_ref.textContent
    if(result==""){

    }

    else{
        if(!isNaN(result[result.length-1])){
            result_ref.textContent = result_ref.textContent + '*';
            isDotAllowed=true;
        }
        else{
            result_ref.textContent = result_ref.textContent.slice(0,result.length-1) + '*';
            isDotAllowed=true;
        }
    }
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

const keyActions = {
    '0': () => onClickZero(),
    '1': () => onClickOne(),
    '2': () => onClickTwo(),
    '3': () => onClickThree(),
    '4': () => onClickFour(),
    '5': () =>  onClickFive(),
    '6': () =>  onClickSix(),
    '7': () =>  onClickSeven(),
    '8': () =>  onClickEight(),
    '9': () =>  onClickNine(),
    '+': () => onClickPlus(),
    '-': () => onCickMinus(),
    '*': () => onCickMul(),
    '/': (e) => {
        e.preventDefault();
        onClckDivide();
    },
    '(': () => appendToResult('('),
    ')': () => appendToResult(')'),
    '!': () => appendToResult('!'),
    '%': () => onCickMod(),
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