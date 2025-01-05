document.addEventListener('DOMContentLoaded', () => {

    const addToCart = document.querySelectorAll(".cart-button");
    const cartItemsList = document.querySelector('#cart-items-list');
    const cartQuantity = document.querySelector('#cart-quantity');
    const totalPrice = document.querySelector('#total-price');
    const placeOrder = document.querySelector('.checkout-button')
    const paymentContainer = document.querySelector('.payment-container')

    let productQuantityOnCart = 0;
    let totalCartPrice = 0;
    
    addToCart.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const itemPrice = parseInt(productCard.querySelector('.item-price span').textContent);

            // Create a new div for the selected product
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>Product Name: ${productName}</p>
                <p>Price: ₹${itemPrice}</p>
            `;

            // Append the new product to the cart items list
            cartItemsList.appendChild(cartItem);

            // Update the cart quantity and total price
            productQuantityOnCart += 1;
            cartQuantity.textContent = productQuantityOnCart;

            totalCartPrice += itemPrice;
            totalPrice.textContent = totalCartPrice;
        });
    });

        placeOrder.addEventListener('click', ()=>{
            if(productQuantityOnCart === 0){
                alert('please choose an item first!')
            }
            else{
                const createPaymentDiv = document.createElement('div')
                createPaymentDiv.innerHTML = `
                <div id="choose-payment-method">
                    <h3>Choose Your Payment Method</h3>
                    <button id="upi" class='paymentMethod' onclick="payWithUpi()">UPI</button>
                    <button class='paymentMethod'>Debit Card</button>
                </div>
                ` 
                paymentContainer.appendChild(createPaymentDiv)
        
                const upi = document.querySelector('#upi')
                upi.addEventListener('click', payWithUpi)
            }
        }) 
        function payWithUpi(){
            const createUPI_Gateway = document.createElement('div')
            createUPI_Gateway.innerHTML = `
            <div class="upi-form">
            <h4>Scan this scanner to pay</h4>
            <img src="upi scanner.jpeg" alt="upi scanner">
            <h4>OR, enter your upi id</h4>
            <input type="text" name="" id="upi-id-input"><button id="upi-confirm-button">Confirm</button>
            </div>
            `
            paymentContainer.appendChild(createUPI_Gateway)
        }

});
