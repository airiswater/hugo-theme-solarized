## Introduction

Hugo theme with Solarized color scheme, based on Bulma. <a href="https://linuxisekai.site">Demo</a>.


<img src="/images/screenshoot.png">


## Features

<ul>
<li>Bulma</li>
<li>MasonryJS</li>
<li>Include service worker</li>
<li>Font Awesome 5.9.0</li>
<li>HighlightJS</li>
</ul>

## Installation

Installation process is the same as other themes.

    $ git clone https://github.com/linuxisekai/hugo-theme-solarized.git
    $ cp -rf hugo-theme-solarized ~/hugo-project/themes

#### config.toml

    themesDir = "themes"
    theme = "hugo-theme-solarized"

## Go offline!! Install service worker

#### 1. Move gulpfile.js to root directory of Hugo

    mv ~/hugo-project/theme/hugo-solarized/gulpfile.js ~/hugo-project/gulpfile.js

#### 2. Install Workbox and gulp

Make sure you have npm installed, then run this command in your Hugo root directory.

    $ npm init -y
    $ npm install gulp --save-dev
    $ npm install workbox-build --save-dev
    $ npm install gulp-clean --save-dev
    $ npm install gulp-shell --save-dev

#### 3. Create manifest.json

Visit http://www.favicomatic.com/ and upload your image to make it a favicon, (I recommend that you create these sizes: 128x128,144x144,152x152,196x196,310x310).

    $ cd ~/hugo-project/static
    $ mkdir -p image/icons

Put the favicons into <code>static/image/icons</code>.

Create <code>manifest.json</code> on static folder.

    {
    "name": "Hugo is cool.",
    "short_name": "Your site shortname.",
    "icons": [
      {
      "src": "/img/icons/favicon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    }, {
      "src": "/img/icons/favicon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    }, {
      "src": "/img/icons/favicon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },{
      "src": "/img/icons/favicon-196x196.png",
      "sizes": "196x196",
      "type": "image/png"
    },{
      "src": "/img/icons/favicon-310x310.png",
      "sizes": "310x310",
      "type": "image/png"
    }
    ],
    "display": "standalone",
    "orientation" : "portrait",
    "background_color": "#002B36",
    "theme_color": "#073642",
    "start_url": "/"
    }

Make sure favicon's name and path is the same.

#### 4. Run build task

Open VSCode and <code><i>ctrl+shift+p</i> => <i>Task : Run task</i> => <i>gulp : build </i> => <i>continue without scanning the task output</i></code>

This command will create <code>sw.js</code> file in <code>public</code> directory, so please check your <code>public</code> directory.

This is an example of <code>sw.js</code> file on my project.

    /**
    * Welcome to your Workbox-powered service worker!
    *
    * You'll need to register this file in your web app and you should
    * disable HTTP caching for this file too.
    * See https://goo.gl/nhQhGp
    *
    * The rest of the code is auto-generated. Please don't update this file
    * directly; instead, make changes to your Workbox build configuration
    * and re-run your build process.
    * See https://goo.gl/2aRDsh
    */

    importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

    workbox.core.setCacheNameDetails({prefix: "Linuxisekai"});

    workbox.core.skipWaiting();

    workbox.core.clientsClaim();

    /**
    * The workboxSW.precacheAndRoute() method efficiently caches and responds to
    * requests for URLs in the manifest.
    * See https://goo.gl/S9QRab
    */
    self.__precacheManifest = [
    {
    "url": "/css/bs.css",
    "revision": "417f7a255065a91ee9ec2f44eb321a22"
    },
    {
    "url": "/css/bulma.css",
    "revision": "b15b1b1893809fc6c6a8d7268fd7d3fe"
    },
    {
    "url": "/css/custom.css",
    "revision": "84f1a3067b47c6240f071563f194e127"
    },
    {
    "url": "/css/solarized-dark.css",
    "revision": "09a127856dba4865a3429ea0c0f756fd"
    },
    {
    "url": "/js/core.js",
    "revision": "06f03a8cb3b8a7f3dd0feccf62afac66"
    },
    {
    "url": "/js/feather.min.js",
    "revision": "a6cd4b6cf83ee3b37fc6f4d59294619b"
    },
    {
    "url": "/js/highlight.pack.js",
    "revision": "0c675cebad7b4fce6bfb948a274a940f"
    },
    {
    "url": "/js/jquery.js",
    "revision": "99b0a83cf1b0b1e2cb16041520e87641"
    },
    {
    "url": "/js/lazysizes.min.js",
    "revision": "149ff45fc6c2f13e892e438a58abb77f"
    },
    {
    "url": "/js/masonry.js",
    "revision": "c39480835cf00844e6407f24d8aaba2e"
    }
    ].concat(self.__precacheManifest || []);
    workbox.precaching.precacheAndRoute(self.__precacheManifest, {
    "ignoreURLParametersMatching": [/./]
    });

    workbox.routing.registerRoute(/(?:\/)$/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"html", plugins: [new workbox.expiration.Plugin({ maxAgeSeconds: 604800, purgeOnQuotaError: false })] }), 'GET');
    workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
    workbox.routing.registerRoute(/\.(?:mp3|wav|m4a)$/, new workbox.strategies.CacheFirst({ "cacheName":"audio", plugins: [new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
    workbox.routing.registerRoute(/\.(?:m4v|mpg|avi)$/, new workbox.strategies.CacheFirst({ "cacheName":"videos", plugins: [new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');

    workbox.googleAnalytics.initialize({});

Installation of service worker is now complete.

Please see <code>ExampleSite</code> directory for examples of the configurations.

Preview for this this theme? https://linuxisekai.site

##### I hope you are happy with this theme and enjoy my work 😇
