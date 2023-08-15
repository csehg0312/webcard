function reqListener() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.dropbox.com/scl/fi/pz54g01rlj6qmkt5i2fy0/config.json?rlkey=xjkaiurm7w10xcrt2fivgsah4&raw=1", true);
    
    // If specified, responseType must be empty string or "text"
    xhr.responseType = "text";
    
    xhr.onload = () => {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
          console.log(xhr.response);
          console.log(xhr.responseText);
        }
      }
    };
    
    xhr.send();
    
}
  // Assuming you have an HTML button with the id "myButton"
const button = document.getElementById('myButton');

// Define a function to handle the button click event
function handleClick(event) {
  // Code to execute when the button is clicked
  console.log('Button clicked!');
}

// Attach the event listener to the button
button.addEventListener('click', reqListener);