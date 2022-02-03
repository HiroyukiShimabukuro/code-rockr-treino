console.log(window.innerHeight);
document.onreadystatechange = () => {

  if (document.readyState === 'complete') {

    const lista_posts = document.querySelector('main');
    var posts_data = [];
    let posts = '';
    function mountPost(posts_data) {
      posts_data.forEach(element => {
        console.log(10, element);
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
    }
    
    

    lista_posts.insertAdjacentHTML('beforeend', posts);
    function getPosts(){
      fetch('https://stormy-shelf-93141.herokuapp.com/articles',
        {
          method: 'GET',
          data: { _page: 1 }
        })
        .then((response) => response.json())
        .then((responseJson) =>{
          return responseJson;
      });

    }
    posts_data = getPosts();
    console.log(61,posts_data);
    mountPost(posts_data);
  }
}