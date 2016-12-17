import urllib.request
import json
from mitmproxy import ctx
import re

def response(flow):
    if flow.request.host != 'api.gotinder.com':
        return None
    try:
        params = json.dumps({
            'req': {
                'host': flow.request.host,
                'path': flow.request.path,
                'method': flow.request.method,
            },
            'res': {
                'status': flow.response.status_code,
                'body': flow.response.text
            },
        }).encode('utf8')
        req = urllib.request.Request('http://localhost:1337', data=params, headers={'content-type': 'application/json'})
        urllib.request.urlopen(req)
    except:
        pass
