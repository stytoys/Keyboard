function myFunction(event) {
    const x = event.keyCode;         // Get the Unicode value
    const y = String.fromCharCode(x);    // Convert the value into a character
    document.getElementById("demo").innerHTML = "Number: " + x + " = Character: " + y;
  }