let navbar = document.querySelector('.navbar');
document.getElementById("menu-bars").onclick = () => {
    navbar.classList.toggle("active");
    cartItems.classList.remove("active");
    searchFrom.classList.remove("active");
}
let cartItems = document.querySelector('.cart-items-container');
document.getElementById("shopping-cart").onclick = () => {
    cartItems.classList.toggle("active");
    navbar.classList.remove("active");
    searchFrom.classList.remove("active");
}
let searchFrom = document.querySelector('.search-from');
document.getElementById("search-btn").onclick = () => {
    searchFrom.classList.toggle("active");
    navbar.classList.remove("active");
    cartItems.classList.remove("active");
}
window.onscroll = () => {
    navbar.classList.remove("active");
    cartItems.classList.remove("active");
    searchFrom.classList.remove("active");
}