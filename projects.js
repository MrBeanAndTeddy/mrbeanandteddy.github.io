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

// User Thoughts
function submitThought(event) {
  event.preventDefault();
  const userThought = document.getElementById('userThought').value;
  currentThoughts.push(userThought);  // Add to the thoughts array
  document.getElementById('thought').textContent = userThought;
}


// Function to retrieve thoughts from localStorage
function loadSubmittedThoughts() {
  const storedThoughts = JSON.parse(localStorage.getItem('userThoughts')) || [];
  const list = document.getElementById('submittedThoughtsList');
  list.innerHTML = ''; // Clear the list before displaying
  storedThoughts.forEach(thought => {
    const listItem = document.createElement('li');
    listItem.textContent = thought;
    list.appendChild(listItem);
  });
}

// Function to submit a new thought
function submitThought(event) {
  event.preventDefault(); // Prevent form submission
  
  const userThought = document.getElementById('userThought').value;
  
  // If the user thought is empty, don't do anything
  if (!userThought.trim()) {
    alert("Please enter a valid thought.");
    return;
  }

  // Retrieve the current list of thoughts from localStorage
  const storedThoughts = JSON.parse(localStorage.getItem('userThoughts')) || [];

  // Add the new user thought to the array
  storedThoughts.push(userThought);

  // Save the updated array back to localStorage
  localStorage.setItem('userThoughts', JSON.stringify(storedThoughts));

  // Clear the input field
  document.getElementById('userThought').value = '';

  // Update the list of submitted thoughts
  loadSubmittedThoughts();
}

// Call the function to load the stored thoughts when the page loads
window.onload = loadSubmittedThoughts;
