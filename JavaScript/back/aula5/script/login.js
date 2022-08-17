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
                
                let infoUser = {
                    "id":data.id,
                    "name":data.name
                };

                console.log(infoUser);

                window.localStorage.setItem("infoUser", JSON.stringify(infoUser));
                window.location.href ="./index.html";
            }else{
                alert("Usuario ou senha Incorreta")
            }
        })
    });
}