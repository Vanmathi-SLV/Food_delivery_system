document.addEventListener("DOMContentLoaded", function() {
    displayCustomerDetails();
});

function displayCustomerDetails() {
    var savedUserData = JSON.parse(localStorage.getItem("userData")) || [];
    var customerDetailsContainer = document.getElementById("customerDetails");

    // Clear previous data
    customerDetailsContainer.innerHTML = "";

    // Display each user's data
    savedUserData.forEach(function(userData, index) {
        var customerElement = document.createElement("div");
        customerElement.innerHTML = "<strong>Userame : </strong> " + userData.name + "<br>" +
                                     "<strong>Visited Restaurant : </strong> " + userData.restaurant + "<br>" +
                                     "<strong>Order History : </strong> " + userData.orders +
                                     "<button class='remove-button' data-index='" + index + "'>Remove</button><hr>";
        customerDetailsContainer.appendChild(customerElement);
    });

    // Add event listeners to remove buttons
    var removeButtons = document.querySelectorAll(".remove-button");
    removeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var index = parseInt(this.getAttribute("data-index"));
            removeUserData(index);
            displayCustomerDetails(); // Refresh the displayed details after removal
        });
    });
}

function removeUserData(index) {
    var savedUserData = JSON.parse(localStorage.getItem("userData")) || [];
    savedUserData.splice(index, 1);
    localStorage.setItem("userData", JSON.stringify(savedUserData));
}