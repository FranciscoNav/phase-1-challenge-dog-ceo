const initialize = () => {
    const dogPic = document.getElementById('dog-image-container')
    
    //Challenge 1: (Below)
    fetch(`https://dog.ceo/api/breeds/image/random/4`)
    .then(response => response.json())
    .then(imgArry => {
        imgArry.message.forEach(element => {
            dogPic.innerHTML += `<img src="${element}" alt="dog pic">`
        });
    })

    //Challenge 2:
    function renderDogs(dogData) {
       
       for (const breedname of dogData){ 
           const li= document.createElement('li')
           li.innerText = breedname
           const dogBreed = document.querySelector('ul#dog-breeds')
            dogBreed.appendChild(li)
            //Challenge 3: 
            li.addEventListener('click', () => li.style.color= 'purple' )
           }
       }
    fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(responseBreeds => responseBreeds.json())
    .then(json => renderDogs(Object.keys(json.message)))
    
    //Challenge 4: 
    const filterTest = (event) => {
            const resultA =  dogs.filter(arry => arry[0] === event.target.value)
            const dogBreed = document.querySelector('ul#dog-breeds')
            dogBreed.querySelectorAll('*').forEach(n => n.remove());
            renderDogs(resultA)
    }
    document.getElementById('breed-dropdown').addEventListener('change', filterTest)
}

document.addEventListener('DOMContentLoaded', initialize)






