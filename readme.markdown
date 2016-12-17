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

```
# start the proxy
$ mitmdump -p 8080 -s stream-traffic.py

# start the node app
$ node app | tee -a stat.json
```

### analyze

`stat.json` should contain your user recommendations and actions (like/pass), every line is a separate JSON object. Explore the data yourself :wink:.

## license

MIT

[mitmproxy]: https://mitmproxy.org/
[node]: https://nodejs.org
