document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'CHOCOLATE', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
        { id: 4, name: 'Product 4', price: 40 },
        { id: 5, name: 'Product 5', price: 50 },
    ];

    let cart = [];

    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = '';

        cart.forEach(item => {
            const product = products.find(p => p.id === item.productId);
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `<p>${product.name} - ${item.quantity} x ${product.price}</p>`;
            cartItems.appendChild(cartItem);
        });

        const total = cart.reduce((acc, item) => {
            const product = products.find(p => p.id === item.productId);
            return acc + item.quantity * product.price;
        }, 0);

        document.getElementById('cart-total').textContent = `Total:Rs.{total}`;
        document.getElementById('cart-count').textContent = cart.length;
    }

    function addToCart(productId) {
        const cartItem = cart.find(item => item.productId === productId);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ productId, quantity: 1 });
        }
        updateCart();
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('.product').getAttribute('data-id'));
            addToCart(productId);
        });
    });

    document.getElementById('checkout').addEventListener('click', () => {
        alert('Thank you for your purchase! VISIT AGAIN:)');
        cart = [];
        updateCart();
    });
});
