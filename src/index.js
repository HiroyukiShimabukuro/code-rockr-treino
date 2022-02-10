var posts_data = [];
document.onreadystatechange = () => {
  let page;
  
  if (document.readyState === 'complete') {
    window.addEventListener('scroll', function(event){
      let element = document.body;
      if(element.clientHeight - window.scrollY === document.documentElement.clientHeight){
        console.log('final');
        page = page+1;
        queryPage = '&_page='+ page;
        console.log(queryPage);
        fetch('https://stormy-shelf-93141.herokuapp.com/articles' + '?_limit=3'+queryPage,
          {
            method: 'GET'
          })
          .then((response) => response.json())
          .then((responseJson) =>{
            posts_data.push(responseJson);
        });
        mountPost();
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
              <img class="img-peq" src="${posts_data[0][0].imageUrl}" alt="">
              <article class="text-center w-100 bg-white">
                <h3>${posts_data[0][0].author}</h3>
                <h2>${posts_data[0][0].title}</h2>
                ${posts_data[0][0].article}
              </article>
            </article>
          `;
        });
        posts += `
            <article class="col-md-6 col-12 ps-0 d-flex">
            <img class="img-peq" src="${posts_data[0][1].imageUrl}" alt="">
            <article class="text-center w-100 bg-white">
              <h3>${posts_data[0][1].author}</h3>
              <h2>${posts_data[0][1].title}</h2>
              ${posts_data[0][1].article}
            </article>      
            </article>
          </article>
        `;
        posts += `
        <article class="row">
          <article class="col-offset-4 col-8 d-flex">
            <img class="img-med" src="${posts_data[0][2].imageUrl}" alt="">
            <article class="text-center w-100 bg-white">
              <h3>${posts_data[0][2].author}</h3>
              <h2>${posts_data[0][2].title}</h2>
              ${posts_data[0][2].article}
            </article>
          </article>
        </article>
        `
        lista_posts.insertAdjacentHTML('beforeend', posts);

        clearInterval(intevalo);

      }, 750);
      
    }

    fetch('https://stormy-shelf-93141.herokuapp.com/articles' + '?_limit=3',
      {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((responseJson) =>{
        page = 1;
        posts_data.push(responseJson);
    });
    mountPost();
  }
}