// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Dan Secord" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')

    // TODO: Write the code to be run when the buttons for "Gingerbread" are clicked
})
var count1 = 0;
var up1 = document.getElementById("add-gb");
var qtygb = document.getElementById("qtygb");
var dwn1 = document.getElementById("minus-gb");


up1.onclick = function () {
    count1++;
    if(count1<0){
        count1 = 0
    }
    qtygb.innerHTML = count1;
}
dwn1.onclick = function () {
    count1--;
    if(count1<0){
        count1=0
    }
    qtygb.innerHTML = count1;
    }
    // TODO: Write the code to be run when the buttons for "Chocolate Chip" are clicked
var count2 = 0;
var up2 = document.getElementById("add-cc");
var qtycc = document.getElementById("qtycc");
var dwn2 = document.getElementById("minus-cc");


up2.onclick = function () {
    count2++;
    if(count2<0){
        count2 = 0
    }
    qtycc.innerHTML = count2;
}
dwn2.onclick = function () {
    count2--;
    if(count2<0){
        count2=0
    }
    qtycc.innerHTML = count2;
    }

    // TODO: Write the code to be run when the buttons for "Sugar Sprinkle" are clicked
var count3 = 0
var up3 = document.getElementById("add-sugar");
var qtysugar = document.getElementById("qtysugar");
var dwn3 = document.getElementById("minus-sugar");


up3.onclick = function () {
    count3++;
    if(count3<0){
        count3 = 0
    }
    qtysugar.innerHTML = count3;
}
dwn3.onclick = function () {
    count3--;
    if(count3<0){
        count3=0
    }
    qtysugar.innerHTML = count3;
}
    // TODO: Write the code to total all cookies ordered
        all.innerHTML = count1 + count2 + count3;
    
    
