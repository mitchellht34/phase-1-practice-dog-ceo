console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const breedUrl = "httpS://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () => {
    fetch(imgUrl)
        .then((response) => response.json())
        .then((data) => {
            const dogImageContainer = document.getElementById("dog-image-container");
            data.message.forEach((element) => {
                const image = document.createElement("img");
                image.src = element;
                dogImageContainer.appendChild(image);
            });
        })
    fetch(breedUrl)
        .then((response) => response.json())
        .then((data) => {
            const dogBreeds = document.getElementById("dog-breeds");
            for(const element in data.message) {
                const breed = document.createElement("li");
                breed.innerText = element;
                dogBreeds.appendChild(breed);
                breed.addEventListener('click', () => {
                    breed.style.color = 'green';
                })
            }
            const allBreeds = document.querySelectorAll('li');
            const dropdown = document.getElementById('breed-dropdown')
            dropdown.addEventListener('change', () => {
                allBreeds.forEach((element) => {
                    dogBreeds.appendChild(element);
                })
                allBreeds.forEach((element) => {
                    if(!element.innerText.startsWith(dropdown.value)){
                        element.remove();
                    }
                })
            })
        })
})