  const routes = {
    '/': home,
    '/contact': contact,
    '/post/': post
  }
  console.log(6,window.location.href);
  console.log(7,window.location.pathname);
  console.log(7,routes);
  const contentMain = document.querySelector('#content');
  contentMain.innerHTML = routes[window.location.pathname];
  
  document.onreadystatechange = () => {

  // console.log(8,contentMain);

  function onNavigate(pathname) {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    )
    contentMain.innerHTML = routes[pathname]
  }

  window.onpopstate = () => {
    contentMain.innerHTML = routes[window.location.pathname];
  }
}
