var global = global || window;
function initApp() {
  d = document;
  s = d.createElement('script');
  s.type = 'module';
  s.src =
    process.env.NODE_ENV !== 'production'
      ? 'https://cdn-dev.3shop.co/app/index.js'
      : 'https://cdn.3shop.co/app/index.js';
  s.async = 1;
  d.getElementsByTagName('head')[0].appendChild(s);
  l = d.createElement('link');
  l.rel = 'stylesheet';
  l.href =
    process.env.NODE_ENV !== 'production'
      ? 'https://cdn-dev.3shop.co/app/index.css'
      : 'https://cdn.3shop.co/app/index.css';
  d.getElementsByTagName('head')[0].appendChild(l);
}
window.__3SHOP_APP_ID__ = process.env.APP_ID;
initApp();
