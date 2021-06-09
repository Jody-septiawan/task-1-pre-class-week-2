document.getElementById("odd").addEventListener("click", function() {

    let number = document.getElementById("number-input").value;

    let myArray = [];

    for (let i = 1; i <= number; i++){
        if(i % 2 == 0){
            myArray.push(i)
        }
    }

    number = myArray.join('    ')

    document.getElementById("series-show").innerHTML = number
    document.getElementById("number-input").value = ''

});

document.getElementById("even").addEventListener("click", function() {

    let number = document.getElementById("number-input").value;

    let myArray = [];

    for (let i = 1; i <= number; i++){
        if(i % 2 != 0){
            myArray.push(i)
        }
    }
    
    number = myArray.join('    ')

    document.getElementById("series-show").innerHTML = number
    document.getElementById("number-input").value = ''
    
});

function checkPrime(value) {
    var max = Math.sqrt(value);
    for( var i = 2;  i <= max;  i++ ) {
        if( value % i == 0 )
            return false;
    }
    return true;
}

document.getElementById("prime").addEventListener("click", function() {
    let number = document.getElementById("number-input").value;

    let myArray = [];

    for( let i = 2;  i <= number;  i++ ) {
        if( checkPrime(i) ) {
            myArray.push(i)
        }
    }

    number = myArray.join('    ')

    document.getElementById("series-show").innerHTML = number
    document.getElementById("number-input").value = ''

});