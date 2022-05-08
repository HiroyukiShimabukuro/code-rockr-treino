  const routes = {
    '/home/': home,
    '/contact/': contact,
    '/post/': post
  }
  const contentMain = document.querySelector('#content');
  contentMain.innerHTML = routes[window.location.pathname];
  
  function onNavigate(pathname) {
    console.log(10,pathname);
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
