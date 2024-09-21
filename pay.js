function showPaymentForm() {
  document.getElementById('paymentFormPopup').style.display = 'block';
}

function submitPayment() {
  // Get address details
  var address = document.getElementById('address').value.trim();
  var city = document.getElementById('city').value.trim();
  var postalCode = document.getElementById('postalCode').value.trim();
  
  // Validate address
  if (address === '' || city === '' || postalCode === '') {
    alert('Please fill out the address fields.');
    return;
  }
  
  // Get payment details
  var cardNumber = document.getElementById('cardNumber').value.trim();
  var expiryDate = document.getElementById('expiryDate').value.trim();
  var cvv = document.getElementById('cvv').value.trim();
  
  // You can perform further validation on payment details here
  
  // Display address and submit payment
  alert('Address: ' + address + ', ' + city + ', ' + postalCode + '\nYour order has been successfully placed!');
}

// Function to get the user's current location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

// Function to display the current position and populate address fields
function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Send a request to the Google Maps Geocoding API to convert coordinates into an address
  const geocodingApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`;
  
  fetch(geocodingApiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.status === "OK") {
        const addressComponents = data.results[0].address_components;
        
        // Extract relevant address components
        let address = "";
        let city = "";
        let postalCode = "";

        for (let component of addressComponents) {
          if (component.types.includes("street_address")) {
            address = component.long_name;
          }
          if (component.types.includes("locality")) {
            city = component.long_name;
          }
          if (component.types.includes("postal_code")) {
            postalCode = component.long_name;
          }
        }

        // Populate address fields
        document.getElementById("address").value = address;
        document.getElementById("city").value = city;
        document.getElementById("postalCode").value = postalCode;
      } else {
        alert("Reverse geocoding failed. Please try again later.");
      }
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching address. Please try again later.");
    });
}

// Event listener for the button
document.getElementById("get-location-btn").addEventListener("click", getLocation);
