//1 pound equals 16oz
const container = document.querySelector('#container');
const mass = document.querySelector('#mass')
const ul = document.querySelector('ul')
const hidden = document.querySelector('#hidden-container')
const container2 = document.querySelector('#container2');



const func = () => {
    mass.addEventListener('click', () => {
        hidden.style.display = "block"
    })
    if (true) {
        mass.add
    }

    //big problem that you were having was that it was saying two arguments, the reason for this is that we were doubling the parenthesis.
}
func()


// we always have the problem where we can only do the event listener once. Meaning we click, and then we can't anymore until we refresh page again.
mass.addEventListener("click", func)




