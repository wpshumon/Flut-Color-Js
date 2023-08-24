
// let flutBox = document.querySelector('.flut-color-box');
// let flutarray= [...flutBox.children];   
// let popUpBox = document.querySelector('.popupBox');

// flutarray.forEach((value)=>{
//     let cssValues = window.getComputedStyle(value);
//     value.addEventListener('click',()=>{
//         let color = cssValues.backgroundColor;
//         let hexColor = hexColorGenerate(color)
//         popUpBox.style.backgroundColor = hexColor;
//         popUpBox.innerHTML = `
//             <h1>Copied!</h1>
//             <span>${hexColor}</span>`
//         navigator.clipboard.writeText(hexColor);
//         popUpBox.classList.add('active');
//         setTimeout(()=>popUpBox.classList.remove('active'),500)
//     })
// })

// function hexColorGenerate(value){
//     let slice = value.slice(4, -1);
//     let split = slice.split(", ")
//     let hexValue = split.map(values => {
//         newValue = parseInt(values).toString(16)
//         return newValue
//     })
//     let hexCode = hexValue.reduce((prev, curr)=> prev + curr)
//     return `#${hexCode}`
// }





/**
 * Project Name: FlatuiColors for Realtime Ui/Ux Design
 * Description: This Project for Ui/Ux Designer to use eye-catching colors for their templates.
 * Author Name: Tanjina Alam
 * Version: 1.0.0
 */

//Dependencies

let flutBox = document.querySelector('.flut-color-box');
let flutarray= [...flutBox.children];
let popUpBox = document.querySelector('.popupBox');

//Main Functionality

flutarray.forEach((value)=>{
    let cssValues = window.getComputedStyle(value);
    value.addEventListener('click',()=>{
        let arr = ["Copied!", "Paste Me!", "Right One!", "Got IT!", "Will DO!", "IT'll Rock!"];
        let randomtxt = Math.floor(Math.random() * arr.length)
        let color = cssValues.backgroundColor;
        let hexColor = hexColorGenerate(color)
        popUpBox.style.backgroundColor = hexColor;
        popUpBox.innerHTML = `
            <h1>${arr[randomtxt]}</h1>
            <span>${hexColor}</span>`
        navigator.clipboard.writeText(hexColor);
        popUpBox.classList.add('active');
        let audioTag = document.createElement('audio')
        audioTag.setAttribute("src", "./mp3/copied.m4a")
        audioTag.classList.add('audio')
        document.body.append(audioTag)
        audioTag.play()
        setTimeout(()=>{
            popUpBox.classList.remove('active');
            audioTag.remove()
    },500)
    })
})

//Hexadecimal Color code Generator function

function hexColorGenerate(value){
    let slice = value.slice(4, -1);
    let split = slice.split(", ")
    let hexValue = split.map(values => {
        newValue = parseInt(values).toString(16)
        return newValue
    })
    let h = hexValue[0].length == "1" ? "0" + hexValue[0] : hexValue[0];
    let e = hexValue[1].length == "1" ? "0" + hexValue[1] : hexValue[1];
    let x = hexValue[2].length == "1" ? "0" + hexValue[2] : hexValue[2];
    let hex = h + e + x;
    return `#${hex}`
}
