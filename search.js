document.addEventListener('DOMContentLoaded', function() {
    // Function to filter items based on search query
    function filterItems(query) {
        const items = document.querySelectorAll('.item-card');
        items.forEach(function(item) {
            const itemName = item.querySelector('#item-name').textContent.toLowerCase();
            if (itemName.includes(query.toLowerCase())) {
                item.style.display = 'block'; // Show the item if it matches the query
            } else {
                item.style.display = 'none'; // Hide the item if it doesn't match the query
            }
        });
    }

    // Event listener for search input
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', function(event) {
        const query = event.target.value.trim(); // Get the search query and remove leading/trailing whitespace
        filterItems(query);
    });

    // Event listener for search icon (optional, if clicking the search icon should trigger the search)
    const searchIcon = document.getElementById('search-icon');
    searchIcon.addEventListener('click', function() {
        const query = searchInput.value.trim(); // Get the search query from the input field
        filterItems(query);
    });
});
