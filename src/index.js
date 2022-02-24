var posts_data = [];
document.onreadystatechange = () => {
  var page;
  let multiplePage;

  if (document.readyState === 'complete') {
    window.addEventListener('scroll', function (event) {
      let element = document.body;
      if (element.clientHeight - window.scrollY === document.documentElement.clientHeight) {
        page = page + 1;
        queryPage = '&_page=' + page;
        fetch('https://stormy-shelf-93141.herokuapp.com/articles' + '?_limit=3' + queryPage,
          {
            method: 'GET'
          })
          .then((response) => response.json())
          .then((responseJson) => {
            posts_data.push(responseJson);
          });
        mountPost();
      }
    })
    const lista_posts = document.querySelector('main');

    function mountPost() {
      const intevalo = setInterval(() => {

        if (Object.values(posts_data).length != 0) {
          let posts = ''; 

          posts_data[page-1].forEach((element, key) => {
            if(key==0)
            posts += `
          <article class="row">
            <article class="d-flex pe-0 col-md-6 col-12 max-duplo">
              <img class="img-peq" src="${posts_data[0][key].imageUrl}" alt="">
              <article class="text-center w-100 bg-white text-post">
                <div class='container'>
                  <a href=''><img src="./img/Vector.png" class="vector"></a>
                  <h3>${posts_data[page-1][key].author}</h3>
                  <h2>${posts_data[page-1][key].title}</h2>
                  ${posts_data[page-1][key].article}
                </div>
              </article>
            </article>
          `;
          if(key==1)
            posts += `
              <article class="col-md-6 col-12 ps-0 d-flex max-duplo">
                <img class="img-peq" src="${posts_data[page-1][key].imageUrl}" alt="">
                <article class="text-center w-100 bg-white text-post">
                  <div class='container'>
                    <a href=''><img src="./img/Vector.png" class="vector"></a>
                    <h3>${posts_data[page-1][key].author}</h3>
                    <h2>${posts_data[page-1][key].title}</h2>
                    ${posts_data[page-1][key].article}
                  </div>      
                </article>
              </article>
            </article>
          `;
          if(key==2)
            posts += `
          <article class="row">
            <article class="col-offset-4 col-8 d-flex max-solo">
              <img class="img-med" src="${posts_data[page-1][key].imageUrl}" alt="">
              <article class="text-center w-100 bg-white text-post">
                <div class='container'>
                  <a href=''><img src="./img/Vector.png" class="vector"></a>
                  <h3>${posts_data[page-1][key].author}</h3>
                  <h2>${posts_data[page-1][key].title}</h2>
                  ${posts_data[page-1][key].article}
                </div>
              </article>
            </article>
          </article>
          `
          });
          lista_posts.insertAdjacentHTML('beforeend', posts);
        }
        clearInterval(intevalo);

      }, 750);

    }

    fetch('https://stormy-shelf-93141.herokuapp.com/articles' + '?_limit=3',
      {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((responseJson) => {
        page = 1;
        posts_data.push(responseJson);
      });
    mountPost();
  }
}