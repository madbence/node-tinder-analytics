# :bar_chart: tinder analytics

> :bar_chart: analyze your own tinder usage behavior

## usage

### :turtle: install

clone the repo with

```sh
$ git clone git@github.com:madbence/node-tinder-analytics.git
```

install [mitmproxy][mitmproxy] and [node][node], also you probably need to

```sh
$ npm install
```

### :rocket: run

set up your phone to use `mitmproxy` as an HTTP proxy (make sure that you install the root cert that's needed for decrypting HTTPS traffic).

```
# start the proxy (on port 8080)
$ mitmdump -p 8080 -s stream-traffic.py

# start the node app (it will listen on port 1337)
$ node app | tee -a stat.json
```

use tinder as usual...

### :bar_chart: analyze

`stat.json` should contain your user recommendations and actions (like/pass), every line is a separate JSON object. Explore the data yourself :wink:.

I have a few scripts that can plot pretty graphs, i'll publish them soon!

## license

MIT

[mitmproxy]: https://mitmproxy.org/
[node]: https://nodejs.org
