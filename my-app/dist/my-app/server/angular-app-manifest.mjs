
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/identity"
  },
  {
    "renderMode": 2,
    "route": "/potential"
  },
  {
    "renderMode": 2,
    "route": "/contactus"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/register"
  }
],
  assets: {
    'index.csr.html': {size: 6094, hash: '021a00ea6dfd9adcc58fb15cf01e8ebcd160eceac295e9a4810303659240d343', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1205, hash: '7c91f2d55677ed6a692e1adfe9c9c18dee35146c2a184492c40c2c243ad1a7cb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'potential/index.html': {size: 16274, hash: '164516bc324111fd2ef6109c2ef857b9c608cc426b3e8eb2be9783f200e33dd8', text: () => import('./assets-chunks/potential_index_html.mjs').then(m => m.default)},
    'identity/index.html': {size: 19080, hash: '16d07b8724d9a900536187fa87032ebaf8c6ed4ca4216e212623ff0100cdf787', text: () => import('./assets-chunks/identity_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20735, hash: '29061bd16eaef0fc44562f905db176322a78ac0d2c64f7be152474c17225ab96', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contactus/index.html': {size: 16130, hash: '2c577d61846675467caf8762a09605b4160415a664d148f3c0dc62a5794239a3', text: () => import('./assets-chunks/contactus_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 11693, hash: '6250eacca0cbb8c46055852d59fb2ed532aa52766fb4b1d35b9b59bf9de6497c', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 11616, hash: '8992e7ccc70a9bdce14058d4a6f3c8723f49bf13e8ddab9a7b69c8db9d603750', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 11130, hash: '147b6d8ee0fbc6456b90125be857edb0f6e050f24402625d19f4275d52fba0c4', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-E2UQVONM.css': {size: 305344, hash: 'ei8amviUTVQ', text: () => import('./assets-chunks/styles-E2UQVONM_css.mjs').then(m => m.default)}
  },
};
