
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
    'index.csr.html': {size: 6094, hash: '616f5d053774191dfa5dc3637297fee975eb5d5b169052fd7dc837d4e1bc5ff6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1205, hash: 'b200f15ea844bb01868f11f6418bb7089caa6e0fd1f238973563facc59af8515', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'identity/index.html': {size: 19080, hash: '7b839027d81968beb8eed3e768e483a8807dab9f79fe72e7c8d31fc0d7b0f3e4', text: () => import('./assets-chunks/identity_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20735, hash: '86d574542110f569e2d08b8756238708b7af36c073ce1e418ca2a6c5a2b3d856', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'potential/index.html': {size: 16274, hash: 'ab8b1e906fdfaa07d06588c0f0b418a3f19cfcec8e52e2355ce581b998b52a0c', text: () => import('./assets-chunks/potential_index_html.mjs').then(m => m.default)},
    'contactus/index.html': {size: 16130, hash: '6c819ce83070322650a20b6d2708c6cf9da0807f287c0ab34a1e2ce3f5252011', text: () => import('./assets-chunks/contactus_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 11693, hash: 'aec1b15edbf573b4f5dbc5ffc15304ba1932b6f9f7ce9a6a2b0132d1082d531e', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 11616, hash: '73d3db913f46add8b886e4c2d6e810c49815af77739052e549602e0eb21b38f3', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 11130, hash: '63f6948b4c972794f040a9574a0eca43ce99975348fa4e1a43ccc397d922fc06', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-E2UQVONM.css': {size: 305344, hash: 'ei8amviUTVQ', text: () => import('./assets-chunks/styles-E2UQVONM_css.mjs').then(m => m.default)}
  },
};
