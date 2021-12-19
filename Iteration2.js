'use strict'

const users = [{
        name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 50 },
            rain: { format: 'ogg', volume: 60 },
            firecamp: { format: 'mp3', volume: 80 },
        }
    },
    {
        name: 'Mortadelo',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 30 },
            shower: { format: 'ogg', volume: 55 },
            train: { format: 'mp3', volume: 60 },
        }
    },
    {
        name: 'Super Lopez',
        favoritesSounds: {
            shower: { format: 'mp3', volume: 50 },
            train: { format: 'ogg', volume: 60 },
            firecamp: { format: 'mp3', volume: 80 },
        }
    },
    {
        name: 'El culebra',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 67 },
            wind: { format: 'ogg', volume: 35 },
            firecamp: { format: 'mp3', volume: 60 },
        }
    },
]

let getMedia = (arr) => {
    let cantidad = 0
    let total = 0
    for (let user of arr) {
        for (let property in user.favoritesSounds) {
            total += user.favoritesSounds[property].volume
            cantidad++
            // user.favoritesSounds.firecamp.volume
            //'For in' se usa mas para iterar objetos, y 'For of' para iterar arrays. 'For of' devuelve el valor de la propiedad iterada y 'For in' el indice
            // Si la propiedad a la que se accede es la misma para todos los objetos se puede usar '.', sino hay que usar '[]'
        }
        let media = total / cantidad
        return media
    }
    console.log(total)
    console.log(cantidad)
}

let result = getMedia(users)
console.log('La media es: ' + result)