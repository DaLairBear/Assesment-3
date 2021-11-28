const favColorButton = (event) =>{
    event.preventDefault()
    alert('My Favorite Color Is Orange!')
}
let color = document.querySelector('button#color')

color.addEventListener('click', favColorButton)

const favPlaceButton = (event) =>{
    event.preventDefault()
    alert('My Favorite Place Is Out In Nature!')
}
let place = document.querySelector('button#place')

place.addEventListener('click', favPlaceButton)

const favRitualButton = (event) =>{
    event.preventDefault()
    alert('My Favorite Ritual Is Loving On My Cat In The Morning!')
}
let ritual = document.querySelector('button#ritual')

ritual.addEventListener('click', favRitualButton)
