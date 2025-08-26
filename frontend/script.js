const login = document.querySelector(".login")
const loginForm = document.querySelector(".login__form")
const loginInput = document.querySelector(".login__input")

const chat = document.querySelector(".chat")
const chatForm = document.querySelector(".chat__form")
const chatInput = document.querySelector(".chat__input")
const chatMessage = document.querySelector(".chat__message")

const handleSubmit = (event) => {
    event.preventDefault()
}

loginForm.addEventListener("submit", handleSubmit)