// Builds and shows the personalized content for a given name and age
function showUser(name, age) {
  age = Number(age);

  // Age in months
  let months = age * 12;

  // Check if the user is over 18
  let adultMessage;
  if (age > 18) {
    adultMessage = "✅ You can access adult content.";
  } else {
    adultMessage = "🚫 You are too young for adult content.";
  }

  // Build the motivational quote five times using a loop
  let quote = "There is no definition to being perfect, you’re perfect at being yourself";
  let quotes = "";
  for (let i = 0; i < 5; i++) {
    quotes += `<p class="quote">${quote}</p>`;
  }

  // Write everything to the page in one go
  document.getElementById("output").innerHTML = `
    <h2>Hi ${name}, great to see you! 🎉</h2>
    <p>You are about ${months} months old.</p>
    <p>${adultMessage}</p>
    ${quotes}
  `;
}

// Runs when the form is submitted
document.getElementById("userForm").onsubmit = function (e) {
  e.preventDefault(); // stops the page from reloading

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  // Save to localStorage so it stays after refresh
  localStorage.setItem("name", name);
  localStorage.setItem("age", age);

  showUser(name, age);
};

// When the page loads, show the saved user if there is one
let savedName = localStorage.getItem("name");
let savedAge = localStorage.getItem("age");
if (savedName !== null && savedAge !== null) {
  showUser(savedName, savedAge);
}