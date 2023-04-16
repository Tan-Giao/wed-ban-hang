const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})
var cart = [];

document.getElementById("buy-now").addEventListener("click", function() {
    var selectedProduct = {
        name: "Sản Phẩm 1",
        price: 500.000,
        quantity: 1
    };
    cart.push(selectedProduct);
});
document.getElementById("cart").addEventListener("click", function() {
    var cartContents = "";
    for (var i = 0; i < cart.length; i++) {
        cartContents += cart[i].name + " x " + cart[i].quantity + " - $" + cart[i].price + "\n";
    }
    if (cartContents === "") {
        cartContents = "Giỏ hàng của bạn trống.";
    }
    window.alert(cartContents);
});
