let post = (document.onreadystatechange = (params) => {
  var page;
  var posts_data = [];
  if (document.readyState === "complete" && window.location.pathname == '/post/') {
    let post = document.querySelector("#content");
    
    fetch("https://stormy-shelf-93141.herokuapp.com/articles?" +params, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        montarPost(responseJson[0]);
      });
     function montarPost(postData) {
      html = `
      <article class="d-flex container w-100">
        <article class="d-flex px-0 col-12 post-link">
          <img class="img-full" src="${postData.imageUrl}" alt="">
          <article class="w-100 bg-white h-100 position-relative">
            <div class='container p-0 text-post h-100'>
              <img src="./img/Vector.png" class="vector">
              <h4 class="text-start w-100">${
                postData.date
              }</h4>
              <h4 class="text-start w-100">${
                postData.author
              }</h4>
              <h3 class="post-title texto">${
                postData.title
              }</h3>
              <article class="texto"> ${
                postData.article
              } </article>
            </div>
          </article>
        </article>
      `;
      post.innerHTML = html;
     } 
  }
  else{
    return false;
  }
});
