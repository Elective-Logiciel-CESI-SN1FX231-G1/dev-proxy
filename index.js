const app = require('express')()
const {createProxyMiddleware} = require('http-proxy-middleware')

app.use(require('morgan')('dev'))
app.use(createProxyMiddleware('/auth/api/',    { target: "http://localhost:44000", pathRewrite: { '^/auth':    '' } }))
app.use(createProxyMiddleware('/sponsor/api/', { target: "http://localhost:44100", pathRewrite: { '^/sponsor': '' } }))
app.use(createProxyMiddleware('/shop/api/',    { target: "http://localhost:44200", pathRewrite: { '^/shop':    '' } }))
app.use(createProxyMiddleware('/orders/api/',  { target: "http://localhost:44300", pathRewrite: { '^/orders':  '' } }))
app.use(createProxyMiddleware('/notify/api/',  { target: "http://localhost:44400", pathRewrite: { '^/notify':  '' } }))
app.use(createProxyMiddleware('/stats/api/',   { target: "http://localhost:44500", pathRewrite: { '^/stats':   '' } }))
app.use(createProxyMiddleware('/logs/api/',    { target: "http://localhost:44600", pathRewrite: { '^/logs':    '' } }))
app.use(createProxyMiddleware('/',    { target: "http://localhost:44700" }))

app.listen(8080)