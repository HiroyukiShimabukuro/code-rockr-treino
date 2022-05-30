let post = (document.onreadystatechange = (params) => {
  var page;
  var posts_data = [];
  if (document.readyState === "complete") {
    let post = document.querySelector("#content");
    
    fetch("https://stormy-shelf-93141.herokuapp.com/articles?" +params, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        page = 1;
        posts_data.push(responseJson);
        post = posts_data;
      });

  }
});
