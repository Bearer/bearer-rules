user_input = input()

def http_client():
    import http.client

    conn = http.client.HTTPSConnection("ok")
    # bearer:expected python_lang_http_url_using_user_input
    conn = http.client.HTTPSConnection(user_input)

    conn.request("GET", "/")
    # bearer:expected python_lang_http_url_using_user_input
    conn.request("GET", user_input)

    conn.set_tunnel("ok", 42)
    # bearer:expected python_lang_http_url_using_user_input
    conn.set_tunnel(user_input, 42)

    conn.putrequest("GET", "ok")
    # bearer:expected python_lang_http_url_using_user_input
    conn.putrequest("GET", user_input)


def urllib():
    from urllib import request as ur
    import urllib.request

    ur.urlopen("ok", data)
    # bearer:expected python_lang_http_url_using_user_input
    ur.urlopen(user_input, data)

    req = urllib.request.Request("ok", data)
    # bearer:expected python_lang_http_url_using_user_input
    req = urllib.request.Request(user_input, data)

    req.full_url = "ok"
    # bearer:expected python_lang_http_url_using_user_input
    req.full_url = user_input


def requests():
    from requests import get, post
    import requests

    r = requests.get("ok")
    # bearer:expected python_lang_http_url_using_user_input
    r = requests.get(user_input)

    r = requests.post("ok", data={'key': 'value'})
    # bearer:expected python_lang_http_url_using_user_input
    r = requests.post(user_input, data={'key': 'value'})

    r = requests.request("GET", "ok")
    # bearer:expected python_lang_http_url_using_user_input
    r = requests.request("GET", user_input)

    req = requests.Request('GET', "ok")
    # bearer:expected python_lang_http_url_using_user_input
    req = requests.Request('GET', user_input)

    with requests.Session() as s:
        s.get("ok")
        # bearer:expected python_lang_http_url_using_user_input
        s.get(user_input)

        s.request("GET", "ok")
        # bearer:expected python_lang_http_url_using_user_input
        s.request("GET", user_input)


def httpx():
    import httpx

    response = httpx.get("ok")
    # bearer:expected python_lang_http_url_using_user_input
    response = httpx.get(user_input)

    httpx.request("GET", "ok")
    # bearer:expected python_lang_http_url_using_user_input
    httpx.request("GET", user_input)

    client = httpx.Client(base_url="ok")
    # bearer:expected python_lang_http_url_using_user_input
    client = httpx.Client(base_url=user_input)

    client.get("ok")
    # bearer:expected python_lang_http_url_using_user_input
    client.get(user_input)
    
    client.stream("POST", "ok")
    # bearer:expected python_lang_http_url_using_user_input
    client.stream("POST", user_input)


async def aiohttp(url):
    import aiohttp

    aiohttp.ClientSession("ok", cookies={})
    # bearer:expected python_lang_http_url_using_user_input
    aiohttp.ClientSession(user_input, cookies={})

    async with aiohttp.ClientSession() as session:
        await session.get("ok")
        # bearer:expected python_lang_http_url_using_user_input
        await session.get(user_input)

        await session.request("GET", "ok")
        # bearer:expected python_lang_http_url_using_user_input
        await session.request("GET", user_input)

    await aiohttp.request("GET", "ok")
    # bearer:expected python_lang_http_url_using_user_input
    await aiohttp.request("GET", user_input)


def httplib2():
    import httplib2
    h = httplib2.Http(".cache")

    h.request("ok", "GET")
    # bearer:expected python_lang_http_url_using_user_input
    h.request(user_input, "GET")


def urllib3():
    import urllib3

    urllib3.request("GET", "ok")
    # bearer:expected python_lang_http_url_using_user_input
    urllib3.request("GET", user_input)

    http = urllib3.PoolManager()
    http.request('GET', "ok")
    # bearer:expected python_lang_http_url_using_user_input
    http.request('GET', user_input)

    http2 = urllib3.ProxyManager("ok", 42)
    # bearer:expected python_lang_http_url_using_user_input
    http2 = urllib3.ProxyManager(user_input, 42)

    pool = http2.connection_from_host("ok", 42)
    # bearer:expected python_lang_http_url_using_user_input
    pool = http2.connection_from_host(user_input, 42)
    # bearer:expected python_lang_http_url_using_user_input
    pool = http2.connection_from_host("ok", user_input)

    http.connection_from_url("ok", {})
    # bearer:expected python_lang_http_url_using_user_input
    http.connection_from_url(user_input, {})

    http.proxy = "ok"
    # bearer:expected python_lang_http_url_using_user_input
    http.proxy = user_input

    pool2 = urllib3.HTTPConnectionPool("ok", 42) #HTTPSConnectionPool
    # bearer:expected python_lang_http_url_using_user_input
    pool2 = urllib3.HTTPConnectionPool(user_input, 42)
    # bearer:expected python_lang_http_url_using_user_input
    pool2 = urllib3.HTTPConnectionPool("ok", user_input)

    pool3 = urllib3.connectionpool.connection_from_url("ok", {})
    # bearer:expected python_lang_http_url_using_user_input
    pool3 = urllib3.connectionpool.connection_from_url(user_input, {})

    pool.urlopen('GET', "ok")
    # bearer:expected python_lang_http_url_using_user_input
    pool.urlopen('GET', user_input)
    # bearer:expected python_lang_http_url_using_user_input
    pool2.urlopen('GET', user_input)
    # bearer:expected python_lang_http_url_using_user_input
    pool3.urlopen('GET', user_input)

    connection = urllib3.connection.HTTPConnection("ok", 42)
    # bearer:expected python_lang_http_url_using_user_input
    connection = urllib3.connection.HTTPConnection(user_input, 42)
    # bearer:expected python_lang_http_url_using_user_input
    connection = urllib3.connection.HTTPConnection("ok", user_input)
    # bearer:expected python_lang_http_url_using_user_input
    connection = urllib3.connection.HTTPConnection("ok", proxy=user_input)

    connection.request("GET", "ok")
    # bearer:expected python_lang_http_url_using_user_input
    connection.request("GET", user_input)

    connection.request_chunked("GET", "ok")
    # bearer:expected python_lang_http_url_using_user_input
    connection.request_chunked("GET", user_input)
    
    connection.set_tunnel("ok", 42, {})
    # bearer:expected python_lang_http_url_using_user_input
    connection.set_tunnel(user_input, 42, {})
    # bearer:expected python_lang_http_url_using_user_input
    connection.set_tunnel("ok", user_input, {})