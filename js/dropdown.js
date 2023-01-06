const toggleDropdown = document.getElementById('toggle1');
const dropdownMenu = document.querySelector('.menu1');

// Add an event listener to the wrapper element that hides the dropdown menu
// when a click is detected outside of the wrapper element
document.addEventListener('click', (e) => {
  // Check if the click event occurred within the '.header-mobile' element
  if (!document.querySelector('.header-mobile').contains(e.target)) {
    // Check if the dropdown menu is currently visible
    console.log("test1");
    if (dropdownMenu.classList.contains('visible')) {
      // Hide the dropdown menu
      dropdownMenu.classList.remove('visible');
      toggleDropdown.checked = false;
      console.log("test2");
    }
  }
});

toggleDropdown.addEventListener('click', () => {
  dropdownMenu.classList.toggle('visible');
  console.log("test3");
});