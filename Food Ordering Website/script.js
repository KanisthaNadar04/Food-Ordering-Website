let cart = [];

// Function to add items to the cart
function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    alert(`${itemName} has been added to your cart.`);
}

// Function to open the cart modal
function openCart() {
    const cartModal = document.getElementById("cartModal");
    const cartItemsDiv = document.getElementById("cartItems");
    const cartTotalDiv = document.getElementById("cartTotal");

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "Your cart is empty.";
        cartTotalDiv.innerHTML = "";
    } else {
        let cartItems = "";
        let total = 0;

        cart.forEach((item, index) => {
            cartItems += `
                <div>
                    ${item.name} - ₹${item.price} 
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
            total += item.price;
        });

        cartItemsDiv.innerHTML = cartItems;
        cartTotalDiv.innerHTML = `<strong>Total: ₹${total}</strong>`;
    }

    cartModal.style.display = "block"; // Show the cart modal
}

// Function to close the cart modal
function closeCart() {
    const cartModal = document.getElementById("cartModal");
    cartModal.style.display = "none"; // Hide the cart modal
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove the item from the cart
    openCart(); // Refresh the cart display
}

// Function to prompt for order details
function promptOrderDetails() {
    const orderForm = document.getElementById("orderForm");
    orderForm.style.display = "block"; // Show the order form
    document.getElementById("griid").style.display = "none"; // Hide the product grid
}

// Function to submit the order
function submitOrder() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    if (!name || !address || !phone) {
        alert("Please fill in all fields."); // Alert if fields are empty
        return;
    }

    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to your cart before ordering."); // Alert if cart is empty
        return;
    }

    let orderSummary = `Order Details:\nName: ${name}\nAddress: ${address}\nPhone: ${phone}\n\nYour order summary:\n`;
    let total = 0;

    cart.forEach(item => {
        orderSummary += `${item.name} - ₹${item.price}\n`; // Add each item to the order summary
        total += item.price; // Calculate total price
    });

    orderSummary += `\nTotal: ₹${total}\n\nThank you for your order!`;
    alert(orderSummary); // Show order summary in alert

    // Reset the cart and form
    cart = []; // Clear the cart
    document.getElementById("orderForm").reset(); // Reset the order form
    closeCart(); // Close the cart modal
}

// Function to expand the grid for more items
function expandGrid() {
    // Placeholder for expanding grid functionality
    alert('More items will be added here.'); // Alert for expanding grid
}

// Function to handle the order now button click
function orderNow() {
    closeCart(); // Close the cart modal
    promptOrderDetails(); // Show the order form
}