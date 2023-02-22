// //Imprimir n numeros de la serie fibonacci

// var fibonacci = [];

//      fibonacci[0] = 0;
//      fibonacci[1] = 1;
//       for (var i = 2; i < 30; i++) {
//     fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
// }
// console.log(fibonacci);


// // encontrar el comun divisor de dos numeros 
// const maximoComunDivisor = (a, b) => {

//     if (b === 0) return a;
//     return maximoComunDivisor(b, a % b);
// };


// console.log(maximoComunDivisor(10, 15))
// ////////////////////////////////////////////

// let hr = new Date().getHours();
// let day = new Date().getDay();

// function bussinesHour(hr){
    
//     if (hr >= 9 && hr<=18){
//         return true;
//     } else{
//         return false;
//     }
// }




// function businessDay(day){
//     if(day>=1 && day<=5){
//         return true;
//     } else{
//         return false;
//     }
// }

// if (bussinesHour(10)===true && businessDay(5)===true){
//     console.log('Es día y horario laboral');
// } else {
//     console.log('No es día ni horario laboral');
// }


// console.log(bussinesHour(8));
// console.log(businessDay(7);

// ///////////////////////////

//contar elementos true repetidos


// const array5 = [true,  false, false, true, true true];

// console.log(array5);





// let numberArr = [
//     [10, -20, 60],
//     [8, 10, 52],
//     [15, -5, 24],
//     [-26, 28, 43],
//     [12, 16, -51]
// ];  

// let sum = 0;

// numberArr.forEach(row => {
//     row.forEach(element => {
//         sum += element;
//     })
// })

// console.log(sum);

/////////////////////////////////
//Cambiar el valor de 0 a 1 y viceversa

// var num = 0;
// switch (num) {
  
//   case 0:
//     console.log('1  ');
    
//   case 1: 
//     console.log(0);
//     break; 
// }


////////////////////////////

//Conectados en messenger
// function conectados(num){
    
//   if (num <= 3 ){
//       console.log(num + "y una persona mas estan conectadas");
//   } else{
//       console.log(num + "y mas personas estan conectadas");
//   }
// }


////////////////////////
//Area de un pais con el area de la tierra

//   let tierra = 510000
//   let russia = 17000

//   let area = (russia / tierra  * .100);


//  console.log(area "% porciento de la tierra");



/////////////////////////////////////
//tethaedro y segun el nivel ver cuantos hay

// const tNum = (num) => {
//     return num === 1 ? 1 : num + tNum(num - 1);
//   };


// console.log(tNum(5)); 