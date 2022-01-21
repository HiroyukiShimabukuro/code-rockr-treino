console.log(window.innerHeight);
document.onreadystatechange = () => {

  if (document.readyState === 'complete') {

    const lista_posts = document.querySelector('main');
    let posts_data = [];
    const posts = `
  <article class="row">
    <article class="d-flex pe-0 col-md-6 col-12">
      <img class="img-peq" src="./img/stage-wide-frontal.png" alt="">
      <article class="text-center w-100 bg-white">
        <h3>Kelsi Monahan</h3>
        <h2>Qui occaecati vero et quibusdam non</h2>
        <p class="text">Saepe quia culpa vero. Velit numquam corporis nihil sint enim exercitationem. Rem nulla illum sint et id dolore voluptas </p>
      </article>
    </article>
    <article class="col-md-6 col-12 ps-0 d-flex">
      <img class="img-peq" src="./img/vocal-mic-zoom.png" alt="">
      <article class="text-center w-100 bg-white">
        <h3>Kelsi Monahan</h3>
        <h2>Qui occaecati vero et quibusdam non</h2>
        <p class="text">Saepe quia culpa vero. Velit numquam corporis nihil sint enim exercitationem. Rem nulla illum sint et id dolore voluptas </p>
      </article>      
    </article>
    </article>
    <article class="row">
    <article class="col-offset-4 col-8 d-flex">
      <img class="img-med" src="./img/guitar-focus.png" alt="">
      <article class="text-center w-100 bg-white">
        <h3>Kelsi Monahan</h3>
        <h2>Qui occaecati vero et quibusdam non</h2>
        <p class="text">Saepe quia culpa vero. Velit numquam corporis nihil sint enim exercitationem. Rem nulla illum sint et id dolore voluptas </p>
      </article>
    </article>
  </article>
  `;

    console.log('main', lista_posts);
    lista_posts.insertAdjacentHTML('beforeend', posts);

    fetch('https://stormy-shelf-93141.herokuapp.com/articles',
      {
        method: 'GET',
        data: { _page: 1 }
      })
      .then((response) => JSON.stringify(response))
      .then((responseJson) =>
        posts_data = responseJson
      );
    console.log(56, posts_data);

  }
}