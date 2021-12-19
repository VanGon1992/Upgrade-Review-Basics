'use strict'

const animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        array[i].indexOf(text)
    }
}

console.log(findArrayIndex(animales, 'Mosquito'))