if (navigator.serviceWorker) {
  window.addEventListener('load', () => {
   navigator.serviceWorker.register('./service-worker.js')
      .then(registration => console.log('SW registered'))
    .catch(err => console.log(`SW not registered - Error: ${err}`))
  })
} else {
  console.log('Service Worker is not supported in this browser.')
}

// function to change background image
const changeBackground = () => {
  var select = document.getElementById("backgroundSelector");
  if(select.options[select.selectedIndex].value !== "") {
    var selectedImage = select.options[select.selectedIndex].value;
    document.body.style.backgroundImage = `url('${selectedImage}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  } else {
    document.body.style.backgroundImage = "";
    document.body.style.color = "#ffffff";
  }
}



/* extra credit of local storage starts here */

const saveName = () => {
      var nameInput = document.getElementById('name');
      var name = nameInput.value;

      if (name.trim() !== '') {
          localStorage.setItem('username', name);

          displayStoredName();
      }
  };

 const displayStoredName = () => {
      var storedName = localStorage.getItem('username');
      if(storedName) {
        document.getElementById("display").innerHTML = `Hello, ${storedName}, glad to see you back!`;
      } else {
        document.getElementById("display").innerHTML = '';
      }
  };


  document.getElementById('name').addEventListener('blur', () => {
    saveName();
  });
  

  // Initial display when the page loads
  displayStoredName();

  /* extra credit of local storage ends here */
