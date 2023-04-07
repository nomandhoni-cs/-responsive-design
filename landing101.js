const darkModeButton = document.getElementById('dark-mode-button');
const purpleModeButton = document.getElementById('purple-mode-button');
const body = document.querySelector('body');

let purpleMode = false;
let darkMode = false;
let defaultMode = true;
darkModeButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  if (darkMode) {
    darkModeButton.innerText = 'Dark Mode';
    darkMode = false;
  }
  else if (purpleMode) {
    darkModeButton.innerText = 'Light Mode';
    darkMode = false;
  }
  else {
    darkModeButton.innerText = 'Light Mode';
    darkMode = true;
  }

});
purpleModeButton.addEventListener('click', function() {
  body.classList.toggle('purple-mode');
  if (purpleMode) {
    purpleModeButton.innerText = 'Purple Mode';
    purpleMode = false;
  } else if (darkMode) {
    purpleModeButton.innerText = 'Dark Mode';
    purpleMode = false;
  }
  else {
    purpleModeButton.innerText = 'Light Mode';
    purpleMode = true;
  }
});

