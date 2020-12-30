const posts = document.querySelector("#posts");

function newPost() {
  let title = document.querySelector("#title").value;
  let description = document.querySelector("#description").value;
  console.log(title, description);

  let post = { title, description };

  const options = {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(post),
  };

  fetch("http://localhost:8080/api/new", options).then((res) => {
    // console.log(res);
    updatePosts();
    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updatePosts();
});

function updatePosts() {
  fetch("http://localhost:8080/api/all")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // let postElements = "";

      let postagens = JSON.parse(data);

      postagens.forEach(({ id, title, description }) => {
        // console.log(title, description);
        posts.innerHTML +=
          "<div id='" +
          id +
          "'class='card'><div class='card-body'><h2>" +
          title +
          "</h2><br>" +
          description +
          "</div></div><br>";
      });
    });
}
