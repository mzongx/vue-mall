var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var goodsRouter = require('./routes/goods')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'views')))

// 全局登录拦截，根据cookie判断用户是否登录，防止刷新失去用户信息,位置要放在这里，不能放在下面
app.use((req, res, next) => {
  let userId = req.cookies.userId
  if (userId) {
    // 如果是监测到cookies，则表示用户已登陆，直接next
    next()
  } else {
    // 如果用户未登录，则定义几个白名单，未登录可访问，登录，登出，商品列表
    if (req.originalUrl === '/api/users/login' || req.originalUrl === '/api/users/logout' || req.path === '/api/goods/list') {
      // req.originaUrl是地址源，后面的参数都会获取到
      // req.path只获取到路径，不获取?page=2&pageSize=8
      next()
    } else {
      // 如果没有userId,并且不是在白名单中，就返回未登录
      res.json({
        status: '10001',
        msg: '未登录',
        result: ''
      })
    }
  }
})

app.use('/', indexRouter)
app.use('/api/users', usersRouter)
app.use('/api/goods', goodsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
