//    TODO:  this code runs on browser but gives error in terminal because windows elements are targeted in this script file

const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor); // if we just grab "windows.getComputedStyle(red)" then all the styling of a particular element will pop up in the inspect section of the browser 
// ? when writing backgound color in css we write as background-color but when grabing a style from "windows.getComputedStyle()" we will say backgroundColor

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor ;
}
// console.log(getBGColor(red));

// ? just to see the color changing for one element
// var color =  getBGColor(pink);

// pink.addEventListener('click', ()=>{
//     center.style.background = color;
// });

// ? call back function
const magicColorChanger = (element, color)=>{
    return element.addEventListener('mouseenter', ()=>
        {
        // change the background color
        center.style.background = color;  // style is used to impliment style whereas getComputedStyle is used to fetch the style

        // //? Set a timer to revert back to normal after 3 seconds
        // setTimeout(() => {
        //     center.style.background = ""; // Reset to the original background
        // }, 3000);

        //? Revert the background color on mouseleave
        element.addEventListener('mouseleave', () => 
            {
                center.style.background = ""; // Reset to the original background
            });
        });
}

magicColorChanger (red , getBGColor(red));
magicColorChanger (cyan , getBGColor(cyan));
// magicColorChanger (violet , getBGColor(violet));  
magicColorChanger (orange , getBGColor(orange));
magicColorChanger (pink , getBGColor(pink));


//   *   TODO:
//   ?   FIXME:
//   !   