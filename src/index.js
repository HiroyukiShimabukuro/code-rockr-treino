console.log(window.innerHeight);
document.onreadystatechange = () => {

  if (document.readyState === 'complete') {

    const lista_posts = document.querySelector('main');
    var posts_data = [];
    let posts = '';
    posts_data.forEach(element => {
      posts = `
      <article class="row">
        <article class="d-flex pe-0 col-md-6 col-12">
          <img class="img-peq" src="${element.author}" alt="">
          <article class="text-center w-100 bg-white">
            <h3>${element.author}</h3>
            <h2>${element.title}</h2>
            ${element.article}
          </article>
        </article>
        <article class="col-md-6 col-12 ps-0 d-flex">
          <img class="img-peq" src="${element.author}" alt="">
          <article class="text-center w-100 bg-white">
            <h3>${element.author}</h3>
            <h2>${element.title}</h2>
            ${element.article}
          </article>      
        </article>
        </article>
        <article class="row">
        <article class="col-offset-4 col-8 d-flex">
          <img class="img-med" src="${element.author}" alt="">
          <article class="text-center w-100 bg-white">
            <h3>${element.author}</h3>
            <h2>${element.title}</h2>
            ${element.article}
          </article>
        </article>
      </article>
    `;
    });
    

    lista_posts.insertAdjacentHTML('beforeend', posts);

    fetch('https://stormy-shelf-93141.herokuapp.com/articles',
      {
        method: 'GET',
        data: { _page: 1 }
      })
      .then((response) => response.json())
      .then((responseJson) =>{
        mountPosts(responseJson)
    });

    function mountPosts(posts_data) {
      posts_data = posts_data;
      // console.log(posts_data);
    }

  }
}