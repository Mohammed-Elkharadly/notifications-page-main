// Selecting the button, notifications, and articles
const btn = document.querySelector(".btn");
const notifications = document.querySelectorAll(".icon");
const articles = document.querySelectorAll("article");

// Adding a click event listener to the button
btn.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  hideNotifications();
}

// Function to hide notifications and update article styles
function hideNotifications() {
  notifications.forEach((notification, index) => {
    // notification = The value of the current element.
    notification.classList.add("none");
    // index = The index of the current element.
    articles[index].classList.add("bg-white");
  });
}

// Adding click event listeners to each article
articles.forEach((article, index) => {
  // Using an arrow function to pass the index to handleArticleClick
  article.addEventListener("click", () => handleArticleClick(index));
});

// Function to handle article clicks
function handleArticleClick(index) {
  // Hiding the notification and updating the article style for the clicked article
  notifications[index].classList.add("none");
  articles[index].classList.add("bg-white");
}
