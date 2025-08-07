
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
    'index.csr.html': {size: 6094, hash: '303a74ddde4a78c83653ce00d5ccd21ffaa7cd7cbf607369353ac09ca3389fe2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1205, hash: '5b1e64285e19186c66b2135be3051832356a68ecf85a65680780b9045ea7c6d8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'identity/index.html': {size: 19080, hash: '0f1f5bd8857d32c2ad04c0573dc57641e8e37c81fccc2b94b77076e9708c2635', text: () => import('./assets-chunks/identity_index_html.mjs').then(m => m.default)},
    'potential/index.html': {size: 16274, hash: '57afc3f33f518a836c0d3370af37ba76806cf43c21072ad5862b65f672aa79a1', text: () => import('./assets-chunks/potential_index_html.mjs').then(m => m.default)},
    'contactus/index.html': {size: 16130, hash: '3da4a0980c06b0179fd6d348f687a0c81e9c421f79c28af555b3e9552dfdc971', text: () => import('./assets-chunks/contactus_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 11616, hash: '7c03c4fc60837b6b31f1e4a53c5eda7993a92e67089e77cd9c7b75496179fb7a', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 11693, hash: '5ebcde6b52488353c508a44fd69a3ba71f442aacc8fcce78fdb5b5db00bb41f2', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 11130, hash: '05899d767a21951eb0453d4a068f946cfb4b89694f88a93fc4ea9246edd5bb44', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20735, hash: 'c3427caba226ae06577dbc6670a908931bff994f3ad651563f560e8f6d05504f', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-E2UQVONM.css': {size: 305344, hash: 'ei8amviUTVQ', text: () => import('./assets-chunks/styles-E2UQVONM_css.mjs').then(m => m.default)}
  },
};
