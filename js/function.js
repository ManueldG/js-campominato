
/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns valore casuale compreso tra min e max
 */
function random(min, max) {
    return Math.floor(Math.random() *(max - min + 1 ) + min );
}

//*******************************************************************


/**
 * 
 * @param {number} array array di valori
 * @param {number} value valore da cercare 
 * @returns {boolean} se esiste "value" ritorna true
 */
function isExist(array,value){
    return array.includes(value);
}

// ********************************************************************

/**
 * 
 * @param {number} matrix passo la matrice monodimensionale 
 * @param {number} val numero di elementi random da inserire   
 * @returns {number} ritorna la matrice popolata
 */
function theFiller (matrix,val,min,max){
    while (matrix.length < val){
        var rand = random(min,max);
        if (!matrix.includes(rand)) 
        matrix.push(rand);
    }
    return matrix;
}

// **************************************************************************



