/* Encuentra el máximo */

export function maxOfTwoNumbers(a,b){
   if (a>b){ 
       return a;
   }   else { return b} 
}

    export function findLongestWord(words){
        let wordLongest = "";
        if(words.length === 0){
            return undefined;
        }
        for(let i=0; i<words.length; i++){
            if(words[i].length > wordLongest.length){
                wordLongest = words[i];
            }
        }
        return wordLongest;
    }
    
/*f(array.length === 0){
        return undefined;
    }
    let longestWord = "";
    for(let i = 0; i < array.length; i++){
        if(array[i].length > longestWord.length){
        longestWord = array[i];
        }
    }
    return longestWord;
}
En JavaScript el 0 es equivalente a falso. Este codigo:

if(array.length === 0){
        return undefined;
    }
Es sinónimo de:
if(!array.length){
        return undefined;
    }

*/
export function sumArray(array){
    let suma=0;
    
    for (let i= 0; i < array.length; i++){
        suma += array [i];  
        } 
    return suma;
    
}

/*Forma guay de hacerlo 
export function sumArray(nombreArray){
    const sumWithInitial = nombreArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
      0 );
        return  sumWithInitial
    }
*/    
export function averageNumbers(array){
 
    let averageAnswer= sumArray(array)/array.length;
    if(!array.length){
        return undefined;
    } else {
        return averageAnswer;

    }
}
    
    
    
    
    
export function doesWordExist(array, word){
  
   return array.lenght?array.includes(word):false;
}


export function averageWordLength(array){
    if(array.length){
        const newArray = array.map(e => e.length)
        return sumArray(newArray)/array.length
}
}

export function uniquifyArray(array){
    return array.length?Array.from(new Set(array)):undefined;
  


}

export function howManyTimes(){
    return array.length?array.reduce((ac,e)=>{
        let counter=0;
        if(e===word){
            counter++;
        }
        return ac+counter;
    },0):undefined;
}


export function greatestProduct(){
    
}





