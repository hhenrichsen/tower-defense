const serve = require('koa-static');
const compress = require('koa-compress')
const mount = require('koa-mount');
const logger = require('koa-logger');
const Koa = require('koa');
const app = new Koa();
 
// $ GET /package.json
app.use(serve('./dist', {
    setHeaders(res) {
        res.setHeader('cache-control', 'immutable');
    }
}));
 
app.use(compress({
  filter (content_type) {
  	return /text/i.test(content_type)
  },
  threshold: 2048,
  gzip: {
    flush: require('zlib').constants.Z_SYNC_FLUSH
  },
  deflate: {
    flush: require('zlib').constants.Z_SYNC_FLUSH,
  },
  br: false // disable brotli
}))

app.listen(3000);

console.log("Running on http://localhost:3000")
app.use(logger());