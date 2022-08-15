/**
 * Author Camesha Goods 
 * Date:August 13 2022
 * Description: This project uses CSS, HTML, and JavaScript
 * to create a simple program that loads a picture from
 * opaque to clear, 0-100.
 */
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

/*brings in classes from styles. css*/

let load = 0
/*having the picturestart over milisecond */
let int = setInterval(blurring, 30)


function blurring(){
    load++

    /*if the picture gets to 99, it will stop */
    if(load > 99){
        clearInterval(int)
    }
    //loadText.innerText = load
    loadText.innerText = `${load}%`
    loadText.style.opacity = (100 - load)/100
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
     /*starting opaque to clear*/
    
}/* style from stack overflow.*/
/*https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers*/
const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}



