//Imprimir n numeros de la serie fibonacci

var fibonacci = [];

     fibonacci[0] = 0;
     fibonacci[1] = 1;
      for (var i = 2; i < 30; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
console.log(fibonacci);


// encontrar el comun divisor de dos numeros 
const maximoComunDivisor = (a, b) => {

    if (b === 0) return a;
    return maximoComunDivisor(b, a % b);
};


console.log(maximoComunDivisor(10, 15))
////////////////////////////////////////////

let hr = new Date().getHours();
let day = new Date().getDay();

function bussinesHour(hr){
    
    if (hr >= 9 && hr<=18){
        return true;
    } else{
        return false;
    }
}




function businessDay(day){
    if(day>=1 && day<=5){
        return true;
    } else{
        return false;
    }
}

if (bussinesHour(10)===true && businessDay(5)===true){
    console.log('Es día y horario laboral');
} else {
    console.log('No es día ni horario laboral');
}


console.log(bussinesHour(8));
console.log(businessDay(7);






