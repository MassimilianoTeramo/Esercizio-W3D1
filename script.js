// Esercizio 1

// let crazySum = (a,b)=>{ // variabile che ha come contenuto una funzione
//     if (a===b){
//        return (a+b)*3
        
//     } else {
//         return a+b
// } 

// }
// console.log (crazySum(7,7))


// function crazySum (a,b) {
//     if (a===b){
//        return (a+b)*3
        
//     } else {
//    return a+b
        
//     }
// }

// console.log (crazySum(10,10))


// esercizio 2

// function boundary (num){
//     if ((num>=20 && num<=100) || num===400){
//         return true

//     } else {
//         return false
//     }

// }

// console.log (boundary(300))

// let boundary= (num)=>{
//     return (num>=20 && num<=100) || num===400 // da gia per scontato che sia true/false
// }

//esercizio 3



// function reverseString (parola){
//     let parolaSplit = parola.split("")
//     console.log (parolaSplit)

//    let parolaReverse = parolaSplit.reverse();
//    console.log (parolaReverse)

//    let parolaJoin = parolaReverse.join("");
//    console.log (parola)
    
//    return parolaJoin 

//OPPURE 
//return parola.split("").reverse().join("") si possono concatenare tutti gli eventi

// }

// console.log(reverseString("EPICODE"))

// let reverseString2 = (parola2)=>{
//     return parola2.split("").reverse().join("")
// }

// console.log(reverseString2("CIAONE"))

// function upperFirst (stringa){
//     let stringaSplit = stringa.split(" ")
//     console.log (stringaSplit)

//     for (let i=0; i<stringaSplit.lenght; i++){
//         stringaSplit[i]=  stringaSplit[i][0].toUpperCase()+stringaSplit[i].substring(1)
//     }
//     return stringaSplit.join(" ")
// }
// console.log (upperFirst("ciao a tutti"))


//Esercizio 4

// let arrayS = "";

// function upperFirst (stringa){
//   let arraySplit=stringa.split(" ");
// console.log (arraySplit)
//     for (let i=0; i<arraySplit.length; i++){
        
//         arraySplit[i]=arraySplit[i][0].toUpperCase()+arraySplit[i].slice(1)


//     }
    
//     console.log (arraySplit)

//     }
//     upperFirst("ciao a tutti")



//esercizio 5

// let array = []

// function TiraDado(n) {
   
// for(let i=0; i<11; i++){

//     let numero= Math.floor(Math.random()*11)
//     array.push(numero)


// console.log(array)
// }
// }
// TiraDado()



 