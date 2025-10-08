let frequencyList = document.querySelectorAll('.frequency-list li')
const frequenceArray = Array.from(frequencyList)

frequenceArray.forEach(function(item) {

    item.addEventListener('click', () => {   
        frequenceArray.forEach(item => {
            item.classList.remove('cor')
        })
        item.classList.add('cor')
    })
})

