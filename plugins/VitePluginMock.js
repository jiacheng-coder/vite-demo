const fs = require('fs')
const path = require('path')

// 拦截 HTTP 请求后返回数据即可
const viteMockServe = (options) => {
  let mockResult = []
  const mockStat = fs.statSync(path.resolve('mock'))
  if (mockStat.isDirectory()) {
    mockResult = require(path.resolve(process.cwd(), './mock/index.js'))
  }
  return {
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const matchItem = mockResult.find((item) => item.url === req.url)
        if (matchItem) {
          const responseData = matchItem.response(req)
          console.log('responseData', responseData)
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(responseData))
        } else {
          next()
        }
      })
    },
  }
}
module.exports = {
  viteMockServe,
}
