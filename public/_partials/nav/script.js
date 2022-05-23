/* eslint-disable */

/* Adds listener to close navigation modal with esc key */
(function () {
  const navSwitch = document.getElementById('menuSwitch');

  if (navSwitch) {
    document.addEventListener('keydown', (event) => {
      if (navSwitch.checked && event.keyCode === 27) {
        navSwitch.checked = false;
      }
    });
  }
})();
