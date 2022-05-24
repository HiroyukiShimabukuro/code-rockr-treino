let post = document.onreadystatechange = () => {
  let id = window.location.href('?');
  id = id.split('?');
  console.log(4,id[0]);
  if (document.readyState === 'complete') {
    const lista_posts = document.querySelector('#content');

    function mountPost() {
      posts += `
          <article class="container bg-white">
            
          </article>
          `
    };
    

    fetch('https://stormy-shelf-93141.herokuapp.com/articles?'+id,
      {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((responseJson) => {
        post = responseJson;
      });
    mountPost();
  }
