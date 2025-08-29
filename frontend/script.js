const login = document.querySelector(".login")
const loginForm = document.querySelector(".login__form")
const loginInput = document.querySelector(".login__input")

const chat = document.querySelector(".chat")
const chatForm = document.querySelector(".chat__form")
const chatInput = document.querySelector(".chat__input")
const chatMessage = document.querySelector(".chat__message")

const colors = [
    "aqua",
    "cadetblue",
    "blueviolet",
    "darkgoldenrod",
    "cornflowerblue",
    "darkkhaki",
    "hotpink",
    "gold",
    "navy"
]
let websocket

const createMessageSelfElement = (message) => {
    const div = document.createElement("div")

    div.classList.add("message__self")
    div.innerHTML = message
    return div
}

const createMessageOtherElement = (message, sender, senderColor) => {
    const div = document.createElement("div")
    const span = document.createElement("span")

    div.classList.add("message__other")
    span.classList.add("message__sender")
    span.style.color = senderColor;
    div.appendChild(span)

    span.innerHTML = sender
    div.innerHTML += message
    return div
}

const user = { id: "", name: "", color: "" } /* objeto do usuario */

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

const processMessage = ({ data }) => {
    const { userId, userName, userColor, message } = JSON.parse(data)

    const content = userId == user.id ? createMessageSelfElement(message) : createMessageOtherElement(message, userName, userColor)

    chatMessage.appendChild(content)
}

const handleSubmit = (event) => {
    event.preventDefault()
    user.id = crypto.randomUUID()
    user.name = loginInput.value
    user.color = getRandomColor()

    login.style.display = "none"
    chat.style.display = "flex"

    websocket = new WebSocket("ws://localhost:8080")
    websocket.onmessage = processMessage
}

const sendMessage = (event) => {
    event.preventDefault()
    const message = {
        userId: user.id,
        userName: user.name,
        userColor: user.color,
        message: chatInput.value
    }

    websocket.send(JSON.stringify(message))
    chatInput.value = ""
}


loginForm.addEventListener("submit", handleSubmit)
chatForm.addEventListener("submit", sendMessage)