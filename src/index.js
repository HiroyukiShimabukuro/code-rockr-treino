var posts_data = [];
document.onreadystatechange = () => {
  var page;
  let multiplePage;

  if (document.readyState === 'complete') {
    window.addEventListener('scroll', function (event) {
      let element = document.body;
      if (element.clientHeight - window.scrollY === document.documentElement.clientHeight) {
        console.log('final');
        page = page + 1;
        queryPage = '&_page=' + page;
        console.log(queryPage);
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
    let posts = '';

    function mountPost() {
      const intevalo = setInterval(() => {
        multiplePage = parseInt(page) * 3;

        if (Object.values(posts_data).length != 0) {
          posts_data[0].forEach(element => {
            console.log(posts_data[0][0 + multiplePage]);
            posts += `
          <article class="row">
            <article class="d-flex pe-0 col-md-6 col-12">
              <img class="img-peq" src="${posts_data[0][parseInt(0+multiplePage)].imageUrl}" alt="">
              <article class="text-center w-100 bg-white">
                <h3>${posts_data[0][0 + multiplePage].author}</h3>
                <h2>${posts_data[0][0 + multiplePage].title}</h2>
                ${posts_data[0][0 + multiplePage].article}
              </article>
            </article>
          `;
          });
          posts += `
            <article class="col-md-6 col-12 ps-0 d-flex">
            <img class="img-peq" src="${posts_data[0][1 + multiplePage].imageUrl}" alt="">
            <article class="text-center w-100 bg-white">
              <h3>${posts_data[0][1 + multiplePage].author}</h3>
              <h2>${posts_data[0][1 + multiplePage].title}</h2>
              ${posts_data[0][1 + multiplePage].article}
            </article>      
            </article>
          </article>
        `;
          posts += `
        <article class="row">
          <article class="col-offset-4 col-8 d-flex">
            <img class="img-med" src="${posts_data[0][2 + multiplePage].imageUrl}" alt="">
            <article class="text-center w-100 bg-white">
              <h3>${posts_data[0][2 + multiplePage].author}</h3>
              <h2>${posts_data[0][2 + multiplePage].title}</h2>
              ${posts_data[0][2 + multiplePage].article}
            </article>
          </article>
        </article>
        `
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