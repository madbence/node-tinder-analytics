# tinder analytics

## usage

### install

clone the repo with

```sh
$ git clone git@github.com:madbence/node-tinder-analytics.git
```

install [mitmproxy][mitmproxy] and [node][node], also

```sh
$ npm install
```

### run

set up your phone to use `mitmproxy` as an HTTP proxy (make sure that you install the root cert that's needed for decrypting HTTP traffic).

```
# start the proxy (on port 8080)
$ mitmdump -p 8080 -s stream-traffic.py

# start the node app (it will listen on port 1337)
$ node app | tee -a stat.json
```

### analyze

`stat.json` should contain your user recommendations and actions (like/pass), every line is a separate JSON object. Explore the data yourself :wink:.

## license

MIT

[mitmproxy]: https://mitmproxy.org/
[node]: https://nodejs.org
