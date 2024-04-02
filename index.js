// Your code goes here

// document.addEventListener("DOMContentLoaded", function(){
//     console.log("This is really cool!");
// })
// console.log(
//     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
//   );
document.addEventListener("DOMContentLoaded", function(){
    //selects the element we want to modify
    let texts = document.getElementById("text")
    //changes  the text element 
    texts.textContent = "This is really cool!";
});