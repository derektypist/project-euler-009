// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if the input is valid
    if (isNaN(num) || num.toString().length == 0 || num<6 || num>10000 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 6 and 10000.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `Product is ${specialPythagoreanTriplet(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to return the product of a,b,c which are Pythagorean Triplet
    that satisfies the following
        1. a < b < c
        2. a**2 + b**2 = c**2
        3. a + b + c = n
*/
function specialPythagoreanTriplet(n) {
    for (let a=1;a<n;a++) {
        for (let b=a;b<n;b++) {
            let c = n-a-b;
            if (c>0) {
                if (c**2 == a**2 + b**2) return a*b*c;
            }
        }
    }
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}