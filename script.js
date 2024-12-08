/* Reset basic styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    height: 100vh; /* Full height of the viewport */
    display: flex; /* Flexbox layout */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    background-color: #f4f4f9; /* Light background color */
    font-family: Arial, sans-serif;
}

.content-container {
    display: flex; /* Flexbox layout for image and button */
    align-items: center; /* Align items vertically */
    gap: 20px; /* Space between image and button */
    opacity: 1; /* Fully visible by default */
    transition: opacity 0.5s ease; /* Smooth transition when displayed */
}

.hidden {
    opacity: 0; /* Fully transparent */
    visibility: hidden; /* Hides it from layout (not clickable) */
}

.centered-image {
    position: fixed; /* Cover the entire screen */
    top: 0;
    left: 0;
    width: 100%; /* Full width of the screen */
    height: 100%; /* Full height of the screen */
    background-image: url('your-image.jpg'); /* Fullscreen background image */
    background-size: cover; /* Makes the image cover the entire screen */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    opacity: 1; /* Fully visible by default */
    transition: opacity 0.5s ease; /* Smooth transition when displayed */
}
.play-button {
    background-color: #00000000; /* Button background color */
    color: #fff; /* White text */
    position: absolute; /* Position relative to the container */
    bottom: 20px; /* Position from the bottom */
    right: 20px; /* Position from the right */
    width: 60px; /* Set width of the play icon */
    border: none; /* No border */
    padding: 15px 30px; /* Padding for button */
    font-size: 18px; /* Font size of button text */
    border-radius: 5px; /* Rounded corners */
    cursor: pointer; /* Pointer cursor on hover */
    transition: background-color 0.3s ease; /* Smooth hover transition */
}

