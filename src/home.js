let home = (document.onreadystatechange = () => {
  var page;
  var posts_data = [];
  if (document.readyState === "complete") {
    window.addEventListener("scroll", function (event) {
      let element = document.body;
      if (
        element.clientHeight - window.scrollY ===
        document.documentElement.clientHeight
      ) {
        page = page + 1;
        queryPage = "&_page=" + page;
        fetch(
          "https://stormy-shelf-93141.herokuapp.com/articles" +
            "?_limit=3" +
            queryPage,
          {
            method: "GET",
          }
        )
          .then((response) => response.json())
          .then((responseJson) => {
            posts_data.push(responseJson);
          });
        mountPost();
      }
    });
    const lista_posts = document.querySelector("#content");
    function mountPost() {
      const intevalo = setInterval(() => {
        if (Object.values(posts_data).length != 0) {
          let posts = "";
          let inverterPostSimples = "";
          let inverterPostDuplo = "";
          posts_data[page - 1].forEach((element, key) => {
            inverterPostSimples = page % 2 == 1 ? "flex-row-reverse" : "";
            inverterPostDuplo = page % 2 == 1 ? "" : "flex-row-reverse";
            if (key == 0)
              posts += `
          <article class="row mx-0">
            <a onclick="onNavigate('/post/','id=${
              posts_data[page - 1][key].id
            }')" class="d-flex px-0 col-md-6 col-12 max-duplo post-link ${inverterPostDuplo}">
              <img class="img-peq" src="${posts_data[0][key].imageUrl}" alt="">
              <article class="w-100 bg-white h-100 position-relative">
                <div class='container p-0 text-post h-100'>
                  <img src="./img/Vector.png" class="vector">
                  <h4 class="text-start w-100">${
                    posts_data[page - 1][key].author
                  }</h4>
                  <h3 class="post-title texto">${
                    posts_data[page - 1][key].title
                  }</h3>
                  <article class="texto"> ${
                    posts_data[page - 1][key].article
                  } </article>
                </div>
              </article>
            </a>
          `;
            if (key == 1)
              posts += `
              <a onclick="onNavigate('/post/','id=${
                posts_data[page - 1][key].id
              }')" class="col-md-6 col-12 px-0 d-flex ps-0 max-duplo post-link ${inverterPostDuplo}">
                <img class="img-peq" src="${
                  posts_data[page - 1][key].imageUrl
                }" alt="">
                <article class="w-100 bg-white h-100 position-relative">
                  <div class='container p-0 text-post h-100'>
                    <img src="./img/Vector.png" class="vector">
                    <h4 class="text-start w-100">${
                      posts_data[page - 1][key].author
                    }</h4>
                    <h3 class="post-title texto">${
                      posts_data[page - 1][key].title
                    }</h3>
                    <article class="texto"> ${
                      posts_data[page - 1][key].article
                    } </article>
                  </div>
                </article>
              </a>
            </article>
          `;
            if (key == 2)
              posts += `
          <article class="row mx-0 ${inverterPostSimples}">
            <a onclick="onNavigate('/post/','id=${
              posts_data[page - 1][key].id
            }')" class="col-offset-4 col-8 d-flex px-0 max-solo post-link">
              <img class="img-med" src="${
                posts_data[page - 1][key].imageUrl
              }" alt="">
              <article class="w-100 bg-white h-100">
                <div class='container p-0 text-post h-100'>
                  <img src="./img/Vector.png" class="vector">
                  <h4 class="text-start w-100">${
                    posts_data[page - 1][key].author
                  }</h4>
                  <h3 class="post-title texto">${
                    posts_data[page - 1][key].title
                  }</h3>
                  <article class="texto"> ${
                    posts_data[page - 1][key].article
                  } </article>
                </div>
              </article>
            </a>
          </article>
          `;
          });
          lista_posts.insertAdjacentHTML("beforeend", posts);
        }
        clearInterval(intevalo);
      }, 750);
    }
    fetch("https://stormy-shelf-93141.herokuapp.com/articles" + "?_limit=3", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        page = 1;
        posts_data.push(responseJson);
      });
    mountPost();
  }
  let singlePost = "";
  singlepost = document.querySelector("#post");
});
