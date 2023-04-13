/* start: create an array of different random numbers */
function randArray(min, max, dim){

    /* INPUT:
        - min: minimum number
        - max: maximum number
        - dim: dimension of the array

       OUTPUT:
        - randArr: array with different random numbers */

    let randArr = [];
    if (dim > max){
        console.log( 'dimension of the array should be less than max. value' ); 
    } else {
        for (let i = 0; i < dim; i++){
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            while (randArr.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            }
            randArr.push(randomNumber);
        }
    }

    return randArr;

}
/* end: create an array of different random numbers */

/* -------------------------------------- */

/* print on page a list with random numbers */
let randArr = randArray(1, 100, 5);
for ( let i = 0; i < randArr.length; i++ ){
    document.getElementById('randNumbers').innerHTML += `<li>${randArr[i]}</li>`
}

/* cancel after 2 seconds (2000 ms) */
setTimeout( function(){
    document.getElementById('randNumbers').innerHTML = '';
}, 2000 )

/* generate prompt */
setTimeout( function(){

    /* create vector with user numbers */
    let userNum = [];
    for ( let i = 0; i < 5; i++ ){
        var promptnum = parseInt( prompt('Numero:') );
        userNum.push(promptnum);

        /* check if number is in randArr */
        if ( randArr.includes(userNum[i]) ){
            document.getElementById('randNumbers').innerHTML += `<li>Il numero selezionato è giusto: ${randArr[i]}</li>`
        } else {
            document.getElementById('randNumbers').innerHTML += `<li>Il numero selezionato non è giusto. Quello giusto era: ${randArr[i]}</li>`
        }


    }
    console.log(userNum)


    /* check if the user numbers are  */
    

} , 3000 )




