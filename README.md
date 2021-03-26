# Motion Server

Sync data from diferent HTML elements

Forked from: http://github.com/tidoust/timingservice.git

## Quick start

By default, Motion Server use HTTPS, so you need create the certificates before run the server. To test it in local, you can create a self-signed certificate with OpenSSL (NOTE: Not recommend do this in production. In production you should generate the certificates of your domain)

```bash
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
mv key.pem certs/key.pem
mv cert.pem certs/cert.pem
```

Once you have the certificates, you can run the server:

```bash
npm i
npm start
```

## Choose use HTTP or HTTPS

The server run an HTTP server or HTTPS server depending of the environment variable **USE_HTTPS**. If you want to run the server with HTTP, you must set this variable to false before run the server:

```bash
export USE_HTTPS=false
```

If you now run the server, it will create a HTTP server instead of HTTPS:

```bash
npm start
```

## Contributing

If you want to contribute to this repository, please follow the instructions in [CONTRIBUTING.md](./CONTRIBUTING.md)

