function logar(){
    let user = document.querySelector("#user").value;
    let psw = document.querySelector("#psw").value;

    fetch("https://jsonplaceholder.typicode.com/users?email=" + user)
    .then((res) => {
        return res.json();
    })
    .then((userData) => {
        userData.forEach(data => {
            if(psw == data.username) {
                window.location.href ="./index.html";
                window.localStorage.setItem("userId", data.id);
                window.localStorage.setItem("userName", data.name);
            }else{
                alert("Usuario ou senha Incorreta")
            }
        })
    });
}