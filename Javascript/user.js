// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get the span element where the user's name will be displayed
    const userNameDisplay = document.getElementById('user-name-display');

    // Retrieve the username from local storage.
    // If no name is found, it defaults to 'Guest'.
    const userName = localStorage.getItem('currentUserName') || 'Guest';

    // Check if the element exists to avoid errors, then update its text content
    if (userNameDisplay) {
        userNameDisplay.textContent = userName;
    }
});
