import './bootstrap'

import '@bootstrapstudio/bootstrap-better-nav/dist/bootstrap-better-nav.js'

import './navbar-color'
import './smooth-scroll'

if (module.hot)
    module.hot.accept();

$('body').scrollspy({ target: '#lp-navbar-header' });
