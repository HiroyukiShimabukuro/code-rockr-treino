let post = (document.onreadystatechange = () => {
  let posts = "";
  let id = 0;
  console.log("posts");
  if (document.readyState === "complete") {
    const lista_posts = document.querySelector("#content");
    function mountPost() {
      posts += `
          <article class="container bg-white">
          </article>
          `;
    }
    fetch("https://stormy-shelf-93141.herokuapp.com/articles?" + id, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        post = responseJson;
      });
    mountPost();
  }
});
