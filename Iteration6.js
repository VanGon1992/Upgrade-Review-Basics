'use strict'

let arr = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']


// function swap(arr, index1, index2) {
//     let auxi = arr[index1]
//     arr[index1] = arr[index2]
//     arr[index2] = auxi
//     console.log(arr)

// }
// swap(arr, 1, 3)

let swap = (arr, index1, index2) => {
    let auxi = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = auxi
    console.log(arr)
}

swap(arr, 1, 3)