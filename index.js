function register(e) {
    e.preventDefault()
    //getting values from the submitted form
    let name = document.getElementById('fullName').value
    let email = document.getElementById('email').value
    let pasword = document.getElementById('Pasword').value
    let phonenumber = document.getElementById('phonenumber').value
    // console.log(name, email, pasword, phonenumber)
    //serving values to local storage
    localStorage.setItem("email", email)
    localStorage.setItem("fullname", name)
    localStorage.setItem("pasword", pasword)
    localStorage.setItem("phonenumber", phonenumber)
    window.location.href = '/TODOLIST/login.html'



}
function login(e) {
    e.preventDefault()
    let email = document.getElementById('email').value
    let pasword = document.getElementById('pasword').value
    let registeredEmail = localStorage.getItem("email")
    let registeredPasword = localStorage.getItem("pasword")
    if (registeredEmail == email && registeredPasword == pasword) {
        window.location.href = "/TODOLIST/todo.html"

    } else {
        alert("Invalid credentials")
    }




}