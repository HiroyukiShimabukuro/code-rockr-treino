const routes = {
  "/post/": post,
  "/contact/": contact,
  "/home/": home,
};
let contentMain = document.querySelector("#content");
console.log(window.location.pathname);
if(window.location.pathname == '/src/'){
  setTimeout(() => {
    contentMain.innerHTML = '';
    onNavigate("/home/")
  }, 500);
} 
function onNavigate(pathname, params) {
  console.log(10, window.location.pathname);
  window.history.pushState({}, pathname, window.location.origin + pathname);
  contentMain.innerHTML = params ? routes[pathname](params) : routes[pathname]();
}

window.onpopstate = () => {
  contentMain.innerHTML = routes[window.location.pathname]();
};
