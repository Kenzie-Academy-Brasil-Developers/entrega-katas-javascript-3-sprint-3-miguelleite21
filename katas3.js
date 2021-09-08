const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(valor){
    let pagina = document.getElementById("div")
    let par = document.createElement("p")
    par.innerText = valor
    pagina.appendChild(par)

}

function kata1() {
    let arr = []
    for(let i = 1; i <= 25; i++){ 
        arr.push(i) 
    }
    showResults(arr)
    return arr 
}


function kata2() {
    let arr = []
    for(let i = 25; i >= 1; i--){
        arr.push(i)
    }
    showResults(arr)
    return arr 
}

function kata3() {  
    let arr = []
    for(let i = -1; i >= -25; i--){
        arr.push(i)
    }
    showResults(arr)
    return arr 
}

function kata4() {
    let arr = []
    for(let i = -25; i <= -1; i++){
        arr.push(i)
    }
    showResults(arr)
    return arr 
}

function kata5() {
    let arr = []
    for(let i = 25; i >= -25; i--){
        if(i%2 !== 0){
            arr.push(i)
        }
    }
    showResults(arr)
    return arr 
}

function kata6() {
    let arr = []
    for(let i = 1; i <= 100; i++){
        if(i%3 == 0){
            arr.push(i)
        }
    }
    showResults(arr)
    return arr
}

function kata7() {
    let arr = []
    for(let i = 1; i <= 100; i++){
        if(i%7 == 0){
            arr.push(i)
        }
    }
    showResults(arr)
    return arr
}

function kata8() {
    let arr = []
    for(let i = 100; i >= 1; i--){
        if(i%3 == 0 || i%7 ==0){
            arr.push(i)
        }
    }
    showResults(arr)
    return arr
}

function kata9() {
    let arr = []
    for(let i = 1; i <= 100; i++){
        if(i%2 !== 0 && i%5 ==0){
            arr.push(i)
        }
    }
    showResults(arr)
    return arr
}

function kata10() {
showResults(sampleArray)
}

function kata11() {
    let arr = []
    for(let i = 0; i < sampleArray.length; i++){ 
        if(sampleArray[i]%2 ==0){
            arr.push(sampleArray[i]) 
        }
    }
    showResults(arr)
    return arr 
}

function kata12() {
    let arr = []
    for(let i = 0; i < sampleArray.length; i++){ 
        if(sampleArray[i]%2 !==0){
            arr.push(sampleArray[i]) 
        }
    }
    showResults(arr)
    return arr 
}

function kata13() {
    let arr = []
    for(let i = 0; i < sampleArray.length; i++){ 
        if(sampleArray[i]%8 ==0){
            arr.push(sampleArray[i]) 
        }
    }
    showResults(arr)
    return arr 
}

function kata14() {
    let arr = []
    for(let i = 0; i < sampleArray.length; i++){ 
        arr.push(sampleArray[i]*sampleArray[i])     
    }
    showResults(arr)
    return arr 
}

function kata15() {
    let result = 0
    for(let i = 1; i <= 20; i++){ 
        result += i
    }
    showResults(result)
    return result 
}

function kata16() {
    let result = 0
    for(let i = 0; i < sampleArray.length; i++){ 
        result += sampleArray[i]
    }
    showResults(result)
    return result 
}

function kata17() {
    let result = sampleArray[0]
    for(let i = 0; i < sampleArray.length; i++){ 
        if(result > sampleArray[i]){
            result = sampleArray[i]
        }
    }
    showResults(result)
    return result 

}

function kata18() {
    let result = sampleArray[0]
    for(let i = 0; i < sampleArray.length; i++){ 
        if(result < sampleArray[i]){
            result = sampleArray[i]
        }
    }
    showResults(result)
    return result
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
