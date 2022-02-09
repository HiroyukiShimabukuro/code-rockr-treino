var posts_data = [];
document.onreadystatechange = () => {
  
  if (document.readyState === 'complete') {
    window.addEventListener('scroll', function(event){
      let element = document.body;
      if(element.clientHeight - window.scrollY === document.documentElement.clientHeight){
        console.log('final');
        // carregaProximo();
      }
    })
    const lista_posts = document.querySelector('main');
    let posts = '';

    function mountPost() {
      const intevalo = setInterval(() => {
        if(Object.values(posts_data).length != 0)
        posts_data[0].forEach(element => {
          posts = `
          <article class="row">
            <article class="d-flex pe-0 col-md-6 col-12">
              <img class="img-peq" src="${element.imageUrl}" alt="">
              <article class="text-center w-100 bg-white">
                <h3>${element.author}</h3>
                <h2>${element.title}</h2>
                ${element.article}
              </article>
            </article>
          `;
          posts += `
            <article class="col-md-6 col-12 ps-0 d-flex">
            <img class="img-peq" src="${element.imageUrl}" alt="">
            <article class="text-center w-100 bg-white">
              <h3>${element.author}</h3>
              <h2>${element.title}</h2>
              ${element.article}
            </article>      
            </article>
          </article>
        `;
        posts += `
        <article class="row">
          <article class="col-offset-4 col-8 d-flex">
            <img class="img-med" src="${element.imageUrl}" alt="">
            <article class="text-center w-100 bg-white">
              <h3>${element.author}</h3>
              <h2>${element.title}</h2>
              ${element.article}
            </article>
          </article>
        </article>
        `
        });

        clearInterval(intevalo);
        lista_posts.insertAdjacentHTML('beforeend', posts);

      }, 750);
      
    }
    
    

    fetch('https://stormy-shelf-93141.herokuapp.com/articles',
      {
        method: 'GET',
        data: { _page: 1, _limit:11 }
      })
      .then((response) => response.json())
      .then((responseJson) =>{
        posts_data.push(responseJson);
    });
    mountPost();
  }
}