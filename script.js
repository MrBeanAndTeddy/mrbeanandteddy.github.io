const translations = {
    en: [
      "If we can’t see air, can fish see water?",

      "Your stomach thinks all potatoes are mashed.",

      "If we can’t see air, can fish see water?",

      "Your stomach thinks all potatoes are mashed.",
  
      "Nothing is on fire, fire is on things.",
  
      "You never actually touch anything – atoms repel each other.",
  
      "When you say ‘forward’ or ‘back’, your lips move in that direction.",
  
      "Every mirror is technically in a time machine: you see the past, even if just nanoseconds ago.",
  
      "If time is money, an ATM is a time machine.",
  
      "Someone taught the first teacher without being a teacher.",
  
      "Your shadow is proof that light has mass… kind of.",
  
      "We eat mushrooms that can kill us, and mushrooms that can save us. And we barely tell the difference.",
  
      "The brain named itself.",
  
      "You only realize how fast you're moving when you stop.",
  
      "You never truly stop clapping. The time between claps just gets longer.",
  
      "Technically, we're all time travelers — just very slowly and only forward.",
  
      "At some point, your parents put you down and never picked you up again.",
  
      "Your future self is talking crap about you right now for not starting sooner.",
  
      "You’ve probably walked past someone you’ve seen in a dream.",
  
      "We cook dead animals with the heat of a dead star to feed the living. That’s poetic.",
  
      "Maybe plants are farming us by giving us oxygen until we die and feed them.",
  
      "If you get out of the shower clean, how does your towel get dirty?",
  
      "Every time you clean something, you just move dirt somewhere else.",
  
      "‘Nothing’ is impossible to imagine because imagining ‘nothing’ is something.",
      
      "Aliens might have visited us already and left because Earth has terrible Yelp reviews."
    ],
    es: [
      "Si no podemos ver el aire, ¿los peces pueden ver el agua?",

      "Tu estómago piensa que todas las papas están machacadas.",
      // ...
    ],
    fr: [
      "Si on ne peut pas voir l'air, les poissons peuvent-ils voir l'eau ?",

      "Ton estomac pense que toutes les pommes de terre sont en purée.",
      // ...
    ],
    sv: [
        "Om vi inte kan se luft, kan fiskar se vatten?",
        // ...
    ]
  };
  
  let currentLanguage = 'en';


// Generate a thought based on selected language
function generateThought() {
  const currentThoughts = translations[currentLanguage];
  const randomIndex = Math.floor(Math.random() * currentThoughts.length);
  document.getElementById('thought').textContent = currentThoughts[randomIndex];
}

// Handle language change
function changeLanguage() {
  const select = document.getElementById('languageSelect');
  currentLanguage = select.value;
  generateThought();
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
    document.getElementById('darkModeToggle').checked = true;
  }
  generateThought(); // show a new thought when the page loads
};

function changePage() {
  // Navigate to the local page 'page2.html'
  window.location.href = 'thoughts.html';
}