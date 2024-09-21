document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('review-form');
    const reviewsList = document.getElementById('reviews-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const username = form.elements['username'].value;
        const reviewText = form.elements['review'].value;
        const rating = form.elements['rating'].value;

        // Create review element
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');

        reviewElement.innerHTML = `
            <div class="user-info">
                <h2>${username}</h2>
                <button class="remove-btn" onclick="removeReview(this.parentElement.parentElement)">Remove</button>
            </div>
            <div class="review-content">
                <p>${reviewText}</p>
                <div class="rating">${getStarRating(rating)}</div>
                <span class="date">${getCurrentDate()}</span>
            </div>
        `;

        // Add review to reviews list
        reviewsList.appendChild(reviewElement);

        // Reset form
        form.reset();
    });

    // Helper function to generate star rating
    function getStarRating(rating) {
        const filledStars = '★'.repeat(rating);
        const emptyStars = '☆'.repeat(5 - rating);
        return filledStars + emptyStars;
    }

    // Helper function to get current date in "Month Day, Year" format
    function getCurrentDate() {
        const currentDate = new Date();
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return currentDate.toLocaleDateString('en-US', options);
    }

    // Function to remove review
    window.removeReview = function(reviewElement) {
        reviewsList.removeChild(reviewElement);
    };
});
