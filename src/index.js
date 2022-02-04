console.log(window.innerHeight);
var posts_data = [];
document.onreadystatechange = () => {

  if (document.readyState === 'complete') {

    const lista_posts = document.querySelector('main');
    let posts = '';

    function mountPost() {
      console.log(11,posts_data);
      const intevalo = setInterval(() => {
        console.log(12,Object.values(posts_data).length != 0);
        if(Object.values(posts_data).length != 0)
        posts_data[0].forEach(element => {
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
        clearInterval(intevalo);

      }, 750);
      
    }
    
    

    lista_posts.insertAdjacentHTML('beforeend', posts);
    fetch('https://stormy-shelf-93141.herokuapp.com/articles',
      {
        method: 'GET',
        data: { _page: 1 }
      })
      .then((response) => response.json())
      .then((responseJson) =>{
        posts_data.push(responseJson);
    });
    mountPost();
  }
}