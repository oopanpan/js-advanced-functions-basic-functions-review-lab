function saturdayFun(phase = 'roller-skate'){
    return `This Saturday, I want to ${phase}!`
}

const mondayWork = (phase = 'go to the office') => {
    return `This Monday, I will ${phase}.`
}

function wrapAdjective(style = '*'){
    return function (adj){return `You are ${style}${adj}${style}!`}
}

const Calculator = {
    add: (a,b) => a+b,
    subtract: (a,b) => a-b,
    multiply: (a,b) => a*b,
    divide: (a,b) => a/b
}

const actionApplyer = (int, arr) =>{
    for(let i = 0; i<arr.length; i++){
        int = arr[i](int)
    }
    return int
}
