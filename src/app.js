const routes = {
  "/home/": home,
  "/contact/": contact,
  "/post/": post,
};
const contentMain = document.querySelector("#content");

function onNavigate(pathname, params) {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  contentMain.innerHTML = routes[pathname]();
}

window.onpopstate = () => {
  contentMain.innerHTML = routes[window.location.pathname]();
};
