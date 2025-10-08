let frequencyList = document.querySelectorAll('.frequency-list li')
const frequenceArray = Array.from(frequencyList)

frequenceArray.forEach(function(item) {

    item.addEventListener('click', () => {   
        frequenceArray.forEach(item => {
            item.classList.remove('color')
        })
        item.classList.add('color')
    })
})

// 

let counter = document.querySelectorAll('.dot li')
let counterArray = Array.from(counter)

counterArray.forEach(function(item) {
    item.addEventListener('click', () => {
        item.classList.toggle('color')
    })  
})