const isAlpha = str => /^[a-zA-Z]*$/.test(str);
const isEmail = str => /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/.test(str);
const is_phone_number = str => /[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(str);
const valid_password = str => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(str);
const has_uppercase = str => /[A-Z]/.test(str);
const has_lowcase = str => /[a-z]/.test(str);
const has_number = str => /[0-9]/.test(str);


const first_name = document.getElementById("first_name")
const first_name_error = document.getElementById("first_name_error")

const last_name = document.getElementById("last_name")
const last_name_error = document.getElementById("last_name_error")

const email = document.getElementById("email")
const email_error = document.getElementById("email_error")

const phone_number = document.getElementById("phone_number")
const phone_number_error = document.getElementById("phone_number_error")

const password = document.getElementById("password")
const password_error = document.getElementById("password_error")


const confirm_password = document.getElementById("confirm_password")
const confirm_password_error = document.getElementById("confirm_password_error")

first_name.addEventListener('input', (e) => {
    if (first_name.value === ''){
        first_name_error.textContent = "*First name required"
        first_name_error.style.color = "red"
        first_name.style.border = "1px solid red"
        first_name_error.style.fontSize = "0.7rem"
    } else if (!isAlpha(first_name.value)){
        first_name_error.textContent = "*Only alphabetic caracteres please"
        first_name_error.style.color = "red"
        first_name_error.style.fontSize = "0.7rem"
        first_name.style.border = "1px solid red"
    } else {
        first_name.style.border = "1px solid green"
        first_name_error.textContent = ""
    }
})

last_name.addEventListener('input', (e) => {
    if (last_name.value === ''){
        last_name_error.textContent = "*Last name required"
        last_name_error.style.color = "red"
        last_name.style.border = "1px solid red"
        last_name_error.style.fontSize = "0.7rem"
    } else if (!isAlpha(last_name.value)){
        last_name_error.textContent = "*Only alphabetic caracteres please"
        last_name_error.style.color = "red"
        last_name_error.style.fontSize = "0.7rem"
        last_name.style.border = "1px solid red"
    } else {
        last_name.style.border = "1px solid green"
        last_name_error.textContent = ""
    }
})

email.addEventListener('input', (e) => {
    if (email.value === ''){
        email_error.textContent = "*Email required"
        email_error.style.color = "red"
        email.style.border = "1px solid red"
        email_error.style.fontSize = "0.7rem"
    } else if (!isEmail(email.value)){
        email_error.textContent = "Email format is example@example.com"
        email_error.style.color = "red"
        email.style.border = "1px solid red"
        email_error.style.fontSize = "0.7rem"
    } else {
        email.style.border = "1px solid green"
        email_error.textContent = ""
    }
})

phone_number.addEventListener('input', (e) => {
    if (phone_number.value === ''){
        phone_number_error.textContent = "*Phone number required"
        phone_number_error.style.color = "red"
        phone_number.style.border = "1px solid red"
        phone_number_error.style.fontSize = "0.7rem"
    } else if (!is_phone_number(phone_number.value)){
        phone_number_error.textContent = "Phone number format is 123-456-7890"
        phone_number_error.style.color = "red"
        phone_number.style.border = "1px solid red"
        phone_number_error.style.fontSize = "0.7rem"
    } else {
        phone_number.style.border = "1px solid green"
        phone_number_error.textContent = ""
    }
})

password.addEventListener('input', (e) => {
    if (password.value === ''){
        password_error.textContent = "*Password required"
        password_error.style.color = "red"
        password.style.border = "1px solid red"
        password_error.style.fontSize = "0.7rem"
    } else if (!valid_password(password.value) && has_uppercase(password.value) && has_lowcase(password.value) && !has_number(password.value)){
        password_error.innerText = "Password should be at least 8 characters\nIt shoud have at least one number"
        password_error.style.color = "red"
        password.style.border = "1px solid red"
        password_error.style.fontSize = "0.7rem"
    } else if (!valid_password(password.value) && has_uppercase(password.value) && has_number(password.value) && !has_lowcase(password.value)){
        password_error.innerText = "Password should be at least 8 characters\nIt shoud have at least one lower case character"
        password_error.style.color = "red"
        password.style.border = "1px solid red"
        password_error.style.fontSize = "0.7rem"
    } else if (!valid_password(password.value) && has_lowcase(password.value) && has_number(password.value) && !has_uppercase(password.value)){
        password_error.innerText = "Password should be at least 8 characters\nIt shoud have at least one upper case character"
        password_error.style.color = "red"
        password.style.border = "1px solid red"
        password_error.style.fontSize = "0.7rem"
    } else if (!valid_password(password.value) && has_uppercase(password.value) && !has_lowcase(password.value) && !has_number(password.value)){
        password_error.innerText = "Password should be at least 8 characters\nIt shoud have at least one lower case character\nIt shoud have at least one number"
        password_error.style.color = "red"
        password.style.border = "1px solid red"
        password_error.style.fontSize = "0.7rem"
    } else if (!valid_password(password.value) && has_lowcase(password.value) && !has_uppercase(password.value) && !has_number(password.value)){
        password_error.innerText = "Password should be at least 8 characters\nIt shoud have at least one lower case character\nIt shoud have at least one number"
        password_error.style.color = "red"
        password.style.border = "1px solid red"
        password_error.style.fontSize = "0.7rem"
    } else if (!valid_password(password.value) && has_number(password.value) && !has_lowcase(password.value) && !has_uppercase(password.value)){
        password_error.innerText = "Password should be at least 8 characters\nIt shoud have at least one lower case character"
        password_error.style.color = "red"
        password.style.border = "1px solid red"
        password_error.style.fontSize = "0.7rem"
    } else if (!valid_password(password.value)) {
        password_error.innerText = "Password should be at least 8 characters"
        password.style.border = "1px solid red"
        password_error.style.fontSize = "0.7rem"
    } else {
        password.style.border = "1px solid green"
        password_error.textContent = ""
    }
})

confirm_password.addEventListener('input', (e) => {
    if (confirm_password.value === ''){
        confirm_password_error.textContent = "*Please confirm your password"
        confirm_password_error.style.color = "red"
        confirm_password.style.border = "1px solid red"
        confirm_password_error.style.fontSize = "0.7rem"
    }
    else if (password.value !== confirm_password.value){
        confirm_password_error.textContent = "*Password does not match"
        confirm_password_error.style.color = "red"
        confirm_password.style.border = "1px solid red"
        confirm_password_error.style.fontSize = "0.7rem"
    } else {
        confirm_password.style.border = "1px solid green"
        confirm_password_error.textContent = ""
    }
})
