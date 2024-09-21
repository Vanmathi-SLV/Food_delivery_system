// JavaScript function to add item to wishlist
function addToWishlist(itemName) {
    // Retrieve wishlist from localStorage
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // Check if item is already in wishlist
    if (wishlist.includes(itemName)) {
        alert("This item is already in your wishlist!");
    } else {
        wishlist.push(itemName);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert("Your item \"" + itemName + "\" is added to the wishlist.");
    }
}

// JavaScript function to remove item from wishlist
function removeFromWishlist(itemName) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // Check if item is in wishlist
    if (wishlist.includes(itemName)) {
        wishlist = wishlist.filter(item => item !== itemName); // Remove item
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert("Your item has been removed from your wishlist!");
        location.reload(); // Refresh page to reflect changes
    } else {
        alert("This item is not in your wishlist!");
    }
}