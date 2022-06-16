const app = require('express')()
const {createProxyMiddleware} = require('http-proxy-middleware')

app.use(require('morgan')('dev'))
app.use(createProxyMiddleware('/auth',    { target: "http://localhost:44000", pathRewrite: { '^/auth':    '' } }))
app.use(createProxyMiddleware('/sponsor', { target: "http://localhost:44100", pathRewrite: { '^/sponsor': '' } }))
app.use(createProxyMiddleware('/shop',    { target: "http://localhost:44200", pathRewrite: { '^/shop':    '' } }))
app.use(createProxyMiddleware('/orders',  { target: "http://localhost:44300", pathRewrite: { '^/orders':  '' } }))
app.use(createProxyMiddleware('/notify',  { target: "http://localhost:44400", pathRewrite: { '^/notify':  '' } }))
app.use(createProxyMiddleware('/stats',   { target: "http://localhost:44500", pathRewrite: { '^/stats':   '' } }))
app.use(createProxyMiddleware('/logs',    { target: "http://localhost:44600", pathRewrite: { '^/logs':    '' } }))

app.listen(8080)