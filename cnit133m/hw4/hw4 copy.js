if (navigator.serviceWorker) {
  window.addEventListener('load', () => {
   navigator.serviceWorker.register('./service-worker.js')
      .then(registration => console.log('SW registered'))
    .catch(err => console.log(`SW not registered - Error: ${err}`))
  })
} else {
  console.log('Service Worker is not supported in this browser.')
}


function changeBackground() {
  var select = document.getElementById("backgroundSelector");
  var selectedImage = select.options[select.selectedIndex].value;
  document.body.style.backgroundImage = "url('" + selectedImage + "')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}


/* extra credit of local storage starts here */
    // Function to save name to local storage
    function saveName() {
      var nameInput = document.getElementById('name');
      var name = nameInput.value;

      // Check if name is not empty
      if (name.trim() !== '') {
          // Save the name to local storage
          localStorage.setItem('username', name);

          // Display the name in the div
          displayStoredName();
      }
  }

  // Function to display stored name
  function displayStoredName() {
      // var displayDiv = document.getElementById('display');
      var storedName = localStorage.getItem('username');

      // // Check if a name is stored
      // if (storedName) {
      //     displayDiv.textContent = `Hello, ${storedName}, glad to see you back!`
      // } else {
      //     displayDiv.textContent = ''; // Clear the display if no name is stored
      // }
      if(storedName) {
        document.getElementById("display").innerHTML = `Hello, ${storedName}, glad to see you back!`;
        
      } else {
        document.getElementById("display").innerHTML = '';
      }
  }

  // Add event listener to the input for saving the name when the cursor leaves
  document.getElementById('name').addEventListener('blur', function () {
      saveName();
  });

  // Initial display when the page loads
  displayStoredName();

  /* extra credit of local storage ends here */