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

    // Display Information in the browser
    document.getElementById("numinfo").innerHTML = txt;
}