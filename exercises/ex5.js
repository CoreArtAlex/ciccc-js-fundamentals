/*

Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"

Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...

const shirtWidth = 23; // size L (large)
const shirtLength = 30; // size L (large)
const shirtSleeve = 8.71; // size L (large)

Then print L to the console. 

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print NA to the console. For example, if...

var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.

*/

let size = "";
let width = 24;
let lenght = 31;
let sleeve = 20;

if ( width <= 18 && lenght <= 28 && sleeve <= 8.13){
    size = "S"
    console.log("Size: " + size);
}else if (width > 18 && width <= 20 && lenght > 28 && lenght <= 29 && sleeve > 8.13 && sleeve <= 8.38){
    size = "M"
    console.log("Size: " + size);
}else if (width > 20 && width <= 22 && lenght > 29 && lenght <= 30 && sleeve > 8.38 && sleeve <= 8.63){
    size = "L"
    console.log("Size: " + size);
}else if (width > 22 && width <= 24 && lenght > 30 && lenght <= 31 && sleeve > 8.63 && sleeve <= 8.88){
    size = "XL"
    console.log("Size: " + size);
}else if (width > 24 && width <= 26 && lenght > 31 && lenght <= 33 && sleeve > 8.88 && sleeve <= 9.63){
    size = "2XL"
    console.log("Size: " + size);
}else if (width > 26 && width <= 28 && lenght > 33 && lenght <= 34 && sleeve > 9.63 && sleeve <= 10.13){
    size = "3XL"
    console.log("Size: " + size);
}else{
    console.log("Size: NA");
}