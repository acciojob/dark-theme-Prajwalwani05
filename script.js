//your code here

function swapTheme() {
  var appDiv = document.getElementById('app');
  var swapButton = document.getElementById('swap');

  if (appDiv.classList.contains('day')) {
    // Switch to dark theme
    appDiv.classList.remove('day');
    appDiv.classList.add('night');
  } else {
    // Switch to light theme
    appDiv.classList.remove('night');
    appDiv.classList.add('day');
  }
}

// Attach the event listener to the button click
document.getElementById('swap').addEventListener('click', swapTheme);
