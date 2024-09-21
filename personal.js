// Function to handle form submission
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input values
    var userName = document.getElementById("userName").value;
    var visitedRestaurant = document.getElementById("visitedRestaurant").value;
    var orderHistory = document.getElementById("orderHistory").value;

    // Create object to store user data
    var userData = {
        name: userName,
        restaurant: visitedRestaurant,
        orders: orderHistory
    };

    // Save user data to local storage (you can replace this with server-side storage)
    var savedUserData = JSON.parse(localStorage.getItem("userData")) || [];
    savedUserData.push(userData);
    localStorage.setItem("userData", JSON.stringify(savedUserData));

    // Redirect to the next page
    window.location.href = "next.html"; // Replace "nextpage.html" with the URL of your next page
});