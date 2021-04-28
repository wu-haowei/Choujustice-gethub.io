function $g(selector) {
    if (selector.includes('#') && !selector.includes(' ')) {
        return document.querySelector(selector);
    }
    let nodelist = document.querySelectorAll(selector);

    return nodelist.length == 1 ? nodelist[0] : nodelist;

}



// function getRandom(min, max) {
//     return Math.floor(Math.random() * max + min);
// }


// let array = [...Array(100).keys()]
// array.forEach((key,index)=>{
//     console.log(getRandom(1, 100))
// })


// function getRandom(min, max) {
//     return Math.floor(Math.random() * max + min);
// }

// for(let i=getRandom.length-1;i<=100;i++){
//     console.log(getRandom(1, 100))
// }

export { $g };
