function posts(){
    let userId = window.localStorage.getItem("userId");
    let userName = window.localStorage.getItem("userName")

    document.querySelector("#nome").innerHTML = userName;

    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    .then((res) => {
        return res.json()
    })
    .then((posts) => {
        posts.forEach((post) => {
            let newPost = document.querySelector(".post").cloneNode(true);

            newPost.classList.remove("modelo");

            newPost.querySelector("#title").innerHTML = post.title;
            newPost.querySelector("#content").innerHTML = post.body;

            document.querySelector(".posts").appendChild(newPost);
        });
    });
}