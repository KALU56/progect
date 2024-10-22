function showAlert() {
  alert("Welcome to Lilu Eyeglasses!");
}

function addToCart() {
  // Create a cart notification
  var cartNotification = document.createElement("div");
  cartNotification.classList.add("alert", "alert-success", "alert-dismissible", "fade", "show");
  cartNotification.role = "alert";
  cartNotification.innerHTML = "Product added to cart! <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";

  // Add the notification to the body
  document.body.appendChild(cartNotification);

  // Automatically dismiss the notification after 3 seconds
  setTimeout(function() {
      cartNotification.classList.remove("show");
      cartNotification.classList.add("hide");
  }, 3000);
}
