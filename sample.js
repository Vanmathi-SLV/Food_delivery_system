document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartUI() {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = '';

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <div>${item.name}</div>
                <div>${item.quantity}</div>
                <div>₹${item.price * item.quantity}</div>
                <button class="remove-item" data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        updateTotal();
        updateCartCount();
    }

    function addToCart(item) {
        const existingItemIndex = cart.findIndex(i => i.name === item.name);
    
        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += item.quantity;
        } else {
            cart.push(item);
        }
    
        updateCartUI();
        saveCartToLocalStorage();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartUI();
        saveCartToLocalStorage();
    }

    function updateTotal() {
        const totalElement = document.getElementById('total');
        const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        totalElement.textContent = total;
    }

    function updateCartCount() {
        const cartCount = document.getElementById('cart-plus');
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartCount.textContent = totalItems + ' Items';
    }

    function saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', handleAddToCartClick);
    });

    function handleAddToCartClick(event) {
        const itemCard = event.target.closest('#item-card');
        const itemName = itemCard.querySelector('#item-name').textContent;
        const itemPrice = parseInt(itemCard.querySelector('#item-price').textContent.split(':')[1].trim());
        const itemQuantity = parseInt(itemCard.querySelector('.quantity-input').value);

        const item = {
            name: itemName,
            price: itemPrice,
            quantity: itemQuantity
        };

        addToCart(item);
    }

    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-item')) {
            const index = parseInt(event.target.getAttribute('data-index'));
            removeFromCart(index);
        }
    });

    const cartIcon = document.getElementById('cart-plus');
    const cartSection = document.getElementById('cart-section');
    cartIcon.addEventListener('click', function() {
        if (cartSection.style.display === 'none') {
            cartSection.style.display = 'block';
        } else {
            cartSection.style.display = 'none';
        }
    });

    const decrementButtons = document.querySelectorAll('.decrement');
    decrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.nextElementSibling;
            let currentValue = parseInt(input.value);
            if (currentValue > 1) {
                currentValue--;
                input.value = currentValue;
            }
        });
    });

    const incrementButtons = document.querySelectorAll('.increment');
    incrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.previousElementSibling;
            let currentValue = parseInt(input.value);
            currentValue++;
            input.value = currentValue;
        });
    });

    const emptyCartButton = document.getElementById('empty-cart');
    emptyCartButton.addEventListener('click', () => {
        cart = [];
        updateCartUI();
        saveCartToLocalStorage();
    });

    updateCartUI();
});

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach((item, index) => {
        // code to display cart items
    });

    updateTotal();
    updateCartCount();

    // Show/hide checkout button based on cart content
    const checkoutButton = document.getElementById('checkout-button');
    if (cart.length > 0) {
        checkoutButton.style.display = 'block';
    } else {
        checkoutButton.style.display = 'none';
    }
}

