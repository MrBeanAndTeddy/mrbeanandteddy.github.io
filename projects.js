function changePage() {
  // Navigate to the local page 'page2.html'
  window.location.href = 'index.html';
}

// Toogle Dark
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  // Optional: Save the user's preference in localStorage
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark);
}

// Optional: Load the preference on page load
window.onload = () => {
  const savedDark = localStorage.getItem("darkMode") === "true";
  if (savedDark) {
    document.body.classList.add("dark");
  }
  generateThought(); // show a new thought when the page loads
};
