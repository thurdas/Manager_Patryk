const btnLogin  = document.querySelector("#btn-login")
const loginRow = document.querySelector(".login-row")
const hamburger = document.querySelector("#hamburger-btn")
const nav = document.querySelector(".nav")
const btnClose = document.querySelector(".btn-close")

btnLogin.onclick = function() {
    loginRow.classList.toggle("mt-0")
}
hamburger.onclick = function() {
    nav.classList.toggle("d-flex")
}
btnClose.onclick = function() {
    loginRow.classList.toggle("mt-0")
}